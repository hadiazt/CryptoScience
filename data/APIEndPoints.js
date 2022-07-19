exports.BaseURL = "https://api.coinstats.app/public/v1";

exports.Endpoints = {
    Top10Info: this.BaseURL + "/coins?skip=0&limit=10",
    Market: this.BaseURL + "/markets?coinId=bitcoin"
}
