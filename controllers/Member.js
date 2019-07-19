var express = require('express');
var member = require.main.require('./models/member-model');
var restaurant = require.main.require('./models/restaurant-model');
var router = express.Router();

router.get('*', function(req, res, next){
	if(req.session.un != null){
		next();
	}else{
		res.redirect('/home');
	}
});
router.get('/', function(req, res){
	var data={
    	username:req.session.un
    }
	member.getByUn(data, function(results){
		if(results != null){
			res.render('member/index', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/editProfile', function(req, res){
	var data ={
		username:req.session.un
	}
	member.getByUn(data, function(result){
		if(result.length > 0){
			res.render('member/editProfile', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/editProfile', function(req, res){
    var data = {
		name: req.body.name,
		contact: req.body.contact,
		email: req.body.email,
		address: req.body.address,
        username:req.session.un
	};
	
	member.updateProfile(data, function(status){

		if(status){
			res.redirect('/member');			
		}else{
			res.send("Error");
		}
	});
});

router.get('/changePassword', function(req, res){
	var data ={
		username:req.session.un
	}
	member.getByUn(data, function(result){
		if(result.length > 0){
			res.render('member/changePassword', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.post('/changePassword', function(req, res){
    var data = {
		password: req.body.password,
        username:req.session.un
	};
	
	member.changePassword(data, function(status){

		if(status){
			res.redirect('/member');			
		}else{
			res.send("Error");
		}
	});
});

router.get('/availableRestaurant', function(req, res){
	member.getAllRestaurant(function(result){
		if(result.length > 0){
			res.render('member/availableRestaurant', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/viewRestaurant/:id', function(req, res){
	member.getRestaurantById(req.params.id, function(result){
		if(result.length > 0){
			res.render('member/viewRestaurant', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.post('/viewRestaurant/:id', function(req, res){
	var data = {
		id: req. params.id,
        comment: req.body.comment,
		username: req.session.un
	};
	member.commentOnRestaurant(data, function(status){
		if(status){
			res.redirect('/member');			
		}else{
			res.send("Error");
		}
	});
});

router.get('/viewMenu/:id', function(req, res){
	restaurant.menuByRestaurantId(req.params.id, function(result){
		if(result.length > 0){
			res.render('member/viewMenu', {userList: result});			
		}else{
			res.send('Menu not available.....');
		}
	});
});
router.get('/menuDetails/:id', function(req, res){
	restaurant.menuById(req.params.id, function(result){
		if(result.length > 0){
			res.render('member/menuDetails', {userList: result});			
		}else{
			res.send('Menu not available.....');
		}
	});
});
router.post('/menuDetails/:id', function(req, res){
	var data = {
		id: req. params.id,
        comment: req.body.comment,
		username: req.session.un
	};
	member.commentOnMenu(data, function(status){
		if(status){
			res.redirect('/member');			
		}else{
			res.send("Error");
		}
	});
});
module.exports = router;