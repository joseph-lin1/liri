Get your Twitter API keys by following these steps:
Step One: Visit https://apps.twitter.com/app/new
Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.
Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.
Copy and paste them where the <input here> tags are inside your keys.js file.
Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.
Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the <input here> tags are inside your keys.js file.
Make a file called random.txt.
Inside of random.txt put the following in with no extra characters or white space:
spotify-this-song,"I Want it That Way"
Make a JavaScript file named liri.js.d
At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
Make it so liri.js can take in one of the following commands:
my-tweets
spotify-this-song
movie-this
do-what-it-says
What Each Command Should Do

node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.
node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
if no song is provided then your program will default to
"The Sign" by Ace of Base
node liri.js movie-this '<movie name here>'
This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   * Rotten Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!
node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.