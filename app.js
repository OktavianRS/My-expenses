var express = require('express')
  , app = express.createServer()
  , pages = require(__dirname + '/controllers/pages') 


// mount routes
app.get('/', function (req, res) { res.redirect('/home') })
app.get('/home', pages.home)

module.exports = app