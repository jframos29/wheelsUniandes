const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.send("API de Wheels Uniandes");
});


module.exports = router;
