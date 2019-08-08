#liri cli app

#How it works
Using node.js, through the cli, the user inputs 1 of 4 commands ...
* concert-this 
* spotify-this-song
* movie-this
* do-what-it-says

##concert-this
* Using axios the client makes a GET request to the "bands in town api"
* If the request is successful the client recieves information about the event
- Artist 
- Venue Name
- Venue Location
- Event Date

