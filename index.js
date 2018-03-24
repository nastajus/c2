var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); //for parsing multipart/form-data

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true})); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function(req, res, next) {
	console.log(req.body);
	res.json(req.body);
});