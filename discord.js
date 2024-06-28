const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

function startDiscord() {
  clientDiscord.on('ready', () => {
    console.log('Yukari Discord bot is ready');
    //   clientDiscord.channels.cache
    //     .get('894634396714434625')
    //     .send(`HI! Yukati Takeba AI is ready!`);
  });

  clientDiscord.login(
    'MTI1NjA2NDAzMDM2ODMzMzk2OA.Ggc1sn.gsQ0dDYnggbk1nSw2AnNafftMQmVJ7UcHS0wxc'
  );

  return clientDiscord;
}

exports.startDiscord = startDiscord;

exports.handleMessage = (sendMessage) =>
  clientDiscord.on('message', (message) => {
    if (message.mentions.users.length === 0) {
      return;
    }

    const bestWaifuMentioned =
      message.mentions.users.filter((e) => e.username === 'Yukari Takeba')
        .size > 0;

    if (!bestWaifuMentioned) {
      return;
    }

    sendMessage(message.content);
  });

exports.sendMessage = (message) => {
  clientDiscord.channels.cache.get('894634396714434625').send(message);
};
