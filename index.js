const discord = require('./discord');
const character = require('./character');

discord.startDiscord();
character.startCharacter();
character.handleMessage(discord.sendMessage);
discord.handleMessage(character.sendMessage);
