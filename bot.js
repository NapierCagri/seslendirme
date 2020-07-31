const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);


var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  
  if (msg.content.toUpperCase() === "GÜNAYDIN") {
    var gnd = [
      "Hiçbir gece sonsuza kadar gece olarak kalmaz. Gündüz ile güneş ile yerini paylaşması gerekir. Sen bir keder ile karşılaştığında gecenin sona ereceğini bilerek gülümse ve yılma. Günün aydın ve mükemmel olsun sevdiğim.",
      "Her gün bir gün öncesinden daha güzel bir gün geçirmeni ve seni hep mutlulukların karşılamasını dilerim.",
      "Meleğim uyan kahvaltıyı hazırladım, ekmeğine bal sürdüm, çayını koydum. Seni ve vereceğin huzuru masa başında bekliyorum.",
      "Günaydın içinde günü ve aydınlığı barındıran güzel bir kelimedir. Her gününün aydın olmasını dilerim.",
      "Güneş doğdukça insanlar aydınlık ile tanışacak ve mutlu olmak için sebepler arayacaktır. Bugün uyan ve kendi hayatında ki mutluluğu bulmak için adım at.",
      "Seninle başladığım her gün bana huzur veriyor. Seninle her gün mutluluğu yaşamak için dua ediyorum. Günün güzel olsun.",
      "Bugün bir çay içesim var seninle. Uyan da çay koy yârim.",
      "Bir sabaha senle uyandığımda mutlu oluyorum, sensiz bir günü ise düşünemiyorum. Sensiz bir gün asla hayatımda yer almasın sevdiğim.",
      "Sana gün aymasın"
    ]; }
  if(msg.content.toLowerCase() === "apsethu's") {
    var bann = [
    "https://img-s1.onedio.com/id-575872d81dcb022235ef3ba0/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-d0f4f9ed0be9574ff656957e56b4afb0ae97d916.gif",
    "https://img-s2.onedio.com/id-5758729069f9773f22c4c091/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-aa88eda452097bd7903cd87e59246c21b338d715.gif",
    "https://img-s1.onedio.com/id-57587377190ed92e586cd198/rev-0/w-500/s-6fbd503188f9983e69d749f2b06360b38547e528.gif",
    "https://img-s2.onedio.com/id-575874eb4ec5838a6d0ca569/rev-0/w-500/s-87a1adb648d7fc2c30f1300a2eda449de0e88122.gif",
  ]
  var bank = bann[Math.floor(Math.random()*bann.length)];
  const embed2 = new Discord.RichEmbed();
      embed2.setColor('#EE0D0D')
      embed2.setTitle("ALLAHU EKBER ALLAHU EKBER")
      embed2.setImage(bank)
  msg.channel.send(embed2)
  }
  if(msg.content.toLowerCase() === "apsethus") {
    var bann = [
    "https://img-s1.onedio.com/id-575872d81dcb022235ef3ba0/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-d0f4f9ed0be9574ff656957e56b4afb0ae97d916.gif",
    "https://img-s2.onedio.com/id-5758729069f9773f22c4c091/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-aa88eda452097bd7903cd87e59246c21b338d715.gif",
    "https://img-s1.onedio.com/id-57587377190ed92e586cd198/rev-0/w-500/s-6fbd503188f9983e69d749f2b06360b38547e528.gif",
    "https://img-s2.onedio.com/id-575874eb4ec5838a6d0ca569/rev-0/w-500/s-87a1adb648d7fc2c30f1300a2eda449de0e88122.gif",
  ]
  var bank = bann[Math.floor(Math.random()*bann.length)];
  const embed2 = new Discord.RichEmbed();
      embed2.setColor('#EE0D0D')
      embed2.setTitle("ALLAHU EKBER ALLAHU EKBER")
      embed2.setImage(bank)
  msg.channel.send(embed2)
  }
  if(msg.content.toLowerCase() === prefix + "örnek") {
    msg.channel.send("**ÖRNEK SES**", {file: "https://cdn.glitch.com/b45ff35c-c5ed-42af-aafd-387b8945c572%2FOrnek.mp3"})
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
