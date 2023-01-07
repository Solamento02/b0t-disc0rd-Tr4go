const fs = require('fs');
const Discord = require('discord.js');
const Client = require('./client/Client.js');
const config = require('./config.json');
const prefix = "$";

const client = new Client();
const clientId = "seu clientId";
const guildId = "seu guildId";


client.on("ready", () => {
    console.log(`Bot iniciado, com ${client.users.cache.size} usuários ativos.. em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores..🚬 `);
    client.user.setActivity(`Eae, eu sou o Trago, e estou em ${client.guilds.cache.size} servidores! 🚬`);
});

client.on("ready", () => { 
    console.log(`Hey! Logado como ${client.user.tag} 🚬`);
});

client.on('messageCreate', async (msg) => {
    if(msg.content === prefix + 'Boiola') {
        await msg.channel.send('Opa.. ' + msg.author.username + ' Como vai? 🚬');
    }
});

client.on('messageCreate', async (msg) => {
    if(msg.content === prefix + 'ping'){
         await msg.channel.send(`Pong! 🏓 ${Math.round(client.ws.ping)} ms `)
    }
});

client.on('messageCreate', async (msg) => {
    if(msg.content === prefix + 'teste') {
        await msg.channel.send('teste');
    }
});


client.login(config.token);
