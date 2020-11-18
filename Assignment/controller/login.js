const express 	= require('express');
const router 	= express.Router();



router.get('/Alogin', (req, res)=>{
	res.render('login/Alogin')
})

router.get('/Mlogin', (req, res)=>{
	res.render('login/Mlogin')
})

module.exports = router;