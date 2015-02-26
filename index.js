var http = require('http');
var fs = require('fs');
var ec = require('ecstatic');
var Twitter = require('twitter');

var keys = require('./keys');

var client = new Twitter(keys);

var tweetsfile = {};

//tweets = {
//   863878 : { text: tweet.text, hashtag: 'stop'    }  
//}

client.stream('statuses/filter', {track: '@foundersandcoders stop,@foundersandcoders go,@foundersandcoders continue'}, function(stream) {
  stream.on('data', function(tweet) {

  // if (tweet.retweet_status) {
  //   var text = tweet.text;
  //   var hashtag = tweet.entities.hashtags[0];


  //   tweetsfile[tweet.id] = {};
  // }
  // else {
  //   for (keys in tweetsfile) {
  //     tweetsfile.tweet 
  //   }

  // }
  var streaming = JSON.stringify(tweet);

    console.log(tweet.text);
    console.log(tweet.entities.hashtags[0].text);

    fs.appendFile('originaltweets.json', streaming, function (err,data) {
  if (err) {
    return console.log(err);
  }
  // console.log();
});

  });
 
  stream.on('error', function(error) {
    throw error;
  });
});

http.createServer(function(request, response){

    if(request.url === "/search"){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end();
        }
        // else {
        //   ec(request, response);
        // }
    }).listen(8080);