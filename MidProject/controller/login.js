const express 	= require('express');
const userModel	= require.main.require('./model/usercon');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index')
})
router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(status){
		if(status){
			res.cookie('uname', req.body.username);
			res.redirect('/Mhome');	
		}else{
			res.redirect('/login');
		}
	});

})
module.exports = router;