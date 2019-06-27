const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By iyoshi");


client.on("ready", () => {
let channel =     client.channels.get("593135440740089856")
setInterval(function() {
channel.send(`iyoshi_samn make me iyoshi_samn make me iyoshi_samn make me iyoshi_samn make me iyoshi_samn make me iyoshi_samn make me iyoshi_samn make me`);
}, 100)
})

client.login(process.env.BOT_TOKEN);
