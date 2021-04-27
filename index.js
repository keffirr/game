/*
Author: Jinx
Youtube: https://www.youtube.com/channel/UCeEu-2Lw8V7HQO0v35MaqDg
Discord: Jinx#4321
github: https://github.com/JinxHvH
Twitter: @qJinx_
*/

const fs = require('fs');
const { Discord, Client, RichEmbed, MessageEmbed, MessageAttachment, Channel, WebhookClient } = require('discord.js');
const { red, green, blue, yellow, cyan } = require('chalk');
const client = new Client();
const settings = require('./settings.json');
const https = require('https')
global.client = client

console.log(blue(`[SELF BOT] :: PLEASE NOT THAT YOUR ACCOUNT IS AT RISK`));
console.log(blue(`[SELF BOT] :: AS SELFBOTS ARE AGAINST DISCORD'S TOS`));
console.log(blue(`[SELF BOT] :: Jinx IS NOT RESPONSIBLE FOR ANY BANS`));
console.log(yellow('============================================================================'));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}ping :: Displays your ping`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}purge [100]:: Deletes 100 messages you sent.`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}embed [content] :: Send a message in a embed.`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}restart :: Restarts the bot`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}spam [ID] [content] :: Spam a users DM`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}eval [content] :: Evaluate code`));

const activities_list = [
  "romoz.ml",
  "https://romoz.ml", 
  "https://www.romoz.ml",
  "www.romoz.ml",
  "тайлор бровь"
  ]; // creates an arraylist containing phrases you want your bot to switch through.
  client.once('ready', () => {
    console.log('Ready!');
    console.log(green(`[SELF BOT] :: ${client.user.tag} is online and ready`));
    console.log(green(`[SELF BOT] :: my prefix is: ${settings.prefix}`));
    console.log(yellow('============================================================================'));
    client.channels.get('825359744083951657').send('Бот включен!');
  });
client.on('message', async(msg)=>{
    if(msg.author.id !== settings.ID) {
        return;
    }
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(settings.prefix.length);
    let args = msg.content.split(" ").slice(1);
    if(msg.content.startsWith(settings.prefix) && msg.author.id === settings.ID){
      client.channels.get('825359744083951657').send(`[COMMAND RAN] :: ${msg.content}`)
        console.log(cyan(`[COMMAND RAN] :: ${msg.content}`));
    }
        if(cmd === 'romoz-mine-secret-123'){
          msg.delete()
          setInterval(function() {
          msg.channel.fetchMessages({ limit: 1 }).then(msgs=>msgs.filter(m => client.user.id).map(r => r.react('⛏️') & r.clearReactions('⛏️')))
        }, 100);
        setInterval(function() {
        msg.channel.send('~mine')
      }, 30000);
        }
      });

client.login(settings.token);