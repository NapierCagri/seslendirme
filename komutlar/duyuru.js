const Discord = require('discord.js');


exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Duyurmadın ki');
  message.delete();
  const embed = new Discord.RichEmbed();
      embed.setColor('#EE0D0D')
      embed.setTitle('DUYURU')
      embed.setDescription(mesaj)
    var generalChannel = client.channels.get("710438966868049970")
    message.delete()
    generalChannel.send("<@&708374069086650439>", {embed: embed} );
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur', 'duyuru',],
  permLevel: 0
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
