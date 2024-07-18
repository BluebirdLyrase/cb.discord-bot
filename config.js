require('dotenv').config();

exports.getConfigValue = () => {
  return {
    CHARACTER_URL: getValue(`CHARACTER_URL`),
    DISCORD_TOKEN: getValue(`DISCORD_TOKEN`),
  };
};

const getValue = (key) => {
  const value = process.env[key];
  if (typeof value === 'undefined') {
    throw new Error(`${key} not exist in .env`);
  }

  return value;
};
