const express = require('express')
const app = express()
const port = 3000

let sendEvil = (req, res) => {
    res.sendFile('index.html', { root: __dirname })
}

app.get('/', sendEvil)

app.get('/index.html', sendEvil)

app.post('/', function(req, res) {
    console.log("post req");
    console.log(req.query);
    res.send({ some: 'json' });
})

app.listen(port, () => {
    console.log(`my evil server listening on port ${port}!`)
})