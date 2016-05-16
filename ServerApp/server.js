var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var crypto = require('crypto');

var algorithm = 'aes256';
var key = 'CMPE284_FINAL_PROJECT_OPEN_VPN_AS_A_SERVICE';

app.use(bodyParser.urlencoded({
    extended: true
}));

var decipher = crypto.createDecipher(algorithm, key);

app.listen(3000, function () {
    console.log("Working on port 3000");
});

app.post('/sendEncryptedData', function (req, res) {
    var dataReceived = req.body.encryptedData;
    if (dataReceived !== undefined && dataReceived !== '') {
        var decrypted = decipher.update(dataReceived, 'hex', 'utf8') + decipher.final('utf8');
        console.log("Value Received from Client:"+decrypted);
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});