var axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { Endpoints } = require('../../../data/APIEndPoints.js');
const { Channels } = require('../../../data/config.json');
const { Trades } = require('../handler.js');


module.exports = (client) => {

    var config = {
        method: 'get',
        url: Endpoints.WhaleTrades,
        headers: {}
    };

    axios(config).then(response => {
        const EMBED = new MessageEmbed()

        Array.from(response.data.transactions, (element, index) => {
            var Trades = element

            if (!Trades.from.owner) FO = 'unknown'; else FO = Trades.from.owner;
            if (!Trades.to.owner) TO = 'unknown'; else TO = Trades.to.owner;

            EMBED.setTitle('Last 30 Whales Crypto Trades')
            EMBED.setColor('#e83c70')
            EMBED.setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            EMBED.setDescription(`

**<:medal:998614813578117120> Rank : ${index + 1}**

**${Trades.amount} ${Trades.blockchain.toUpperCase()} #${Trades.symbol.toUpperCase()} (${Trades.amount_usd} USD) ${Trades.transaction_type} From ${FO} Wallet To ${TO}**

**<:web:998617971272454144> [Details](https://whale-alert.io/transaction/${Trades.blockchain}/${Trades.hash})**
`)
            EMBED.setTimestamp()
            client.channels.cache.get(Channels.Trades).send({ embeds: [EMBED] })

        })

    }).catch(error => {
        console.log(error);
        client.channels.cache.get(Channels.ERR).send('```log\n' + error + '\n```')
    });
}
