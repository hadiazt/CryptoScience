const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES] })

const { Token } = require("./data/config.json")
client.login(Token)

const chalk = require('chalk')
const { readdirSync } = require('fs')

console.log(chalk.red('-------------- LOADING EVENTS --------------'));
const eventFiles = readdirSync('./src/events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./src/events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
    console.log(chalk.blue(event.name + ' LOADED'));
}

console.log(chalk.red('-------------- LOADING READY FUNCTIONS --------------'));
const RFunctionFiles = readdirSync('./Functions/Ready').filter(file => file.endsWith('.js'));
for (const file of RFunctionFiles) {
    console.log(chalk.blue(file + ' LOADED'));
}

