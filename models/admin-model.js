var db = require('./db');

module.exports = {
	Create: function(user, callback){
		var sql = "insert into admin values (?,?,?,?,?,?,?)";
		db.execute(sql,['',user.name, user.username, user.password, user.contact, user.email, user.address], function(status){
			//console.log(status);
			callback(status);
		});
	},
	validate: function(user, callback){
		var sql = "select * from admin where username=? and password=?";
		db.getResult(sql,[user.username, user.password], function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAllMember: function(callback){
		var sql = "select * from member";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	getAllInfo: function(callback){
		var sql = "select * from bloginfo";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	getByUn: function(user, callback){
		var sql = "select * from `admin` where username=?";
		db.getResult(sql, [user.username], function(result){
			callback(result);
		});

	},
	getRestaurantById: function(id, callback){
		var sql = "select * from restaurant where id=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	updateProfile: function(user, callback){
		var sql = "update admin set name=?, contact=?,email=?, address=? where username=? ";
		db.execute(sql, [user.name, user.contact, user.email, user.address, user.username], function(status){
			callback(status);
		});
	},
	changePassword: function(user, callback){
		var sql = "update admin set password=? where username=? ";
		db.execute(sql, [user.password, user.username], function(status){
			callback(status);
		});
	},
	removeMember: function(id, callback){
		var sql = "delete from member where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	},
	updateBlogInfo: function(user, callback){
		var sql = "update bloginfo set name=?, contact=?, goal=?, description=?, creator=? where id='1'";
		db.execute(sql, [user.name, user.contact, user.goal, user.description, user.creator], function(status){
			callback(status);
		});
	},
	addRestaurant: function(user, callback){
		var sql = "insert into restaurant values (?,?,?,?)";
		db.execute(sql,['',user.name, user.location, user.description], function(status){
			callback(status);
		});
	},
	getAllRestaurant: function(callback){
		var sql = "select * from restaurant";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	getAllItem: function(callback){
		var sql = "select * from menus";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	getItemById: function(id, callback){
		var sql = "select * from menus where id=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	getCommentByMenuId:function(id, callback){
		var sql = "select * from commentonmenu where menuid=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	getCommentByRestaurantId:function(id, callback){
		var sql = "select * from commentonrestaurant where restaurantid=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	deleteRestaurant: function(id, callback){
		var sql = "delete from restaurant where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}, 
	updateRestaurant: function(user, callback){
		var sql = "update restaurant set name=?, location=?,description=? where id=? ";
		db.execute(sql, [user.name, user.location, user.description, user.id], function(status){
			callback(status);
		});
	},
	deleteCommentMenu: function(id, callback){
		var sql = "delete from commentonmenu where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	},
	deleteCommentRestaurant: function(id, callback){
		var sql = "delete from commentonrestaurant where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}	
}