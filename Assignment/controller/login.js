const express 	= require('express');
const usercon	= require.main.require('./models/usercon');
const router 	= express.Router();



router.get('/', (req, res)=>{
	res.render('login/index')
})

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

   usercon.validate(user,(type) => {
           if ( type== 'Admin' ) {
               res.cookie('username', req.body.username);
               res.redirect('/adminhome');           
           }
           else if(type=='Moderator'){
            res.cookie('username', req.body.username);
            res.redirect('/Mhome');             
        }
        else if(type== 'Member'){
            res.cookie('username', req.body.username);
            //res.redirect('/userhome');             
        }
           else {
                res.redirect('/login');           
           }
       })

})

module.exports = router;