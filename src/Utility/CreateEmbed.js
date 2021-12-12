/** ORIGINAL CODE https://github.com/zhycorp/disc-11/blob/main/src/utils/createEmbed.ts */
const { MessageEmbed } = require('discord.js');

const Color = {
  info: 'WHITE',
  warn: 'WHITE',
  error: 'WHITE',
};
function CreateEmbed(color, message) {
  const embed = new MessageEmbed()
    .setColor("WHITE")
    .setFooter(`© Haruka Music ${new Date().getFullYear()}`);
  if (message) embed.setDescription(message);
  return embed;
}
module.exports = { CreateEmbed };
