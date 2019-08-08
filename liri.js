var dotenv  = require("dotenv").config();
var fs      = require('fs');
var axios   = require('axios');
var Keys    = require('./keys');
var moment  = require('moment');
var Spotify = require('node-spotify-api');

var input = process.argv[2];

fs.appendFile('log.txt',`, ${input}: "${process.argv[3]}"`,function(error){
    if(error) throw error;
    console.log('-------------------');
    console.log('log.txt updated');
    console.log('-------------------')
})

switch(input){

    case 'concert-this':
    concertThis(process.argv[3]);
    break;

    case 'spotify-this-song':
    spotifyThisSong(process.argv[3]);
    break;

    case 'movie-this':
    movieThis(process.argv[3]);
    break;

    case 'do-what-it-says':
    doWhatItSays();
    break;

}

function concertThis(search){

    var queryURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

    axios.get(queryURL) 
    .then(function(response){
        var eventsArray = response.data;

        for(let i = 0; i < eventsArray.length; i++){
               
            var venueName = eventsArray[i].venue.name;
            var venueLocation = `${eventsArray[i].venue.city}, ${eventsArray[i].venue.country}`;
            var eventDate = moment(eventsArray[i].datetime);

            console.log(`Artist: ${search}`);
            console.log(`Venue: ${venueName}`);
            console.log(`Location: ${venueLocation}`) 
            console.log(`Date: ${eventDate}`);   
            console.log('----------------------------');
            }
        })
}

function spotifyThisSong(search){
    var spotify = new Spotify(Keys.spotify);
    
    if(search){

        spotify.search({ type: 'track', query: search }, function(err, data) {

            if (err) {

                return console.log('Error occurred: ' + err);
                
            }
        
            console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
            console.log(`Song: ${data.tracks.items[0].name}`); 
            console.log(`Album Name: ${data.tracks.items[0].album.name}`);
            console.log(`Preview Song: ${data.tracks.items[0].preview_url}`);
            
        });
    }
    else{

        spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }

            for(let i = 0; i < data.tracks.items.length; i++){
                
                if(data.tracks.items[i].name === 'The Sign'){
                
                    console.log(`Artist: ${data.tracks.items[i].artists[0].name}`);
                    console.log(`Song: ${data.tracks.items[i].name}`); 
                    console.log(`Album Name: ${data.tracks.items[i].album.name}`);
                    console.log(`Preview Song: ${data.tracks.items[i].preview_url}`);

                }
            }
        });
    }
}

function movieThis(search){
  
    var queryURL = "http://www.omdbapi.com/?t="+search+"&apikey=trilogy"

    if(search){
        axios.get(queryURL)
            .then(function(response){
                
                console.log(`Movie Title: ${response.data.Title}`);
                console.log(`Year: ${response.data.Year}`);
                console.log(`imdb Rating: ${response.data.imdbRating}`);
                console.log(`Country: ${response.data.Country}`);
                console.log(`Language: ${response.data.Language}`);
                console.log(`Plot: ${response.data.Plot}`);
                console.log(`Actors: ${response.data.Actors}`);

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
    
}

function doWhatItSays(){
    fs.readFile('random.txt','utf8',function(error,data){
       if(error) throw error;

       console.log(data);

       var dataArray = data.split(',');
       var command =  dataArray[0];
       var query   =  dataArray[1];

       console.log(command);
       console.log(query);
       

      switch(command){
        case 'spotify-this-song':
        spotifyThisSong(query);
        break;

        case 'movie-this':
        movieThis(query);
        break;

        case 'concert-this':
        concertThis(query);
        break;
        
      }
});
}