const express = require("express");
const router = express.Router({});
const { execQuery, functions } = require("../db");
const authorized = require("../authorized");
const {functionsGoogle} = require("../maps");

const collection_name = "services";


router.post("unirseServicio/", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    const user = req.header("user") ? JSON.parse(req.header("user")): null;
    if (hasAuth && req.params.userId===user) {
      const userId = req.params.userId;
      try {
        const result = await execQuery(functions.get, collection_name, { "uid": userId });
        res.send(JSON.stringify(result));
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.post("/crearServicio", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const service = body.service;
      try {
        await execQuery(functions.createOne, collection_name, service);
        res.status(200);
        res.send({msg:"OK"});
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.post("/confirmarServicio",function(req, res){

  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const direccionInicio = body.direccionInicio;
      const direccionFin = body.direccionFin;
      try {
        const resultadoInicio= await functionsGoogle.geocoding(direccionInicio);
        const resultadoFin= await functionsGoogle.geocoding(direccionFin);
        console.log(resultadoInicio);
        console.log(resultadoFin);
        res.status(200);
        res.send({msg:"OK"});
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    }
    else {
      res.sendStatus(403);
    }
  })();

});

module.exports = router;