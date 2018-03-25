var express = require('express')
var app = express()
var scratchapd = require('./scratchpad');
var api = require('./api');

// respond with "hello world" when a GET request is made to the homepage

// GET method route
app.get('/', function (req, res) {
	//res.send('GET request to the homepage')
	res.sendFile('index.html', {root: __dirname })
})

// POST method route
app.post('/', function (req, res) {
	res.send('POST request to the homepage')
})


app.post('/example/a', function (req, res) {
	res.send('Hello from A!')
})

app.post('/example/b', function (req, res, next) {
	console.log('the response will be sent by the next function ...')
	next()
}, function (req, res) {
	res.send('Hello from B!')
})

app.listen(3001, function () {
	console.log('listening on port 3001');
})