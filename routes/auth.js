const express = require("express");
const router = express.Router({});
const crypto = require("crypto");
const { execQuery, functions } = require("../db");

const collection_name = "users";
const collection_name_token = "auth";

const genRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString("hex") /** convert to hexadecimal format */
    .slice(0, length);   /** return required number of characters */
};

const sha512 = (password, salt) => {
  const hash = crypto.createHmac("sha512", password);
  const value = hash.digest("hex");
  return {
    salt: salt,
    passwordHash: value
  };
};

router.post("/signup", (req, res) => {

  const body = req.body;

  const salt = genRandomString(16);
  const tpassword = sha512(body.password, salt);
  const uid = body.uid;
  const password = tpassword.salt + tpassword.passwordHash;

  (async () => {
    const yaEsta = await execQuery(functions.getOne, collection_name, { uid });
    if (yaEsta) {
      res.status(403);
      res.send({ msg: "User already exists" });
    }
    else {
      await execQuery(functions.createOne, collection_name, { uid, password });
      const token = sha512(genRandomString(16), "");
      await execQuery(functions.replaceOne, collection_name_token, { uid }, { uid, token: token.passwordHash });
      res.send({ token: token.passwordHash });
    }
  })();
});

router.post("/signin", (req, res) => {
  const body = req.body;
  const uid = body.uid;
  const tpassword = sha512(body.password, "");

  (async () => {
    try {
      const data = await execQuery(functions.getOne, collection_name, { uid });
      if (data) {
        if (data.password.slice(16) === tpassword.passwordHash) {
          const token = sha512(genRandomString(16), "");
          await execQuery(functions.replaceOne, collection_name_token, { uid }, { uid, token: token.passwordHash });
          res.send({ token: token.passwordHash });
        } else {
          res.status(403);
          res.send({ msg: "Wrong password" });
        }
      }
      else{
        res.status(403);
        res.send({ msg: "The user does not exist" });
      }
    } catch (error) {
      res.status(403);
      console.log(error);
      res.send({ msg: "Wrong user" });
    }
  })();
});

module.exports = router;