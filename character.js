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
    try {
      const json = JSON.parse(data);
      discord.sendMessage(json.message, json.channelID);
    } catch (e) {
      console.error(e); //TODO handle better because it will always be an invalid json
    }
  });
};

exports.sendMessage = (message, channelID) => {
  console.log('CHARACTER message:', message, ' channelID:', channelID);
  if (!clientCharacter) throw new Error(`character did not start yet`);
  clientCharacter.send(JSON.stringify({ message, channelID }));
};
