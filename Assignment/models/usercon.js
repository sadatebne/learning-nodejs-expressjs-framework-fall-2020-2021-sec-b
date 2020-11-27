	const db = require('./db');

module.exports ={
  
   validate: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].usertype);
			}else{
				callback(false);
			}
		});
	},


	insert: function(user, callback){
		var sql = "insert into user VALUES ('', '"+user.username+"' , '"+user.name+"', '"+user.password+"' , '"+user.email+"' , '"+user.mobileno+"','"+user.usertype+"' , '"+user.gender+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},

	getById: function(user, callback){
		var sql = "select * from user where username ='"+user+ "'";
		db.getResults(sql, function(result){
			callback(result);
		});
	},

		update:function(user, callback){
		var sql = "Update user set username = '"+user.username+"', name=  '"+user.name+"', password = '"+user.password+"', email = '"+user.email+"', mobileno ='"+user.contactno+"', gender = '"+user.gender+"' where id='"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},

		insert: function(user, callback){
		
		console.log(user.type);
		var sql = "Insert into user (username,name,password,email,mobileno,usertype,gender) VALUES('"+user.username+"','"+user.name+"','"+user.password+"','"+user.email+"','"+user.mobileno+"','"+user.usertype+"','"+user.gender+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

        validate2: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].username);
			}else{
				callback(false);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from user where usertype = 'User' ";
		db.getResults(sql, function(results){
			callback(results);
		});

	},

	getById2: function(user, callback){
		var sql = "select * from user where id ='"+user.id+ "'";
		db.getResults(sql, function(result){
			callback(result);
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
		var sql = "select * from user where usertype = 'Moderator' ";
		db.getResults(sql, function(results){
			callback(results);
		});

	},

	getById3: function(user, callback){
		var sql = "select * from user where id ='"+user.id+ "'";
		db.getResults(sql, function(result){
			callback(result);
		});
	},
	
		delete2: function(user, callback){
		var sql = "delete from user where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},

}