const express 	= require('express');
const usercon	= require.main.require('./models/usercon');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('moderator/home')
})

router.get('/profile', (req, res)=>{
	var user = req.cookies['username'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('moderator/profile',{users: results[0]});

	});
	
})

module.exports = router;
