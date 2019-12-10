const express = require("express");
const router = express.Router({});
const { execQuery, functions } = require("../db");
const authorized = require("../authorized");
const { functionsGoogle } = require("../maps");

const collection_name = "services";
const ObjectId = require("mongodb").ObjectID;
const getKilometros = (lat1, lon1, lat2, lon2) => {
  var rad = function (x) { return x * Math.PI / 180; };
  var R = 6378.137;
  var dLat = rad(lat2 - lat1);
  var dLong = rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d.toFixed(3);
};


router.post("/crearServicio", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const valores = await functionsGoogle.directions(body["initial"], body["destination"], body["departureTime"]);
      const valRuta = valores["json"]["routes"][0]["legs"][0];
      body["duracionAprox"] = valRuta["duration_in_traffic"]["text"];
      body["distancia"] = valRuta["distance"]["text"];
      const valRuta1 = valRuta["steps"];
      const tam = valRuta1.length;
      for (let info = 0; info < tam; info++) {
        if (info === 0) {
          var auxi = valRuta1[info]["start_location"];
          auxi["orden"] = info;
          body["ruta"].push(auxi);
        }
        var auxi2 = valRuta1[info]["end_location"];
        auxi2["orden"] = info;
        body["ruta"].push(auxi2);
        var auxi3 = {};
        auxi3["html_instructions"] = valRuta1[info]["html_instructions"];
        auxi3["orden"] = info;
        body["instrucciones"].push(auxi3);
      }
      try {
        await execQuery(functions.createOne, collection_name, body);
        res.status(200);
        res.send({ msg: "OK" });
      } catch (error) {
        res.status(500);
        res.send({ msg: error });
      }
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.post("/unirseServicio", function (req, res) {

  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const idService = ObjectId(body.idService);
      const idUser = body.uid;
      const destino = body.destination;
      try {
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$push": { "usuarios": idUser } });
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$push": { "waypoints": destino } });
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$inc": { "cuposRestantes": -1 } });
        res.status(200);
        res.send({ msg: "OK" });
      } catch (error) {
        res.status(500);
        res.send({ msg: error });
      }
    }
    else {
      res.sendStatus(403);
    }
  })();

});

router.delete("/cancelarServicio", function (req, res) {

  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const idService = body.idService;
      const idUser = body.uid;
      try {
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$pull": { "usuarios": { "$eq": idUser } } });
        res.status(200);
        res.send({ msg: "OK" });
      } catch (error) {
        res.status(500);
        res.send({ msg: error });
      }
    }
    else {
      res.sendStatus(403);
    }
  })();

});

router.get("/terminarServicio/:idService", function (req, res) {

  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const idService = req.params.idService;
      try {
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$set": { "terminado": true } });
        res.status(200);
        res.send({ msg: "OK" });
      } catch (error) {
        res.status(500);
        res.send({ msg: error });
      }
    }
    else {
      res.sendStatus(403);
    }
  })();

});



router.post("/buscarServicio", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const destination = body.fin;
      const initial = body.inicio;
      const maxDistInicio = body.maxDistInicio;
      const maxDistFinal = body.maxDistFinal;
      var resultados = [];
      var bandera = false;
      var distanciaInitial=0;
      var distanciaDestination=0;
      const result = await execQuery(functions.get, collection_name, { "comenzado": false, "terminado": false });
      for (let service of result) {
        var aux={};
        for (let point of service.ruta) {
          distanciaInitial = getKilometros(point.lat, point.lng, initial.lat, initial.lng)*1000;
          if (distanciaInitial <= +(maxDistInicio)) {
            aux["puntoInicial"]=point;
            bandera = true;
            break;
          }
        }
        if (bandera==true) {
          for (let point of service.ruta) {
            distanciaDestination = getKilometros(point.lat, point.lng, destination.lat, destination.lng)*1000;
            if (distanciaDestination <= +(maxDistFinal)) {
              aux["servicio"] = service;
              aux["puntoFinal"] = point;
              aux["distDest"] = distanciaDestination;
              aux["distIni"] = distanciaInitial;
              resultados.push(aux);
              break;
            }
          }
        }
      }
      res.send(JSON.stringify(resultados));
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.post("/calificarServicio", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const calificacion = body.calificacion;
      const idService = body.idService;
      const result = await execQuery(functions.getOne, collection_name, { "_id": idService, "terminado": true });
      if (result) {
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$push": { "calificaciones": calificacion } });
        res.status(200);
        res.send({ msg: "OK" });
      }
      else {
        res.status(400);
        res.send({ msg: "El servicio no ha finalizado" });
      }
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.get("/historialServicio/:userId", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const uid = req.params.userId;
      const result = await execQuery(functions.get, collection_name, { "terminado": true, "usuarios": { "$elemMatch": uid } });
      res.status(200);
      res.send(JSON.stringify(result));
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.post("/misServicios", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const user = JSON.parse(req.header("user"));
      var resultados = [];
      const result = await execQuery(functions.get, collection_name, { "dueño": user.uid });
      for (let service in result) {
        resultados.push(result[service]);
      }
      res.send(JSON.stringify(resultados));
    }
    else {
      res.sendStatus(403);
    }
  })();
});


router.post("/todosServicios", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      var resultados = [];
      const result = await execQuery(functions.get, collection_name, {});
      for (let service in result) {
        resultados.push(result[service]);
      }
      res.send(JSON.stringify(resultados));
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.post("/confirmarMapa", function (req, res) {

  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const direccionInicio = body.direccionInicio;
      const direccionFin = body.direccionFin;
      try {
        const resultadoInicio = await functionsGoogle.geocoding(direccionInicio);
        const resultadoFin = await functionsGoogle.geocoding(direccionFin);
        res.status(200);
        res.send({
          "resultadoInicio": resultadoInicio.json,
          "resultadoFin": resultadoFin.json
        });
      } catch (error) {
        res.status(500);
        res.send({ "msg": error });
      }
    }
    else {
      res.sendStatus(403);
    }
  })();

});



module.exports = router;