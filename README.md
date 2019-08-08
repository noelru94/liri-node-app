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

`node liri.js concert-this <artist/band name>`

* Using the "node-spotify-api", we make a request to the spotify api.
* If the request is successfull the client recieves information about the song.
    * Artist:
    * Song:
    * Album:
    * Preview Song URL:


