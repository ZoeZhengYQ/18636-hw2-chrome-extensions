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
        }
        console.log('Saved url to file: ' + newURL);
        res.send({ result: 'success!' });
    });
}

let sendFile = (req, res) => {
    res.sendFile('history.txt', { root: __dirname });
}

app.get('/history.txt', sendFile)

app.post('/', recordURL)

app.listen(port, () => {
    console.log(`my evil server listening on port ${port}!`)
})