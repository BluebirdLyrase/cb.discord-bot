const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

function startDiscord(configValue) {
  clientDiscord.on('ready', () => {
    console.log('Yukari Discord bot is ready');
  });

  clientDiscord.login(configValue.DISCORD_TOKEN);

  return clientDiscord;
}

exports.startDiscord = startDiscord;

exports.handleMessage = (character) =>
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
    const messageID = message.channel.id;
    character.sendMessage(message.content); //TODO send messageID to character for her to response to the right channel
  });

exports.sendMessage = (message, channelID) => {
  //TODO add channelID as a respond to message
  // if (!channelID) return;
  clientDiscord.channels.cache.get('894634396714434625').send(message);
};
