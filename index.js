var twitterCredentials = require('./config/twitter');

var Twitter = require('node-tweet-stream');

var t = new Twitter(twitterCredentials);

t.on('tweet', function (tweet) {
	console.log(tweet.text+' - '+tweet.user.screen_name);
});

t.on('error', function (err) {
  console.log('Oh no')
});

t.track('#tiynode');
// var Twitter = require('twitter');


// var client = new Twitter(twitterCredentials);

// var params = {q: '"#tiynode"'};
// client.get('search/tweets', params, function(error, tweets, response){
// 	if (!error) {
// 		for(var i=0; i<tweets.statuses.length; i++) {
// 			console.log(tweets.statuses[i].text);
// 		}
// 	}
// 	else {
// 		console.log(error);
// 	}
// });