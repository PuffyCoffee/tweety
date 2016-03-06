var Twit = require('twit');
var json = require('jsonfile');

var T = null;

function init(config) {
    T = new Twit(config);
}

function search(criteria) {
    T.get('search/tweets', criteria, function(err, data, response) {
        console.log(data.statuses.length);
        // for (var i = 0; i < data.statuses.length; i += 1) {
            T.post('statuses/retweet/:id', {id: data.statuses[0].id_str}, (err, data, response) => {
                if (err) console.log(err);
                // console.log(data);
                console.log(response);
            });
        // }
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
