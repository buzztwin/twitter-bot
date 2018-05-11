const Twit = require("twit");
const config = require("../config");
const T = new Twit(config.twitterApp);
const Youtube = require("youtube-api");

//var google = require('googleapis');

module.exports = T;
