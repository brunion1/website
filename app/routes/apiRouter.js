var express = require('express');
var router = express.Router();
var bio = require('../data/bio.json');
var lab = require('../data/lab.json');
var qa = require('../data/qa.json');
var resume = require('../data/resume.json');

router.get('/bio', function(req, res){
	res.send(bio);
});

router.get('/resume', function(req, res){
	res.send(resume);
});

router.get('/qa', function(req, res){
	res.send(qa);
});

router.get('/lab', function(req, res){
	res.send(lab);
});

router.get('/', function(req, res){
	res.send("Invalid query");
	res.sendStatus(404);
})

module.exports = router;