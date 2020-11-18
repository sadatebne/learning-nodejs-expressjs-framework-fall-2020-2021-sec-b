const express 	= require('express');
const usercon	= require.main.require('./models/usercon');
const usercon1	= require.main.require('./models/usercon1');
const router 	= express.Router();

router.get('/Acreate', (req, res)=>{
	res.render('user/Acreate')
})

router.post('/Acreate', (req, res)=>{

	var user1 = {
		username: 	req.body.username,
		password: 	req.body.password,
		email	: 	req.body.email,
		mobileno:   req.body.mobileno
	};

	usercon.insert(user1, function(status){
		if(status){
			console.log('create successfullly');
			res.redirect('/login/Alogin');
		}else{
			res.redirect('user/Acreate');
		}
	});
})






router.get('/Mcreate', (req, res)=>{
	res.render('user/Mcreate')
})

router.post('/Mcreate', (req, res)=>{

	var user1 = {
		username: 	req.body.username,
		password: 	req.body.password,
		email	: 	req.body.email,
		mobileno:   req.body.mobileno
	};

	usercon1.insert(user1, function(status){
		if(status){
			console.log('create successfullly');
			res.redirect('/login/Mlogin');
		}else{
			res.redirect('user/Mcreate');
		}
	});
})

module.exports = router;