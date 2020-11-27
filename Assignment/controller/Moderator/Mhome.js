const express 	= require('express');
const usercon	= require.main.require('./models/usercon');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('moderator/home')
})

module.exports = router;
