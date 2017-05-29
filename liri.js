var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


var Spotify = require('spotify-web-api-js');
var s = new Spotify();


omdb.find('Forrest', 'movie').then(function (movie) {
    (movie).should.be.a.Array;
    movie[0].Title.should.be.exactly('Forrest Gump');
});
 
omdb.get('Breaking Bad', 'series').then(function (serie) {
    serie.Title.should.be.exactly('Breaking Bad');
    serie.should.have.properties({
        Response: 'True'
    });
});
console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}

my-tweets
spotify-this-song
movie-this
do-what-it-says
What Each Command Should Do
}



http://www.omdbapi.com/?i=tt3896198&apikey=40e9cece