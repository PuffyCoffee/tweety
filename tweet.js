var Twit = require('twit');

var T = new Twit({
	consumer_key: 'GgpcaHOvQofrDO2IJdQSU28mV',
    consumer_secret: 'zOX0zez6cOqGizKOJZOoBId833bldDunibdLAuApkVUqKoN9bv',
    access_token: '700801715591729152-S2UheBZ73XxyCptBhnagTkgJYpi7d85',
    access_token_secret: 'm4qCgVpkVKhrY9L3H3ZUY97kzs0vQrR6NK89Ltah7A8m8'
});

function tweet(data) {
    var tweet = data.statuses[0];
    var retweetId = data.statuses[0].id_str;
    var retweetBody = "RT@Alta_Vista_ #DoRight ";
    if (typeof tweet.quoted_status !== 'undefined') {
        retweetBody += tweet.quoted_status.text;
    } else {
        retweetBody += 'RT@Alta_Vista_ #DoRight ' + tweet.text;
    }
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
}

module.exports = {
    t: T,
    tweet: tweet
};
