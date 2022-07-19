const chalk = require('chalk')

const functions = require('../Functions/handler')

module.exports = {
    name: 'ready',
    once: false,
    async execute(client) {
        console.log(chalk.red('--------------------------------------------'));

        console.log(`CONNECTED TO : ${client.user.username}`)

        functions.Info(client)

        functions.Market(client)
        
        // setInterval(async () => {

        // }, 60000);
    },
};