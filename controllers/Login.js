var express = require('express');
var admin	= require.main.require('./models/admin-model');
var member	= require.main.require('./models/member-model');
var router  = express.Router();


router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	var data = {
		username: req.body.username,
		password: req.body.password
	};
	if(req.body.userType == 'admin'){
		admin.validate(data, function(status){
			if(status){
				req.session.un = req.body.username;
				res.redirect('/admin');
			}else{
				res.send('invalid username/password...');
			}
		});
	}	
	else{
		member.validate(data, function(status){
			if(status){
				req.session.un = req.body.username;
				res.redirect('/member');
			}else{
				res.send('invalid username/password...');

			}
		});
	}
});


module.exports = router;