var express = require('express');
var router = express.Router();

var Day = require('../../models/day');

router.get('/', function(req, res, next){
	Day.findall()
	.then(function(days){
		console.log(days);
	})
	.catch(next);
})

module.exports = router;