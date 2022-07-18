var axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { Endpoints } = require('../../../data/APIEndPoints');

var config = {
    method: 'get',
    url: Endpoints.Top10Info,
    headers: {}
};
module.exports = (client) => {
    axios(config).then(response => {
        const msg = new MessageEmbed()

        response.data.coins.forEach(coin => {

            // if (coin.priceChange1h.startsWith('-')) eh = "📉"; else eh = "📈 +"
            // if (coin.priceChange1d.startsWith('-')) ed = "📉"; else ed = "📈 +"
            // if (coin.priceChange1w.startsWith('-')) ew = "📉"; else ew = "📈 +"

            msg.setAuthor({ name: coin.name, iconURL: coin.icon, url: coin.websiteUrl })
            msg.setTitle(coin.name + ' Information')
            msg.setDescription(`
**<:medal:998614813578117120> Rank : ${coin.rank}**

**<:dollar:998616045856231495> Price : ${coin.price}$**

**<:btc:998615614321070110> PriceBTC : ${coin.priceBtc}**

**<:count:998619072315019324> Volume : ${coin.volume}**

**<:chart:998623322776547328> MarketCap : ${coin.marketCap}**


**<:ts:998624089876992001> TotalSupply : ${coin.totalSupply}**

**<:web:998617971272454144> [WebSite](${coin.websiteUrl})**

`)
            // msg.addFields(
            //     { name: '\u200B', value: '\u200B' },
            //     { name: 'Changes 1H', value: eh + coin.priceChange1h + '%', inline: true },
            //     { name: 'Changes 1D', value: ed + coin.priceChange1d + '%', inline: true },
            //     { name: 'Changes 1W', value: ew + coin.priceChange1w + '%', inline: true },
            // )

            client.channels.cache.get('998534356928843911').send({ embeds: [msg] })
            // console.log(coin);
        });
    }).catch(error => {
        console.log(error);
    });

    // icon //
    // name //
    // rank //
    // price : $ //
    // priceBtc //
    // volume //
    // marketCap //
    // availableSupply
    // totalSupply //
    // priceChange1h
    // priceChange1d
    // priceChange1w
    // websiteUrl : website //


}