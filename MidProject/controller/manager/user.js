const express = require('express');
const usercon	= require.main.require('./model/usercon');
const router = express.Router();



router.get('/update', (req, res)=>{

	var user= req.cookies['uname'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('manager/user/update',{users: results[0]});

	});
	
})

router.post('/update', (req, res)=>{
   
    var user = {
        id         : req.body.id,
        username   : req.body.username,
        name       : req.body.name,
        password   : req.body.password,
        email      : req.body.email,
        contactno  : req.body.contactno,
        gender     : req.body.gender,
        type       : req.body.type,
        address    : req.body.address

    };
    usercon.update(user, function(status){

        if(status){

            console.log("Updated");
            res.redirect('/login');
        }
        else{
              console.log("Error"); 
        }

});

})


router.get('/empAdd', (req, res)=>{
   
      res.render('manager/user/empAdd');
    
})
router.post('/empAdd', (req, res)=>{

    var user = {
        username :   req.body.username,
        name     :   req.body.name,
        password :   req.body.password,
        type     :   req.body.type
    };

    usercon.insert(user, function(status){
        if(status){
            res.redirect('/Mhome');
        }else{
            res.redirect('manager/user/empAdd');
        }
    });
})

router.get('/empDelete/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('manager/user/empDelete',{users: results[0]});

    });
})

router.post('/empDelete/:id', (req, res)=>{

    var user = {
       id: req.params.id, 
    };

    usercon.delete(user, function(status){
        if(status){
            res.redirect('/Mhome/emplist');
        }else{
            res.redirect('manager/user/empDelete/:id');
        }
    });
})



router.get('/empAddSalary/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('manager/user/empAddSalary',{users: results[0]});

    });
})

router.post('/empAddSalary/:id', (req, res)=>{

    var user = {
        username:   req.body.username,
        salary  :   req.body.salary,
        date   :   req.body.date
    };

    usercon.insert2(user, function(status){
        if(status){
            res.redirect('/Mhome');
        }else{
            res.redirect('manager/user/empAddSalary');
        }
    });
})


module.exports = router;