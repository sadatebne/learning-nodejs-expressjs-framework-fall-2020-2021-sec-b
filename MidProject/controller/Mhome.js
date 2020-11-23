const express 	= require('express');
const usercon = require.main.require('./model/usercon');
const router 	= express.Router();




router.get('/', (req, res)=>{
	res.render('home/index')
})

router.get('/emplist', (req, res)=>{

	usercon.getAll(function(results){
		res.render('home/emplist', {emplist: results});
	});

});

router.get('/cuslist', (req, res)=>{

	usercon.getAll2(function(results){
		res.render('home/cuslist', {cuslist: results});
	});

});

router.get('/profile', (req, res)=>{
	var user= req.cookies['uname'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('home/profile',{users: results[0]});

	});
	
})


router.get('/empsalaryaddlist', (req, res)=>{

	usercon.getAll(function(results){
		res.render('home/empsalaryaddlist', {emplist: results});
	});

});

router.get('/empsalarylist', (req, res)=>{

	usercon.getAll3(function(results){
		res.render('home/empsalarylist', {emplist: results});
	});

});


module.exports = router;