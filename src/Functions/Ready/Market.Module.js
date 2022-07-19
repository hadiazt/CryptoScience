const { Endpoints } = require('../../../data/APIEndPoints')
var axios = require('axios');

var config = {
    method: 'get',
    url: Endpoints.Market,
    headers: {}
};


module.exports = (client) => {

    axios(config).then(function (response) {
        Array.from(response.data, (element, index) => {
            if (index < 20) {
                console.log(element);
            } else return;
        })
    }).catch(error => {
        client.channels.cache.get(errchid).send('```log\n' + error + '\n```')
    });
}
