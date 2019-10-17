var express = require('express')
var requestHandler=require('./requestHandler/')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/get',requestHandler.getHandler)
.post('/api/post',(req,res)=>{
    var data = []
    for (let i = 0; i < req.body.length; i++) {
        data.push(req.body[i])
    }
    requestHandler.postHandler(data)
    res.send('successfully data is stored')
})
.put('/api/put',requestHandler.putHandler)
.delete('/api/delete',requestHandler.deleteHandler)
app.listen(2000,()=>{
    console.log("server is running at 2000")
})