const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Kayıtları sen tamamlatamazsın ki...');
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kimin kaydı tamamlandı?`);

    let aRole = "717292942317846528";
    let bRole = "717294089971695707";
  
  
  
  
  
    if (rMember.roles.has(aRole)) { 
      message.delete(), 
      message.channel.send("Kaydı zaten tamamlanmış!")};
    await (rMember.addRole(aRole))
    await (rMember.addRole(bRole))
  
    message.delete()
message.channel.send("<@" + rMember.id + "> kişisi On Küçük Büyücü cast'ine eklenmiştir.")
    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['okbcastxx'],
  permLevel: 0,
};
exports.help = {
  name: 'okbxx',
  description: 'Bir Mesaj Alıntılar.',
  usage: 'g!alıntı mesaj id'
};