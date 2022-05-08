const express = require('express')
const path = require('path')

const app = express()
app.use('/static', express.static('/public'))

app.get('/', function(req,res){
    console.log(path.join(__dirname, '/index.html'))
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(8080, '0.0.0.0')
console.log("Aplikasi berjalan")