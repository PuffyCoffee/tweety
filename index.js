var tl = require('./tweet-list.js');
var twitter = require('./tweet.js');

var T = twitter.t;

function quoteTweet() {
	T.get('search/tweets', {q: "@Alta_Vista_ AND #DoRight", result_type: "recent"}, function (err, data, response) {
		if (!err && data.statuses[0].user.screen_name != "AVS_DIME_Team") {
            var retweetId = data.statuses[0].id_str;
			tl.checkTweeted(retweetId, function(err, fileContent) {
				if (!err) {
					var list = fileContent;
					if (typeof list[retweetId] === 'undefined') {
						// TWEET!
						var obj = {};
						obj[retweetId] = new Date();
						twitter.tweet(data);
						tl.writeBack(obj, function() {
							console.log(retweetId, " added to tweetIDList file");
						});
					} else {
						// Already tweeted, try to find available one.
						console.log("no one tweeted in last 15 min...");
					}
				} else {
					console.log("trouble reading file, no tweet...");
				}
			});

		} else {
			console.log('Search Error (not gonna tweet myself). ');
		}
	});
}

quoteTweet();
setInterval(quoteTweet, 1800000);
