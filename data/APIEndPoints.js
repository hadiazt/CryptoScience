exports.BaseURL = "https://api.coinstats.app/public/v1";

exports.Endpoints = {
    Info: this.BaseURL + "/coins?skip=0&limit=10",
    Market: this.BaseURL + "/markets?coinId=bitcoin",
    News: this.BaseURL + "/news?skip=0&limit=10"
}
