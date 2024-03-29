var axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { Endpoints } = require('../../../data/APIEndPoints.js');
const { Channels } = require('../../../data/config.json')

var config = {
    method: 'get',
    url: Endpoints.News,
    headers: {}
};
module.exports = (client) => {
    axios(config).then(response => {
        var newss = response.data.news;
        const EMBED = new MessageEmbed()
        newss.forEach(news => {
            EMBED.setTitle(news.title)
            EMBED.setAuthor({ name: 'Source : ' + news.source, url: 'https://www.google.com/search?q=' + news.sourse })
            EMBED.setColor('#e83c70')
            EMBED.setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            EMBED.setImage(news.imgURL)
            EMBED.setDescription(news.description + '\n\n' + '**<:web:998617971272454144> [News Link](' + news.shareURL + ')**')
            EMBED.setTimestamp()
            client.channels.cache.get(Channels.News).send({ embeds: [EMBED] })
        });
    }).catch(error => {
        client.channels.cache.get(Channels.ERR).send('```log\n' + error + '\n```')
    });
}
