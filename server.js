const express = require('express')
const path = require('path')

const app = express()
app.use('/cssFiles',express.static(path.join(__dirname+ '/assets')));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(8080)
console.log("Aplikasi berjalan")