var db = require('./db');

module.exports = {
	getByUn: function(user, callback){
		var sql = "select * from `member` where username=?";
		db.getResult(sql, [user.username], function(result){
			callback(result);
		});

	},
	validate: function(user, callback){
		var sql = "select * from member where username=? and password=?";
		db.getResult(sql,[user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	Create: function(user, callback){
		var sql = "insert into member values (?,?,?,?,?,?,?)";
		db.execute(sql,['',user.name, user.username, user.password, user.contact, user.email, user.address], function(status){
			//console.log(status);
			callback(status);
		});
	},
	updateProfile: function(user, callback){
		var sql = "update member set name=?, contact=?,email=?, address=? where username=? ";
		db.execute(sql, [user.name, user.contact, user.email, user.address, user.username], function(status){
			callback(status);
		});
	},
	changePassword: function(user, callback){
		var sql = "update member set password=? where username=? ";
		db.execute(sql, [user.password, user.username], function(status){
			callback(status);
		});
	},
	getRestaurantById: function(id, callback){
		var sql = "select * from restaurant where id=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	getAllRestaurant: function(callback){
		var sql = "select * from restaurant";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	commentOnMenu: function(user, callback){
		var sql = "insert into commentonmenu set id=?, comment=?, menuid=?, memberid=(select id from member where username=?)";
		db.execute(sql, ['', user.comment, user.id, user.username], function(status){
			callback(status);
		});
	},
	commentOnRestaurant: function(user, callback){
		var sql = "insert into commentonrestaurant set id=?, comment=?, restaurantid=?, memberid=(select id from member where username=?)";
		db.execute(sql, ['', user.comment, user.id, user.username], function(status){
			callback(status);
		});
	}
}