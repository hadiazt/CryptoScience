const { APIKEY } = require('./config.json')

exports.BaseURL = "https://api.coinstats.app/public/v1";
exports.BaseURL2 = "https://api.whale-alert.io/v1";

exports.Endpoints = {
    Info: this.BaseURL + "/coins?skip=0&limit=20",
    Market: this.BaseURL + "/markets?coinId=bitcoin",
    News: this.BaseURL + "/news?skip=0&limit=10",
    WhaleTrades: this.BaseURL2 + `/transactions?api_key=${APIKEY}&limit=30`
}