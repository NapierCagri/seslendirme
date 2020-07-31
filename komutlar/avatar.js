const Discord = require('discord.js');
const embed = new Discord.RichEmbed();


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Fotoğraf oluşturuluyor...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("EE0D0D")
        .setTitle(mentionedUser.tag + " kişisinin fotoğrafı")
        .setFooter("İsteyen Kişi: " + message.author.tag)
      

        message.channel.send(embed)


    msg.delete();
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'aaaa',
  description: 'aaaa',
  usage: 'aaaa'
};