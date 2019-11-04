const express = require("express");
const router = express.Router({});
const { execQuery, functions } = require("../db");
const authorized = require("../authorized");

const collection_name = "cars";


router.get("/consultarsaldo/:userDocType/:userId", function (req, res, next) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
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

router.post("/agregarsaldo", function (req, res, next) {
  (async () => {
    const hasAuth = await authorized(req);
    if (hasAuth) {
      const body = req.body;
      const userId = body.uid;
      const saldoAgregar = body.saldoAgregar;

      try {
        await execQuery(functions.createOne, collection_name, { "uid": userId }, { $inc: { "saldo": saldoAgregar } });
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





