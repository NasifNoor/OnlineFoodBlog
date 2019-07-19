var db = require('./db');

module.exports = {
	getAllInfo: function(callback){
		var sql = "select * from bloginfo";
		db.getResult(sql, [], function(results){
			callback(results);
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
	getItemById: function(id, callback){
		var sql = "select * from menus where id=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	}
}