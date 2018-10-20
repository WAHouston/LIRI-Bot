require("dotenv").config();
const fs = require("fs")
const Spotify = require("node-spotify-api")
const request = require("request")
const keys = require("./keys")
const moment = require("moment")

function dostuff(command, arg){
    switch (command){
        case "concert-this":
            concert(arg)
            break
        case "spotify-this-song":
            spotifySong(arg)
            break
        case "movie-this":
            movie(arg)
            break
        case "do-what-it-says":
            dowhatitsays()
            break
    }
}

function concert(artist){
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bit.id, function(error, response, body){
        if (error){
            return console.log("ERROR!!")
        }
        let data = JSON.parse(body)
        for (let i = 0; i < data.length; i++){
            let name = data[i].venue.name
            console.log(name)
            let location = data[i].venue.city
            console.log(location)
            let date = moment(data[i].datetime).format("MM/DD/YYYY")
            console.log(date)
        }
    })
}

function spotifySong(song){
    let spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    })
    if (song === undefined){
        song = "The Sign"
    }
    spotify.search({type: "track", query: song}, function(err, data){
        if (err) {
            return console.log("Error occurred: " + err)
        }
        for (let i = 0; i < data.tracks.items[0].artists.length; i++){
            console.log(data.tracks.items[0].artists[i].name)
        }
        console.log(data.tracks.items[0].name)
        console.log(data.tracks.items[0].preview_url)
        console.log(data.tracks.items[0].album.name)
    })
}

function movie(movie){
    if (movie === undefined){
        movie = "Mr.Nobody"
    }
    request("http://www.omdbapi.com/?apikey=" + keys.omdb.key + "&t=" + movie, function(error, response, body){
        if (error){
            return console.log("ERROR!!")
        }
        let data = JSON.parse(body)
        console.log(data.Title)
        console.log(data.Year)
        console.log("IMDB Rating: " + data.Ratings[0].Value)
        console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value)
        console.log(data.Country)
        console.log(data.Language)
        console.log(data.Plot)
        console.log(data.Actors)
    })
}

function dowhatitsays(){
    fs.readFile("random.txt", "utf-8", function(error, data){
        if (error) {
            return console.log(error);
          }
        let dataArr = data.split(",")
        dostuff(dataArr[0], dataArr[1])
    })
}

dostuff(process.argv[2], process.argv[3])