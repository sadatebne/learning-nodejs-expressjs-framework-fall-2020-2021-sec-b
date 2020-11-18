	const db = require('./db');

module.exports ={
	insert: function(user, callback){
		var sql = "insert into admin VALUES ('', '"+user.username+"' , '"+user.password+"' , '"+user.email+"' , '"+user.mobileno+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	}


	

}