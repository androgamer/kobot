const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593135440740089856")
setInterval(function() {
channel.send(`friendfriendfriendfriendزق انتendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfrienfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfriendfr`);
}, 1000)
})

client.login(process.env.BOT_TOKEN);
