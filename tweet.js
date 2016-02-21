var Twit = require('twit');

var T = new Twit({
	consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
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
