const {Client, IntentsBitField} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log('The White Whale is hunting whalers, better run...')
})


client.login("MTEyNzA3MTg3MTAwMzc5NTU4Nw.GFQP4U.RlMhpl3UKWF7q6o-EYAs10i5mwCmRIvSK2jNdQ");


client.on('messageCreate', (message) => {
    console.log(message);
})