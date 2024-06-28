const WebSocket = require('ws');
const clientCharacter = new WebSocket(
  'ws://localhost:8765/4RlcjXBqsQTwbXOa0f80STHIHuPOhXICtZAf9mgRSc4'
);

exports.handleMessage = (sendMessage) =>
  clientCharacter.on('message', function (data) {
    sendMessage(data);
  });

exports.startCharacter = () => {
  clientCharacter.on('open', function () {
    console.log('Yukari Charector is ready');
  });

  return clientCharacter;
};

exports.sendMessage = (message) => {
  clientCharacter.send(message);
};
