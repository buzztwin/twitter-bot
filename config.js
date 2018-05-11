const twitterApp = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
};

const Youtube = require("youtube-api")
    , fs = require("fs")
    , readJson = require("r-json")
    , Lien = require("lien")
    , Logger = require("bug-killer")
    , opn = require("opn")
    , prettyBytes = require("pretty-bytes")
    ;
//console.log("Start Sending Auto Direct Message 🚀🚀🚀" + process.env.CONSUMER_KEY);
//console.log("Start Sending Auto Direct Message 🚀🚀🚀" + process.env.CONSUMER_SECRET);
//console.log("Start Sending Auto Direct Message 🚀🚀🚀" + process.env.ACCESS_TOKEN);
//console.log("Start Sending Auto Direct Message 🚀🚀🚀" + process.env.ACCESS_TOKEN_SECRET);

module.exports = {
  twitterApp,
  userName: process.env.USERNAME,
  Youtube
};
