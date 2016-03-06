var Twit = require('twit');
var json = require('jsonfile');

var T = null;

function init(config) {
    T = new Twit(config);
}

function retweet(criteria) {
    T.get('search/tweets', criteria, function(err, data, response) {
        json.readFile('tweetIDList.json', function(err, obj) {
            if (err) console.log(err);
            else {
                var tweetedObj = obj,
                    topic = data;
                for (var i = 0; i < data.statuses.length - 1; i += 1) {
                    if (typeof tweetedObj[data.statuses[i].id_str] === 'undefined') {
                        T.post('statuses/retweet/:id', {id: data.statuses[i].id_str}, function(err, data, response) {
                            if (err) console.log(err);
                            else {
                                console.log("Retweeted at ", new Date().toString());
                            }
                        });
                        tweetedObj[data.statuses[i].id_str] = new Date();
                    }
                }
                json.writeFile('tweetIDList.json', tweetedObj, function(err) {
                    if (err)
                        console.log(err);
                });
            }
        });
    });
}

module.exports = {
    init: init,
    retweet: retweet
};
