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

function concertThis(){

    var artist = process.argv[3];

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL) 
        .then(function(response){
            console.log(response.data[0]);
            var eventsArray = response.data;

            for(let i = 0; i < eventsArray.length; i++){
               
               var venueName = eventsArray[i].venue.name;
               var venueLocation = `${eventsArray[i].venue.city}, ${eventsArray[i].venue.country}`;
               var eventDate = moment(eventsArray[i].datetime);

               console.log(`Artist: ${artist}`);
               console.log(`Venue: ${venueName}`);
               console.log(`Location: ${venueLocation}`) 
               console.log(`Date: ${eventDate}`);   
               console.log('----------------------------');
            }
        })
        .catch(function(error){
            if(error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            }else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
}

function spotifyThisSong(){

    var song = process.argv[3];
    var spotify = new Spotify({
        id: '3858b2305f2c48b98503f27b6a8df8a2',        
        secret: 'eb2a7692f37c45c9b0b6fbf3e778fd42'
    });
    

    if(song){

        spotify.search({ type: 'track', query: song }, function(err, data) {

            if (err) {

            return console.log('Error occurred: ' + err);

            }
        
        console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
        console.log(`Song: ${data.tracks.items[0].name}`); 
        console.log(`Album Name: ${data.tracks.items[0].album.name}`);
        console.log(`Preview Song: ${data.tracks.items[0].preview_url}`);
        
        });
    }