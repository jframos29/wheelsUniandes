const { execQuery, functions } = require("./db");

const collection_name = "auth";

const validate = (req) => {
  const token = req.header("Authorization") && req.header("Authorization").substring("Bearer ".length);
  const user = req.header("user") ? JSON.parse(req.header("user")) : null;

  return new Promise((resolve, reject) => {
    (async () => {
      if (user) {
        try {
          const data = await execQuery(functions.getOne, collection_name, { utype: user.utype, uid: user.uid });
          if (data.token === token) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
        catch (e) { reject(e); }
      } else {
        resolve(false);
      }
    })();
  });
};

module.exports = validate;