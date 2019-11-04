const express = require("express");
const router = express.Router({});
const { execQuery, functions } = require("../db");
const authorized = require("../authorized");

const collection_name = "services";


router.get("/:userId", function (req, res) {
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

router.post("/agregarCarro", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const userId = body.uid;
      const carro = body.carro;
      carro["uid"]=userId;
      try {
        await execQuery(functions.createOne, collection_name, carro);
        res.status(200);
        res.send("OK");
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