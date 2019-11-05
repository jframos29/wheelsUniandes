const express = require("express");
const router = express.Router({});
const { execQuery, functions } = require("../db");
const authorized = require("../authorized");
const { functionsGoogle } = require("../maps");

const collection_name = "services";

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
      try {
        await execQuery(functions.createOne, collection_name, body);
        res.status(200);
        res.send({ msg: "OK" });
      } catch (error) {
        res.status(500);
        res.send({msg:error});
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
      const idService = body.idService;
      const idUser = body.uid;
      const destino = body.destination;
      try {
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$push": { "usuarios": idUser } });
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$push": { "waypoints": destino } });
        res.status(200);
        res.send({ msg: "OK" });
      } catch (error) {
        res.status(500);
        res.send({msg:error});
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
        res.send({msg:error});
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
        res.send({msg:error});
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
      console.log(body);
      const destination = body.fin;
      const initial = body.inicio;
      var resultados = [];
      const result = await execQuery(functions.get, collection_name, { "comenzado":false,"terminado": false });

      
      for (let service in result) {
        console.log(result[service], result[service].destination);
        const distanciaDestination = getKilometros(result[service].destination.lat, result[service].destination.lng, destination.lat, destination.lng);
        const distanciaInitial = getKilometros(result[service].initial.lat, result[service].initial.lng, initial.lat, initial.lng);
        if (distanciaDestination <= 1 && distanciaInitial <= 0.5) {
          resultados.push(result[service]);
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
    if(hasAuth){
      const body = req.body;
      const calificacion = body.calificacion;
      const idService = body.idService;
      const result = await execQuery(functions.getOne, collection_name, { "_id":idService,"terminado": true });
      if(result){
        await execQuery(functions.updateOne, collection_name, { "_id": idService }, { "$push": { "calificaciones": calificacion } });
        res.status(200);
        res.send({msg:"OK"});
      }
      else{
        res.status(400);
        res.send({msg:"El servicio no ha finalizado"});
      }
    }
    else{
      res.sendStatus(403);
    }
  })();
});

router.get("/historialServicio/:userId", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if(hasAuth){
      const uid = req.params.userId;
      const result = await execQuery(functions.get, collection_name, { "terminado": true, "usuarios": { "$elemMatch": uid } });
      res.status(200);
      res.send(JSON.stringify(result));
    }
    else{
      res.sendStatus(403);
    }
  })();
});


router.get("/mejorRuta/:idService", function (req, res) {

  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const idService = req.params.idService;
      const result = await execQuery(functions.getOne, collection_name, { "_id":idService });
      try {
        const resultado = await functionsGoogle.directions(result.initial, result.destination, result.waypoints, result.departureTime);
        res.status(200);
        res.send(JSON.stringify(resultado.json));
      } catch (error) {
        res.status(500);
        res.send({msg:error});
      }
    }
    else {
      res.sendStatus(403);
    }
  })();

});

router.post("/confirmarServicio", function (req, res) {

  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const direccionInicio = body.direccionInicio;
      const direccionFin = body.direccionFin;
      try {
        const resultadoInicio = await functionsGoogle.geocoding(direccionInicio);
        const resultadoFin = await functionsGoogle.geocoding(direccionFin);
        console.log(resultadoInicio);
        console.log(resultadoFin);
        res.status(200);
        res.send({"resultadoInicio":resultadoInicio.json,
          "resultadoFin":resultadoFin.json});
      } catch (error) {
        res.status(500);
        res.send({"msg":error});
      }
    }
    else {
      res.sendStatus(403);
    }
  })();

});

module.exports = router;