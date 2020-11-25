const express 	= require('express');
const usercon = require.main.require('./models/usercon');
const router 	= express.Router();




router.get('/', (req, res)=>{
	res.render('manager/home/index')
})

router.get('/emplist', (req, res)=>{

	usercon.getAll(function(results){
		res.render('manager/home/emplist', {emplist: results});
	});

});

router.get('/cuslist', (req, res)=>{

	usercon.getAll2(function(results){
		res.render('manager/home/cuslist', {cuslist: results});
	});

});

router.get('/profile', (req, res)=>{
	var user = req.cookies['uname'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('manager/home/profile',{users: results[0]});

	});
	
})


router.get('/empsalarylist', (req, res)=>{

	usercon.getAll(function(results){
		res.render('manager/home/empsalarylist', {emplist: results});
	});

});


router.get('/empsalaryinfolist', (req, res)=>{

	usercon.getAll3(function(results){
		res.render('manager/home/empsalaryinfolist', {empsallist: results});
	});

});

router.get('/transactionlist', (req, res)=>{

	usercon.getAll4(function(results){
		res.render('manager/home/transactionlist', {trnslist: results});
	});

});




module.exports = router;