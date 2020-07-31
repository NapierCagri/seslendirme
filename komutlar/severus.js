const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send("Severus Ekibinin kontrolü sende değil.");
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!rMember)
    return message.channel.send(
      `Kimin ekibe alındığını söylemedin, söyler misin?`
    );

  let aRole = "718172615390527529";

  if (rMember.roles.has(aRole)) {
    message.delete(), message.channel.send("Zaten ekipte.");
  }
  await rMember.addRole(aRole);
  //await (rMember.removeRole(bRole))
  message.delete();
  var kanal = client.channels.get("718173635969286244");
  kanal.send("<@" + rMember.id + ">, Severus ekibine hoşgeldin", {
    file: "https://media.giphy.com/media/sxNxwQzIZ6AY8/giphy.gif"
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["severus"],
  permLevel: 0
};
exports.help = {
  name: "severus",
  description: "Bir Mesaj Alıntılar.",
  usage: "g!alıntı mesaj id"
};
