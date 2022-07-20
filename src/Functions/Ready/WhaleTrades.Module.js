var axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { Endpoints } = require('../../../data/APIEndPoints');
const { Channels } = require('../../../data/config.json')


module.exports = (client) => {
    var OneHAgoTS = new Date().getTime() - (1000 * 20 * 20);

    var OneHAgoLS = new Date(OneHAgoTS).toLocaleTimeString();

    var config = {
        method: 'get',
        url: Endpoints.WhaleTrades,
        headers: {}
    };

    axios(config).then(response => {
        console.log(response.data);
        
    }).catch(error => {
        console.log(error);
    });
}
