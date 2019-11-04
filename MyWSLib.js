const WebSocket = require("ws");

const MyWSLib = function() {
  const MyWSLib = this || {};
  const clients = {};

  MyWSLib.setupWS = server => {

    const wss = new WebSocket.Server({ server });
    console.log("setting up socket");

    wss.on("connection", ws => {
      console.log("Accepting connection");
      ws.on("message", message =>{
        clients[message]=ws;
        console.log("Connection accepted", message);
      });
    });
  };

  MyWSLib.notifyAll = data => {
    for (let ws of clients) {
      ws.send(data);
    }
  };

  MyWSLib.notifyChangeCar = data =>{
    for(let ws of clients){

    }
  };

  return MyWSLib;
};

module.exports = MyWSLib;
