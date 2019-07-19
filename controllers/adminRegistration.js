var express = require('express');
var admin = require.main.require('./models/admin-model');
var router = express.Router();

router.get('/', function(req, res){
		res.render('admin/registration');			
});

router.post('/', function(req, res){
	
	var data = {
		username: req.body.username,
		password: req.body.password,
		name: req.body.name,
		contact: req.body.contact,
		email: req.body.email,
		address: req.body.address
	};

	admin.Create(data, function(status){

		if(status){
			res.redirect('/home');			
		}else{
			res.redirect('admin/registration');
		}
	});
});

module.exports = router;
