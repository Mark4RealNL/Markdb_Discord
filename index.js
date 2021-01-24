const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online. `);
    client.user.setActivity("Kijken naar Mark db", {type: "PLAYING"});

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command === `${prefix}hallo`){
        return message.channel.send("Hallo!");
    }

    if(command === `${prefix}info`) {
      
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Informatie")
            .setDescription("Informatie over de server")
            .setColor("#ff0000")
            .addFields(
                {name: "__________", value:"Bericht"}
            )
            .addField("Bot Naam", client.user.username)
            .setThumbnail("https://media.discordapp.net/attachments/802892431993339916/802898603311235112/Youtube_Logo_PNG_Versie_.png?width=1159&height=652")
            .setFooter("Mark db Discord Server", "https://media.discordapp.net/attachments/802892431993339916/802898603311235112/Youtube_Logo_PNG_Versie_.png?width=1159&height=652")
            .setTimestamp();

        return message.channel.send(botEmbed);
    }

    if(command === `${prefix}serverinfo`) {
      
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Informatie")
            .setDescription("Informatie over de server")
            .setColor("#ff0000")
            .addField("Bot Naam", client.user.username)
            .addFields(
                {name: "je bent de server gejoined op: ", value:message.member.joinedAt},
                {name: "Aantal Leden", value:message.guild.memberCount}
            );

        return message.channel.send(botEmbed);
    }});

bot.login(process.env.token);