var express = require('express');
var app = express();
var apiRouter = require('./app/routes/apiRouter');
var bodyParser = require('body-parser'); 
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
console.log("static files at: " + __dirname + "/public");

app.use('/api', apiRouter);
app.use(bodyParser.json());

app.get('*', function(req, res) {
    res.sendfile('./public/app/index.html'); 
});

app.listen(9001, function(){
	console.log("Services listening on port 9001");
});