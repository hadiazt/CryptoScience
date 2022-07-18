var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10',
    headers: {}
};



module.exports = () => {
    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}