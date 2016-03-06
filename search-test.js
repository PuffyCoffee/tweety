var tweetSearch = require('./index.js');

tweetSearch.init({
    consumer_key: 'in05iL9kV64hQQxQrUZEHj5Hs',
    consumer_secret: '0TifoKHzFYAKlHlCtzymYV0x2546B4okpynW3R3tfGl7fh0AMe',
    access_token: '700801715591729152-u3hGOxnn68EpbVM01hpmR1cVtjm73s5',
    access_token_secret: '0Rq6SH00PjQM9RTsdYtD6QezyutysgDFQbPePEvdxfZmX'
});

tweetSearch.retweet({
    q: 'Web Development OR Java OR JavaScript'
});
