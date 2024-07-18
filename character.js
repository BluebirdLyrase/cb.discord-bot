const WebSocket = require('ws');
let clientCharacter = null;

exports.startCharacter = (configValue) => {
  clientCharacter = new WebSocket(configValue.CHARACTER_URL);
  clientCharacter.on('open', function () {
    console.log('Yukari Charector is ready');
  });

  return clientCharacter;
};

exports.handleMessage = (discord) => {
  if (!clientCharacter) throw new Error(`character did not start yet`);
  clientCharacter.on('message', function (data) {
    discord.sendMessage(data);
  });
};

exports.sendMessage = (message) => {
  if (!clientCharacter) throw new Error(`character did not start yet`);
  clientCharacter.send(message);
};
