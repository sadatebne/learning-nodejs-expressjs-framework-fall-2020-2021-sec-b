const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{

	//req.session.uname = "";
	//res.cookie('uname', '');

	res.clearCookie('username');
	res.redirect('/login');
});


module.exports = router;