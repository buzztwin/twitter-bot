const Twit = require("twit");
const config = require("../config");
const T = new Twit(config.twitterApp);

//var google = require('googleapis');

module.exports = T;
