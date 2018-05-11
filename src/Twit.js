const Twit = require("twit");
const config = require("../config");
const T = new Twit(config.twitterApp);
const Youtube = require("youtube-api")
    , fs = require("fs")
    , readJson = require("r-json")
    , Lien = require("lien")
    , Logger = require("bug-killer")
    , opn = require("opn")
    , prettyBytes = require("pretty-bytes")
    ;
//var google = require('googleapis');

module.exports = T;
