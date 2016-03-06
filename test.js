var tweetSearch = require('./index.js');

tweetSearch.init({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
});

tweetSearch.retweet({
    q: 'Web Development OR Java OR JavaScript'
});
