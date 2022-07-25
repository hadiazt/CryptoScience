var axios = require('axios');
const { Endpoints } = require('./data/APIEndPoints.js');



var config = {
    method: 'get',
    url: Endpoints.WhaleTrades,
    headers: {}
};

axios(config).then(response => {    

    Array.from(response.data.transactions, (element, index) => {
        Trades = element

        console.log(Trades);

    })

}).catch(error => {
    console.log(error);
});

