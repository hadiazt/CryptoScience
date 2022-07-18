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
 
            msg.setAuthor({ name: coin.name, iconURL: coin.icon, url: coin.websiteUrl })
            msg.setTitle(coin.name + ' Information')
            msg.setDescription(`
**<:medal:998614813578117120> Rank : ${coin.rank}**

**<:dollar:998616045856231495> Price : ${coin.price}$**

**<:btc:998615614321070110> PriceBTC : ${coin.priceBtc}**

**<:count:998619072315019324> Volume : ${coin.volume}**

**MarketCap : ${coin.marketCap}**

**<:web:998617971272454144> [WebSite](${coin.websiteUrl})**
`)


            // client.channels.cache.get('998534356928843911').send({ embeds: [msg] })
            console.log(coin);
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
    // totalSupply
    // priceChange1h
    // priceChange1d
    // priceChange1w
    // websiteUrl : website //

    if (coin.priceChange1h.startsWith('-')) {
                
    } else {
        
    }
}