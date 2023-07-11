require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

//visual indicator via console log that bot is online and listening
client.on('ready', (c) => {
    console.log('Moby is hunting whalers, better run...')
})

//logs bot into discord using given token found in .env file
client.login(process.env.TOKEN);

//bot listens for primary string in any chat, if primary string matches given string then responds with a new string with author of primary strings username
client.on('messageCreate', (message) => {
    if(message.content === "Hello Moby"){
        message.reply(`*Splashes water at ${message.author.username}*`)
    }
})

//bot listens for slash command hey, and if command is used then bot responds with string
client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === 'hey'){
        interaction.reply("Hey, howzit swimming?")
    }
})