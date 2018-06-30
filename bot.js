const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith('prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});
const superagent = require("superagent");

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'hu')) {
       let args = message.content.split(" ").slice(1);
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Bot Version: 0.0.4", client.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
});

client.on('message', message => {
     if (message.author.bot) return;
       if (message.content ===  "+help") {
 message.channel.send('**تم ارسال الاومر في الخاص|| Done Enter Command In Box :D**')
message.author.sendMessage(`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: الاوامــر الــعـــامـــة:earth_africa: 
1༺༻  +id  | لعرض معلومات الشخص༺༻
2༺༻  +info | لعرض معلومات عن البوت༺༻
3༺༻  +server | لعرض معلومات السيرفر༺༻
4༺༻  +ping | لعرض بنق البوت༺༻
5༺༻  +date | لعرض التاريخ༺༻
6༺༻ +invite | لدعوة البوت الى سيرفرك༺༻
7༺༻  +invites | لعرض عدد الانفايت التي تمتلكه༺༻
8༺༻  +avatar | لعرض صورة الشخص༺༻
9༺༻ +color | لاختيار لونك༺༻
:closed_lock_with_key: اوامـــر الادمـــنـــيــــة:closed_lock_with_key: 
1༺༻  +clear | لمسح الشات༺༻
2༺༻  +bc | لارسال رسالة لجميع الاعضاء༺༻
3༺༻  +kick | لطرد العضو من السيرفر༺༻
4༺༻  +ban | لاعطاء باند لشخص༺༻
:speech_balloon: الالـــعـــاب:speech_balloon: 
1༺༻  +زواج ༺༻
2༺༻  +حجرة༺༻
3༺༻  +عقاب༺༻
4༺༻ +لو خيروك༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `);
       }
});








client.login(process.env.BOT_TOKEN);
