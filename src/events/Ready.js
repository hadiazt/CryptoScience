const chalk = require('chalk')

const functions = require('../Functions/handler')

module.exports = {
    name: 'ready',
    once: false,
    async execute(client) {
        console.log(chalk.red('--------------------------------------------'));
        console.log(`CONNECTED TO : ${client.user.username}`)

        // setInterval(() => {
        //     // 1h
        //     functions.CryptoPrice(client)
        //     functions.Trades(client)
        //     functions.WhaleTrades(client)
        // }, interval);

        // setInterval(() => {
        //     // 15 min
        //     functions.News(client)
        // }, interval);

    },
};