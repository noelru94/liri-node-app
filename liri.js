var dotenv  = require("dotenv").config();
var axios   = require('axios');
var Keys    = require('./keys');
var moment  = require('moment');
var Spotify = require('node-spotify-api');

// var spotify = new Spotify(Keys.spotify);

var input = process.argv[2];

switch(input){

    case 'concert-this':
    concertThis();
    break;

    case 'spotify-this-song':
    spotifyThisSong();
    break;

    case 'movie-this':
    movieThis();
    break;

    case 'do-what-it-says':
    doWhatItSays();
    break;

}