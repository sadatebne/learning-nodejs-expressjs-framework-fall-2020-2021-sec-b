const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from user where UserName='"+user.username+"' and Password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0].UserType);
			}else{
				callback(false);
			}
		});
	},

	getById: function(user, callback){
		var sql = "select * from user where username ='"+user+ "'";
		db.getResults(sql, function(result){
			callback(result);
		});
	},

	update:function(user, callback){
		var sql = "Update user set UserName = '"+user.username+"', Name=  '"+user.name+"', Password = '"+user.password+"', Email = '"+user.email+"', ContactNo ='"+user.contactno+"', Gender = '"+user.gender+"', Address = '"+user.address+"' where ID='"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	getAll: function(callback){
		var sql = "select * from user where UserType = 'Employee' ";
		db.getResults(sql, function(results){
			callback(results);
		});

	},

		insert: function(user, callback){
		
		console.log(user.type);
		var sql = "Insert into user (UserName,Name,Password,UserType) VALUES('"+user.username+"','"+user.name+"','"+user.password+"','"+user.type+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

		delete: function(user, callback){
		var sql = "delete from user where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},

	getAll2: function(callback){
		var sql = "select * from user where UserType = 'Customer' ";
		db.getResults(sql, function(results){
			callback(results);
		});

	},

	getById2: function(user, callback){
		var sql = "select * from user where ID ='"+user.id+ "'";
		db.getResults(sql, function(result){
			callback(result);
		});
	},


		insert2: function(user, callback){
		console.log(user.type);
		var sql = "Insert into empsalary (username,salary,date) VALUES('"+user.username+"','"+user.salary+"','"+user.date+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},


	delete2: function(user, callback){
		var sql = "delete from empsalary where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},

		getAll3: function(callback){
		var sql = "select * from empsalary";
		db.getResults(sql, function(results){
			callback(results);
		});

	},

		getAll4: function(callback){
		var sql = "select * from transaction";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	
	validate2: function(user, callback){
		var sql = "select * from user where UserName='"+user.username+"' and Password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].UserName);
			}else{
				callback(false);
			}
		});
	},
	
}