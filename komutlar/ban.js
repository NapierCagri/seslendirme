const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
  const db = require("quick.db");

  if (!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS"))
    return message.reply("Gerekli izin yok");
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply(
      `Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`
    );

  let user = message.mentions.users.first();
  //let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  if (message.mentions.users.size < 1)
    return message.reply("Lütfen banlamak istediğiniz üyeyi etiketleyin");
  if (user.id === message.author.id)
    return message.reply("Kendini mi banlayacaksın?");
  //  if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

 
    if (!message.guild.member(user).bannable)
      return message.reply("Yetkilileri yasaklayamam!");
    message.guild.ban(user);

    var bann = [
      "https://i.pinimg.com/originals/11/04/6f/11046f8d10d61d455a210103fc300f4d.gif",
      "https://i.pinimg.com/originals/67/6d/f6/676df67b445733237820a3b7d70db942.gif",
      "https://data.whicdn.com/images/219414341/original.gif",
      "https://media.giphy.com/media/4CV4gHhpUPvNu/giphy.gif"
    ];
    var bank = bann[Math.floor(Math.random() * bann.length)];
    let mentionedUser = message.mentions.users.first();
    message.channel.send(mentionedUser.tag + ", GÖRÜŞMEMEK ÜZERE", {
      file: bank
    });
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban", "porsukisirigi", "avada"],
  permLevel: 3,
  kategori: "moderasyon"
};

exports.help = {
  name: "yasakla",
  description: "İstediğiniz kişiyi sunucudan yasaklar.",
  usage: "yasakla <@kullanıcı> <sebep>"
};
