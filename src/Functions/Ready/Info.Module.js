var axios = require('axios');
const { Endpoints } = require('../../../data/APIEndPoints');

var config = {
    method: 'get',
    url: Endpoints.Top10Info,
    headers: {}
};

module.exports = () => {
    axios(config).then(response => {
        response.data.coins.forEach(coin => {
            console.log(coin);
        });
    }).catch(function (error) {
        console.log(error);
    });

    // icon
    // name
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
    // websiteUrl : website
}