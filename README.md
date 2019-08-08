# liri cli app

# How it works

Through the cli, the user inputs 1 of 4 commands ...

* `concert-this` 
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

## concert-this

`node liri.js concert-this <artist/band name>`

* Using axios the client makes a GET request to the "bands in town api".
* If the request is successful the client recieves information about the event.
    * Artist 
    * Venue Name
    * Venue Location
    * Event Date

    ![example](/assets/images/concert-this.jpg)



## spotify-this-song

`node liri.js concert-this <song name>`

* Using the "node-spotify-api", we make a request to the spotify api.
* If the request is successful the client recieves information pertaing to the searched song.
    * Artist:
    * Song:
    * Album:
    * Preview Song URL:
* If `<song name>` is left blank. It will default to  "The Sign" by the Ace of Base.

![example](/assets/images/spotify-this.jpg)

## movie-this

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
