const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Kayıtları sen tamamlatamazsın ki...');
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kimin kaydı tamamlandı?`);

    let aRole = "717293884979544086";
    let bRole = "701488907384127498";
  
  
  
  
  
    if (rMember.roles.has(aRole)) { 
      message.delete(), 
      message.channel.send("Kaydı zaten tamamlanmış!")};
    await (rMember.addRole(aRole))
    //await (rMember.removeRole(bRole))
    message.delete()
  var kanal = "717397715213877279"
    kanal.send("<@" + rMember.id + "> kişisinin kaydı tamamlanmıştır. Sesine sağlık!")
    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lckayıttamam'],
  permLevel: 0,
};
exports.help = {
  name: 'lckayıttamam',
  description: 'Bir Mesaj Alıntılar.',
  usage: 'g!alıntı mesaj id'
};