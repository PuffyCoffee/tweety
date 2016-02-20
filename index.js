var Twit = require('twit');

var T = new Twit({
	consumer_key: 'GgpcaHOvQofrDO2IJdQSU28mV',
    consumer_secret: 'zOX0zez6cOqGizKOJZOoBId833bldDunibdLAuApkVUqKoN9bv',
    access_token: '700801715591729152-S2UheBZ73XxyCptBhnagTkgJYpi7d85',
    access_token_secret: 'm4qCgVpkVKhrY9L3H3ZUY97kzs0vQrR6NK89Ltah7A8m8'
});

function retweetRecent() {
	T.get('search/tweets', {q: "@Alta_Vista_ OR #DoRight", result_type: "recent"}, function (err, data, response) {
		if (!err) {
            var retweetId = data.statuses[0].id_str;
			var tweet = data.statuses[0];
            var quoteBody = tweet.text;
            var retweetBody = 'RT @Alta_Vista_ #DoRight and #DIMEROCKS ' + quoteBody;
            if (retweetBody.length > 140) {
                retweetBody = retweetBody.slice(0, 136) + '...';
            }
			T.post('statuses/update', {status: retweetBody}, function (err, response) {
				if (response) {
					console.log('Quote Tweet ID: ' + retweetId);
				}
				if (err) {
					console.log('Quote Error: ', err);
				}
			});
		} else {
			console.log('Search Error: ', err);
		}
	});
}

retweetRecent();
// setInterval(retweetRecent, 5000);
