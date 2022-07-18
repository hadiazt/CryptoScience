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
            msg.setDescription('\n\n' + '**🏅 Rank : ' + coin.rank + '**\n'+'test')
            msg.setTitle(coin.name + ' Information')

            client.channels.cache.get('998534356928843911').send({ embeds: [msg] })
            // console.log(coin);
        });
    }).catch(error => {
        console.log(error);
    });

    // icon //
    // name //
    // rank
    // price : $
    // priceBtc
    // volume
    // marketCap
    // availableSupply
    // totalSupply
    // priceChange1h
    // priceChange1d
    // priceChange1w
    // websiteUrl : website //
}