var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var Day = require('../../models/day');

router.get('/', function(req, res, next){
	Day.findAll()
	.then(function(days){
		console.log(days);
		res.json(days);
	})
	.catch(next);
})

// router.get('/:id', function(req, res, next){

// })

//router.post(':id/restaurants')

module.exports = router;