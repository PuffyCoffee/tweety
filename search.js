var Twit = require('twit');
var json = require('jsonfile');

var T = null;

function init(config) {
    T = new Twit(config);
}

function search(criteria) {
    T.get('search/tweets', criteria, function(err, data, response) {
        json.writeFile("data.json", data, _ => {
            console.log("done");
        });
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
