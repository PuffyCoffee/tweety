var Twit = require('twit');

var T = null;

function init(config) {
    T = new Twit(config);
}

function search(criteria) {
    T.get('search/tweets', criteria, function(err, data, response) {
        console.log(data);
        console.log(response);
    })
}


// Config object
// config = {
//     consumer_key: '',
//     consumer_secret: '',
//     access_token: '',
//     access_token_secret: ''
// });

module.exports = {
    init: init,
    search: search
}
