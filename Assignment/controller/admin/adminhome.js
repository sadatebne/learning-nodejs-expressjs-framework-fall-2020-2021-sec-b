const express 	= require('express');
const usercon	= require.main.require('./models/usercon');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('admin/home')
})

router.get('/profile', (req, res)=>{
	var user = req.cookies['username'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('admin/profile',{users: results[0]});

	});
	
})

router.get('/userlist', (req, res)=>{

	usercon.getAll(function(results){
		res.render('admin/userlist', {userlist: results});
	});

});

router.get('/moderatorlist', (req, res)=>{

	usercon.getAll2(function(results){
		res.render('admin/moderatorlist', {moderalist: results});
	});

});

module.exports = router;