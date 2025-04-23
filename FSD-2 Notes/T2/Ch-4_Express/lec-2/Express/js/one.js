const express = require('express')
const app = express()
const path = require('path')

var css_path = path.join(__dirname,'../css')
var img_path = path.join(__dirname,'../image')
var html_path  = path.join(__dirname,'../html')

app.use(express.static(css_path))
app.use(express.static(img_path))
app.use(express.static(html_path,{index:"one.html"}))
app.listen(6042,()=>{console.log("server started !!");
})
