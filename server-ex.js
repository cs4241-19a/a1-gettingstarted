const express = require('express')
const app = express()
const port = 8000

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(port, function() {
    console.log('server started on port 8000')
})