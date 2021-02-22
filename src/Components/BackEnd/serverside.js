var express = require('express')
var app = express()

app.get('/', function(req,res){
    res.send('Hello World')
})

app.listen(3307, ()=>{
    console.log('server started on PORT 3307')
})