var express = require('express');
var admin = require.main.require('./models/admin-model');
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
	admin.getByUn(data, function(results){
		if(results != null){
			res.render('admin/index', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/editProfile', function(req, res){
	var data ={
		username:req.session.un
	}
	admin.getByUn(data, function(result){
		if(result.length > 0){
			res.render('admin/editProfile', {user: result[0]});			
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
	
	admin.updateProfile(data, function(status){

		if(status){
			res.redirect('/admin');			
		}else{
			res.send("Error");
		}
	});
});

router.get('/changePassword', function(req, res){
	var data ={
		username:req.session.un
	}
	admin.getByUn(data, function(result){
		if(result.length > 0){
			res.render('admin/changePassword', {user: result[0]});			
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
	
	admin.changePassword(data, function(status){

		if(status){
			res.redirect('/admin');			
		}else{
			res.send("Error");
		}
	});
});

router.get('/memberList', function(req, res){
	admin.getAllMember(function(result){
		if(result.length > 0){
			res.render('admin/memberList', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/removeMember/:id', function(req, res){
	admin.removeMember(req.params.id, function(status){
		if(status > 0){
			res.redirect('/admin');			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/blogInfo', function(req, res){
	admin.getAllInfo(function(result){
		if(result.length > 0){
			res.render('admin/blogInfo', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/blogInfoEdit', function(req, res){
	admin.getAllInfo(function(result){
		if(result.length > 0){
			res.render('admin/blogInfoEdit', {user: result[0]});
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.post('/blogInfoEdit', function(req, res){
    var data = {
		name: req.body.name,
		creator: req.body.creator,
		contact: req.body.contact,
		goal: req.body.goal,
		description: req.body.description
	};
	
	admin.updateBlogInfo(data, function(status){

		if(status){
			res.redirect('/admin');		
		}else{
			res.send("Error");
		}
	});
});

router.get('/addRestaurant', function(req, res){
	res.render('admin/addRestaurant');
});
router.post('/addRestaurant', function(req, res){
    var data = {
		name: req.body.name,
		location: req.body.location,
		description: req.body.description
	};
	
	admin.addRestaurant(data, function(status){

		if(status){
			res.redirect('/admin');		
		}else{
			res.send("Error");
		}
	});
});

router.get('/availableRestaurant', function(req, res){
	admin.getAllRestaurant(function(result){
		if(result.length > 0){
			res.render('admin/availableRestaurant', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});


router.get('/deleteRestaurant/:id', function(req, res){
	admin.deleteRestaurant(req.params.id, function(status){
		if(status > 0){
			res.redirect('/admin');			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/viewRestaurant/:id', function(req, res){
	admin.getRestaurantById(req.params.id, function(result){
		if(result.length > 0){
			admin.getCommentByRestaurantId(req.params.id, function(list){
				var data = {
					userList: result,
					comments: list
				};
				res.render('admin/viewRestaurant', data);	
			});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/editRestaurant/:id', function(req, res){
	admin.getRestaurantById(req.params.id, function(result){
		if(result.length > 0){
			res.render('admin/editRestaurant', {userList: result});
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/editRestaurant/:id', function(req, res){
    var data = {
		id: req.params.id,
		name: req.body.name,
		location: req.body.location,
		description: req.body.description
	};
	
	admin.updateRestaurant(data, function(status){

		if(status){
			res.redirect('/admin/availableRestaurant');		
		}else{
			res.send("Error");
		}
	});
});

router.get('/availableItem', function(req, res){
	admin.getAllItem(function(result){
		if(result.length > 0){
			res.render('admin/availableItem', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/viewMenu/:id', function(req, res){
	restaurant.menuByRestaurantId(req.params.id, function(result){
		if(result.length > 0){
			res.render('admin/viewMenu', {userList: result});		
		}else{
			res.send('Menu not available.....');
		}
	});
});
router.get('/menuDetails/:id', function(req, res){
	restaurant.menuById(req.params.id, function(result){
		if(result.length > 0){
			admin.getCommentByMenuId(req.params.id, function(list){
				var data = {
					userList: result,
					comments: list
				};
				res.render('admin/menuDetails', data);	
			});		
		}else{
			res.send('Menu not available.....');
		}
	});
});
router.get('/viewItem/:id', function(req, res){
	admin.getItemById(req.params.id, function(result){
		if(result.length > 0){
			admin.getAllRestaurant(function(list){
				var data = {
					userList: result,
					options: list
				};
				res.render('admin/viewItem', data);	
			});
		}else{
			res.send('Error!.. try again...');
		}
	});
});


router.post('/viewItem/:id', function(req, res){
    var data = {
		id: req.params.id,
		restaurant: req.body.restaurant
	};
	restaurant.updateMenu(data, function(status){
		if(status){
			res.redirect('/admin/availableItem');		
		}else{
			res.send("Error");
		}
	});
});


router.get('/deleteCommentMenu/:id', function(req, res){
	admin.deleteCommentMenu(req.params.id, function(status){
		if(status){
			res.redirect('/admin/availableRestaurant');	
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/deleteCommentRestaurant/:id', function(req, res){
	admin.deleteCommentRestaurant(req.params.id, function(status){
		if(status){
			res.redirect('/admin/availableRestaurant');	
		}else{
			res.send('Error!.. try again...');
		}
	});
});



module.exports = router;