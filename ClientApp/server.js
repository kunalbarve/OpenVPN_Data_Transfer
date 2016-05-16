var express = require("express");
var app = express();
var url = require('url');
var bodyParser = require('body-parser');
var prompt = require('prompt');
var crypto = require('crypto');
var request = require('request');

app.use(bodyParser.json());

var algorithm = 'aes256';
var key = 'CMPE284_FINAL_PROJECT_OPEN_VPN_AS_A_SERVICE';

var cipher = crypto.createCipher(algorithm, key);

prompt.start();

prompt.get(['input'], function (err, result) {
    if (err) {
        return onErr(err);
    }
    var encryptedValue = cipher.update(result.input, 'utf8', 'hex') + cipher.final('hex');

    sendData(encryptedValue);
});

function onErr(err) {
    return 1;
}

app.listen(8000, function () {
    console.log("Working on port 8000");
});

function sendData(data) {
    request.post({
        url: 'http://10.0.0.134:3000/sendEncryptedData',
        form: {encryptedData: data}
    }, function (error, response, body) {
        if (!error && response !== undefined) {
            console.log(response.statusCode);
        } else {
            console.log("Error in sending data:" + error);
        }
    });
}