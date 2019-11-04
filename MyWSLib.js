const WebSocket = require("ws");

const MyWSLib = function () {
  const MyWSLib = this || {};
  const clients = {};

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

        }
        else {
          clients[message] = ws;
          console.log("Connection accepted", message);
        }
      });
    });
  };
  MyWSLib.notifyAll = data => {
    for (let ws of clients) {
      ws.send(data);
    }
  };

  MyWSLib.notifyChangeCar = data => {
    const tempJson = JSON.parse(data);
    if(tempJson.length > 0) {
      const userT = tempJson[tempJson.length-1].uid;
      const tempData =[];
      for(let i=0; i< tempJson.length; i++) {
        if(tempJson[i].uid===userT) {
          tempData.push(tempJson[i]);
        }
        console.log(tempData);
      }
      clients[userT].send("cars#"+JSON.stringify(tempData));
    }
  };

  return MyWSLib;
};

module.exports = MyWSLib;
