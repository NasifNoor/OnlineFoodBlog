var express = require('express');
var visitor = require.main.require('./models/visitor-model');
var restaurant = require.main.require('./models/restaurant-model');
var router = express.Router();


router.get('/blogInfo', function(req, res){
	visitor.getAllInfo(function(result){
		if(result.length > 0){
			res.render('visitor/blogInfo', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/availableRestaurant', function(req, res){
	visitor.getAllRestaurant(function(result){
		if(result.length > 0){
			res.render('visitor/availableRestaurant', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/viewRestaurant/:id', function(req, res){
	visitor.getRestaurantById(req.params.id, function(result){
		if(result.length > 0){
			res.render('visitor/viewRestaurant', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/viewMenu/:id', function(req, res){
	restaurant.menuByRestaurantId(req.params.id, function(result){
		if(result.length > 0){
			res.render('visitor/viewMenu', {userList: result});			
		}else{
			res.send('Menu not available.....');
		}
	});
});
router.get('/menuDetails/:id', function(req, res){
	restaurant.menuById(req.params.id, function(result){
		if(result.length > 0){
			res.render('visitor/menuDetails', {userList: result});			
		}else{
			res.send('Menu not available.....');
		}
	});
});
module.exports = router;