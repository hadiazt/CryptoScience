var axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { Endpoints } = require('../../../data/APIEndPoints');
const { msgchid, errchid } = require('../../../data/config.json')

var config = {
    method: 'get',
    url: Endpoints.News,
    headers: {}
};
module.exports = (client) => {
    axios(config).then(response => {
        var newss = response.data.news;
        newss.forEach(news => {
            console.log(news.source);
        });
        const EMBED = new MessageEmbed()


        // {
        //     - id: 'zKRYZia2wD',
        //     - searchKeyWords: [
        //       'ethereum',
        //       'ethereum price updates',
        //       'zz_index',
        //       'zz_top',
        //       'eth 2.0',
        //       'ethereum (eth)',
        //       'vitalik buterin',
        //       'ethereum',
        //       '(eth)',
        //       'skyrockets',
        //       '40%',
        //       'week',
        //       '–',
        //       '‘merge’',
        //       'lined',
        //       'september',
        //       'ethereum',
        //       'merge',
        //       '小伞资本'
        //     ],
        //     - feedDate: 1658233859000,
        //     + source: 'Daily Coin',
        //     - + title: 'Ethereum (ETH) Skyrockets 40% in a Week – The ‘Merge’ Lined up for September',
        //     - + description: 'Ethereum Foundation rolls out a schedule for ETH 2.0',
        //     - imgURL: 'https://dailycoin.com/wp-content/uploads/2022/07/Ethereum-ETH-Skyrockets-40-Weekly-The-Merge-Timed-for-September_web-1024x683.jpg',       
        //     - link: 'https://dailycoin.com/ethereum-eth-skyrockets-40-in-a-week-the-merge-lined-up-for-september/?utm_medium=referral&utm_source=coinstats',     
        //     - sourceLink: '',
        //     - reactionsCount: {},
        //     + shareURL: 'https://coinstats.app/newsinfo/zKRYZia2wD_Ethereum-ETH-Skyrockets-40-in-a-Week--The-Merge-Lined-up-for-September',
        //     - relatedCoins: [
        //       'ethereum',
        //       'merge',
        //       'eth_xsc_0xe595422750b23a66d7b7120464be3041fbab1c6f',
        //       'eth_eth_eth'
        //     ],
        //     - content: true,
        //     - coins: [ [Object], [Object], [Object] ]
        //   }
        // ]
        
        // client.channels.cache.get(msgchid).send({ embeds: [EMBED] })

    }).catch(error => {
        client.channels.cache.get(errchid).send('```log\n' + error + '\n```')
    });
}
