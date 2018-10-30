# LIRI-Bot
### This is a command line node app that takes in parameters and gives you back data.
#### Usage
* When a user opens the app, they will input a command from the following list of commands:
    1. node liri.js concert-this "Name-of-Band"

    ![Concert-This Command](Images/ctcommand.jpg)
    
    Which will display the venue, city, and date of each concert on the current tour of the specified band.

    ![Concert-This Result](Images/ctresult.jpg)

    1. node liri.js spotify-this-song "Name-of-Song"

    ![Spotify-This-Song Command](Images/stscommand.jpg)
    
    Which will display the artist, song title, sample url, and album name of the specified song.

    ![Spotify-This-Song Result](Images/stsresult.jpg)

    1. node liri.js movie-this "Name-of-Movie"

    ![Movie-This Command](Images/mtcommand.jpg)
    
    Which will display the title, year of release, IMDB rating, Metacritic rating, country, language(s), a brief synopsis, and a list of the top-billed cast.

    ![Movie-This Result](Images/mtresult.jpg)

    1. node liri.js do-what-it-says

    ![Do-What-It-Says Command](Images/dwiscommand.jpg)

  Which will cause the app to read and run the command(s) in the random.txt file.

    ![Do-What-It-Says Result](Images/dwisresult.jpg)

* If you do not specify a song or movie for the "spotify-this-song" and "movie-this" commands:

    ![Spotify-This-Song Default Command](Images/stsdcommand.jpg)
    ![Movie-This Default Command](Images/mtdcommand.jpg)

  There is a default search that will run.

    ![Spotify-This-Song Default Result](Images/stsdresult.jpg)
    ![Movie-This Default Result](Images/mtdresult.jpg)

#### Purpose
* LIRI-Bot demonstrates usage and understanding elements of node.js including exports, require, and argv.
## Will Houston designed, styled, and coded this project.