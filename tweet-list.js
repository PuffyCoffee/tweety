var fs = require('fs');
var jsonfile = require('jsonfile');

var file = 'tweetIDList.json';
function checkTweeted(tweetId, cb) {
    jsonfile.readFile(file, cb);
}

function writeBack(list, done) {
	jsonfile.writeFile(file, list, done);
}

module.exports.checkTweeted = checkTweeted;
module.exports.writeBack = writeBack;
