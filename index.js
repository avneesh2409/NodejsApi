var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello Sir')
})

app.post('/', function(req, res) {
    res.send('Hello Sir')
})
app.listen(2000,()=>{
    console.log("server is running at 2000")
})