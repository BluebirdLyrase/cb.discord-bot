const config = require('./config');
const discord = require('./discord');
const character = require('./character');

const configValue = config.getConfigValue();

discord.startDiscord(configValue);
character.startCharacter(configValue);
character.handleMessage(discord);
discord.handleMessage(character);
