const express = require('express');
const usercon	= require.main.require('./model/usercon');
const router = express.Router();



router.get('/update', (req, res)=>{
	var user= req.cookies['uname'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('user/update',{users: results[0]});

	});
	
})

router.post('/update', (req, res)=>{
   
    var user = {
        id:req.body.id,
        username:req.body.username,
        password:req.body.password,
        contactno:req.body.contactno
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
   
      res.render('user/empAdd');
    
})
router.post('/empAdd', (req, res)=>{

    var user = {
        username:   req.body.username,
        password:   req.body.password,
        type    :   req.body.type
    };

    usercon.insert(user, function(status){
        if(status){
            res.redirect('/Mhome');
        }else{
            res.redirect('user/empAdd');
        }
    });
})

router.get('/empDelete/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('user/empDelete',{users: results[0]});

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
            res.redirect('user/empDelete/:id');
        }
    });
})



router.get('/empAddSalary/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('user/empAddSalary',{users: results[0]});

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
            res.redirect('/Mhome/empsalarylist');
        }else{
            res.redirect('user/empAddSalary');
        }
    });
})


module.exports = router;