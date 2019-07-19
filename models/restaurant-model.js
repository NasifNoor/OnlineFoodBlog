var db = require('./db');

module.exports = {
	menuByRestaurantId:function(id, callback){
		var sql = "select * from restaurantmenu where restaurantid=? ";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	menuById:function(id, callback){
		var sql = "select * from menus where id=? ";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	updateMenu: function(user, callback){
		var sql = "insert into restaurantmenu set id=? ,menuName=(select name from menus where id=?), price=(select price from menus where id=?), restaurantid=(select id from restaurant where name=?),menuid=? ";
		db.execute(sql, ['', user.id, user.id,user.restaurant, user.id], function(status){
			callback(status);
		});
	}
}