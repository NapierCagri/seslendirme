const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Sende bu yetki yok ama üzülme, sana kurabiye verebilirim');
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kime vereceğimi söylemedin ki`);

    let aRole = "714521376387498085";

  
  
  
  
  
    if (rMember.roles.has(aRole)) return message.channel.send('Zaten seslerini göndermiş!') 
    await (rMember.addRole(aRole))
    message.channel.send(`${rMember} isimli üye örnek sesini göndermiştir!`, {file: "https://media1.giphy.com/media/ax2sVtZVpTqpi/source.gif"})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sesattı'],
  permLevel: 0,
};
exports.help = {
  name: 'sesattı',
  description: 'Bir Mesaj Alıntılar.',
  usage: 'g!alıntı mesaj id'
};
