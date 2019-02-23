const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3007;

// parse the data from the url
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

// on this endpoint we receive your secret password
app.post('/', function (req, res) {
    console.log(req.body);
    res.status(200);
    res.end();
});

// provide malicious.js (note that the hacker themselves is not very security minded!)
app.use('/', express.static(__dirname));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, function () {
    console.log(`Eve listening on port ${port}`)
})