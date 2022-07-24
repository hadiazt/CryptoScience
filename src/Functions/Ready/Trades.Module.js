var axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { Endpoints } = require('../../../data/APIEndPoints.js');
const { Channels } = require('../../../data/config.json')

var config = {
    method: 'get',
    url: Endpoints.Market,
    headers: {}
};


module.exports = (client) => {
    axios(config).then(function (response) {
        const EMBED = new MessageEmbed()
        Array.from(response.data, (element, index) => {
            EMBED.setTitle('Last 20 Crypto Trades')
            EMBED.setColor('#e83c70')
            EMBED.setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            EMBED.setDescription(`

**<:medal:998614813578117120> Rank : ${index}**

**<:dollar:998616045856231495> Price : ${element.price}$**

**<:web:998617971272454144> Exchange Site : [${element.exchange}](https://www.google.com/search?q=${element.exchange})**

**<:pair:998943648244834336> Pair : ${element.pair}**

**<:dollar:998616045856231495> Pair Price : ${element.price}$**

**<:count:998619072315019324> Volume : ${element.volume}**
`)
            EMBED.setTimestamp()

            if (index < 20) {
                client.channels.cache.get(Channels.Trades).send({ embeds: [EMBED] })
            } else return;
        })
    }).catch(error => {
        client.channels.cache.get(Channels.ERR).send('```log\n' + error + '\n```')
    });
}
