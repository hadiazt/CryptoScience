var axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { Endpoints } = require('../../../data/APIEndPoints');
const { msgchid, errchid } = require('../../../data/config.json')

var config = {
    method: 'get',
    url: Endpoints.Top10Info,
    headers: {}
};
module.exports = (client) => {
    axios(config).then(response => {
        const EMBED = new MessageEmbed()

        response.data.coins.forEach(coin => {

            if (coin.priceChange1h.toString().startsWith('-')) ch = "📉 "; else ch = "📈 +"
            if (coin.priceChange1d.toString().startsWith('-')) cd = "📉 "; else cd = "📈 +"
            if (coin.priceChange1w.toString().startsWith('-')) cw = "📉 "; else cw = "📈 +"

            EMBED.setColor('#e83c70')
            EMBED.setThumbnail(coin.icon)
            EMBED.setTitle(coin.name + ' Information')
            EMBED.setDescription(`
**<:medal:998614813578117120> Rank : ${coin.rank}**

**<:dollar:998616045856231495> Price : ${coin.price}$**

**<:btc:998615614321070110> PriceBTC : ${coin.priceBtc}**

**<:count:998619072315019324> Volume : ${coin.volume}**

**<:chart:998623322776547328> MarketCap : ${coin.marketCap}**

**<:as:998624615473610912> AvailableSupply : ${coin.availableSupply}**

**<:ts:998624089876992001> TotalSupply : ${coin.totalSupply}**

**<:web:998617971272454144> [WebSite](${coin.websiteUrl})**
`)
            EMBED.setFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Changes 1H', value: ch + coin.priceChange1h + '%', inline: true },
                { name: 'Changes 1D', value: cd + coin.priceChange1d + '%', inline: true },
                { name: 'Changes 1W', value: cw + coin.priceChange1w + '%', inline: true },
            )
            EMBED.setTimestamp()

            client.channels.cache.get(msgchid).send({ embeds: [EMBED] })
        });
    }).catch(error => {
        client.channels.cache.get(errchid).send('```log\n' + error + '\n```')
    });
}
