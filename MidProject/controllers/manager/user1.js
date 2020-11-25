const express = require('express');
const usercon	= require.main.require('./models/usercon');
const router = express.Router();
const { check, validationResult } = require('express-validator');


router.get('/update', (req, res)=>{

	var user= req.cookies['uname'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('manager/user1/update',{users: results[0]});

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
   
      res.render('manager/user1/empAdd');
    
})




router.post('/empAdd',[
    check('username', 'Invalid Username') 
    .isLength({ min: 5, max: 8 }), 
     check('name', 'Name length should be 5 to 20 characters').matches(/^[A-Za-z\s]+$/)
    .isLength({ min: 5}),       
   check('password', 'Password length should be 5 to 10 characters') 
    .isLength({ min: 5, max: 10 }),
     check('type', 'User Type Must be Employee').equals("Employee").isLength({ min: 5, max: 8 }),
], (req, res)=>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) { 
       
            res.json(errors) 
     } 
  
    // If no error occurs, then this 
    // block of code will run 
    else { 
      
            var user=
            {
                username: req.body.username,
                name: req.body.name,
                password: req.body.password,
                type: req.body.type
                
              
        
            };
            usercon.validate2(user,(type) => {
                if ( type == req.body.username ) {
                    res.send("User Name Already Taken")     
                }
                else {

                    usercon.insert(user, function(status){
        
                        if(status){
                    
                            console.log("added");
                         
                           
                            res.redirect('/Mhome/emplist');
                          
                        }
                        else{
                              console.log("Error");  
                        }
                    });    
                }
            })
           
    
}
});







router.get('/empDelete/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('manager/user1/empDelete',{users: results[0]});

    });
})

router.post('/empDelete/:id', (req, res)=>{

    var user = {
       id: req.params.id, 
    };

    usercon.delete(user, function(status){
        if(status){

    usercon.delete2(user, function(status){
        if(status){
            res.redirect('/Mhome/emplist');
        }
        else{
            console.log (Err);
        }

    });
        }else{
            res.redirect('manager/user1/empDelete/:id');
        }
    });
})



router.get('/empAddSalary/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('manager/user1/empAddSalary',{users: results[0]});

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
            res.redirect('/Mhome/empsalaryinfolist');
        }else{
            res.redirect('manager/user1/empAddSalary');
        }
    });
})

router.get('/cusDelete/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('manager/user1/cusDelete',{users: results[0]});

    });
})

router.post('/cusDelete/:id', (req, res)=>{

    var user = {
       id: req.params.id, 
    };

    usercon.delete(user, function(status){
        if(status){

            res.redirect('/Mhome/cuslist');

        }else{
            res.redirect('manager/user1/cusDelete/:id');
        }
    });
})


module.exports = router;

