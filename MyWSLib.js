const WebSocket = require("ws");

const MyWSLib = function () {
  const MyWSLib = this || {};
  const clients = {};
  const clients2 = [];
  MyWSLib.setupWS = server => {

    const wss = new WebSocket.Server({ server: server });
    console.log("setting up socket");

    wss.on("connection", ws => {
      console.log("Accepting connection");
      ws.on("message", message => {
        if (message.includes("END:")) {
          const user = message.split(":")[1];
          console.log("cerremos");
          clients[user].close();
          delete clients[user];
        }
        else if(message===""){
          //Nothing to do
        }
        else {
          clients[message] = ws;
          clients2.push(ws);
          console.log("Connection accepted", message);
        }
      });
    });
  };


  MyWSLib.notifyAll = data => {
    Object.keys(clients).forEach(function (user) {
      clients[user].send("services#" + JSON.stringify(data));
    });
    // for (let user of Object.keys(clients)) {
    //   console.log(user, clients[user], i);
    //   clients[user].send("services#"+JSON.stringify(data));
    //   i++;
    // }
  };

  MyWSLib.notifyChangeCar = data => {
    const tempJson = JSON.parse(data);
    console.log("Upa", tempJson);
    let a=tempJson[0];
    const userT = a.uid;
    if (clients[userT]) {
      clients[userT].send("cars#" + JSON.stringify(tempJson));
    }
  };

  return MyWSLib;
};

module.exports = MyWSLib;
