var express = require('express');
var path = require('path')
var compression = require('compression')
var app = express();

// MIDDLEWARE
// Compression must be first
app.use(compression())
// serve our static stuff like index.css
// app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(__dirname + '/'));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.listen(process.env.PORT || 8080);