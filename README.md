# liri cli app

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## How it works

Through the cli, the user inputs 1 of 4 commands ...
* `concert-this` 
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

* Using switch statement, a function pertaining to the command will be envoked.
 ![example](/assets/images/switch.jpg)

* Each entry is logged to a txt file to look at search history.


## Commands 

### concert-this

`node liri.js concert-this <artist/band name>`

* Using axios the client makes a GET request to the "bands in town api".
* If the request is successful the client recieves information about the event.
    * Artist: 
    * Venue Name:
    * Venue Location:
    * Event Date:

    ![example](/assets/images/concert-this.jpg)



### spotify-this-song

`node liri.js concert-this <song name>`

* Using the "node-spotify-api", we make a request to the spotify api.
* If the request is successful the client recieves information pertaing to the searched song.
    * Artist:
    * Song:
    * Album:
    * Preview Song URL:
* If `<song name>` is left blank. It will default to  "The Sign" by the Ace of Base.

![example](/assets/images/spotify-this.jpg)



### movie-this

`node liri.js concert-this <movie name>`

* Using axios we make a GET request to the "omdb api".
* If the request is successful the client recieves information pertaining to the searched movie.
    * Movie Title:
    * Year:
    * imdb Rating:
    * Country:
    * Language:
    * Plot:
* If `<movie name>` is left blank, it will default to Mr.Nobody.

![example](/assets/images/movie-this.jpg)


### do-what-it-says

`node liri.js do-what-it-says`

* Reads `random.txt` and runs the command aswell as the search term


## log.txt

* Every entry is written on a log.txt file

## Technologies 
* Javascript
* Node.js
* axios
* moment
* dotenv
* node-spotify-api


