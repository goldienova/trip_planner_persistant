var Sequelize = require('sequelize');
var db = require('./_db');

var Hotel = require('./hotel');
var Restaurants = require('./restaurant');
var Activities = require('./activity');

Day = db.define('day', {
	number: Sequelize.INTEGER,
	// day_hotel: Sequelize.STRING,
	// restaurants: Sequelize.ARRAY(Sequelize.STRING),
	// activities: Sequelize.ARRAY(Sequelize.STRING)
})




module.exports= Day;

