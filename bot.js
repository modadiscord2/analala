const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528913131951620097")
setInterval(function() {
channel.send(`Mahmoud Mostafa Nabih foo2 foo2 fooo2`);
}, 30)
})

client.login(process.env.BOT_TOKEN);