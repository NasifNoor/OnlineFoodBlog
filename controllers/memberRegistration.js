var express = require('express');

var member = require.main.require('./models/member-model');
var router = express.Router();

router.get('/', function(req, res){
		res.render('member/registration');			
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

	member.Create(data, function(status){

		if(status){
			res.redirect('/home');			
		}else{
			res.redirect('member/registration');
		}
	});
});

module.exports = router;
