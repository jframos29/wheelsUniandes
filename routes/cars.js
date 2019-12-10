const express = require("express");
const router = express.Router({});
const { execQuery, functions } = require("../db");
const authorized = require("../authorized");

const collection_name = "cars";



router.get("/:userId", function (req, res) {
  (async () => {
    const hasAuth = await authorized(req);
    const user = req.header("user") ? JSON.parse(req.header("user")): null;
    if (hasAuth && req.params.userId===user.uid) {
      const userId = req.params.userId;
      try {
        const result = await execQuery(functions.get, collection_name, { "uid": userId });
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
      } catch (error) {
        res.status(500);
        res.send({msg : error});
      }
    }
    else {
      res.sendStatus(403);
    }
  })();
});

router.post("/agregarcarro", function (req, res) {
  (async () => {
    console.log("buenas");
    const hasAuth = await authorized(req);
    console.log(hasAuth);
    if (hasAuth) {
      const body = req.body;
      console.log(body);

      const userId = body.uid;
      const carro = body.carro;
      carro["uid"]=userId;
      try {
        await execQuery(functions.createOne, collection_name, carro);
        res.status(200);
        res.send({msg:"OK"});
      } catch (error) {
        res.status(500);
        res.send({msg : error});
      }
    }
    else {
      res.sendStatus(403);
    }
  })();
});



module.exports = router;





