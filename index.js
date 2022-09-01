const Discord = require('discord.js');
const Client = require('./client/client');
const { REST} = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json');
const fs = require('fs');
const { fileURLToPath } = require('url');
const client = new Client();
const commands = [];
const prefix = "$";
client.commands = new Discord.Collection();
const rest = new REST({version:'9'}).setToken(config.token);

const clientId = "client do seu bot";
const guildId = "guild do seu server";

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }

client.on("ready", () => {
    console.log(`Bot iniciado, com ${client.users.cache.size} usuários ativos.. em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores..🚬 `);
    client.user.setActivity(`Eae, eu sou o Trago, e estou em ${client.guilds.cache.size} servidores! 🚬`);
});

client.on("ready", () => { 
    console.log(`Hey! Logado como ${client.user.tag} 🚬`);
});
  
client.on('interactionCreate', async interaction => {
 const command = client.commands.get(interaction.commandName.toLowerCase());
  
   try {
    if (interaction.commandName == 'userinfo') {
       command.execute(interaction, client);
      }
    } catch (error) {
      console.error(error);
      interaction.followUp({
        content: 'Opa! Deu erro😳',
      });
    }
  });

client.on('messageCreate', async (msg) => {
    if(msg.content === prefix + 'Hey') {
        await msg.channel.send('Opa.. ' + msg.author.username + ' Como vai? 🚬');
    }
});


console.log(client.commands);
client.login(config.token);