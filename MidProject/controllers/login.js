const express = require('express');
const um = require.main.require('./models/AdminModel');

const router = express.Router();

router.get('/',(req,res)=>
{
    res.render('./login/login');
})


router.post('/',(req,res)=>
{
   var user = {
    username: req.body.username,
    password : req.body.password
   };
   um.validate(user,(type) => {
           if ( type== 'admin' ) {
               res.cookie('username', req.body.username);
               res.redirect('/adminhome');           
           }
           else if(type=='Manager'){
            res.cookie('uname', req.body.username);
            res.redirect('/Mhome');             
        }
        else if(type== 'user'){
            res.cookie('username', req.body.username);
            res.redirect('/userhome');             
        }
           else {
                res.redirect('/login');           
           }
       })

})

module.exports = router;