var express = require('express')
var requestHandler=require('./requestHandler/')
var app = express()

// app.get('/', )

// app.post('/', function(req, res) {
//     res.send('Hello Sir')
// })
app.get('/api/get',requestHandler.getHandler)
.post('/api/post',requestHandler.postHandler)
.put('/api/put',requestHandler.putHandler)
.delete('/api/delete',requestHandler.deleteHandler)
app.listen(2000,()=>{
    console.log("server is running at 2000")
})