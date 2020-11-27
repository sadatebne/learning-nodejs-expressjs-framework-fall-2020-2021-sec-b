const express 	= require('express');
const usercon	= require.main.require('./models/usercon');
const { check, validationResult } = require('express-validator');
const router 	= express.Router();

router.get('/Acreate', (req, res)=>{
	res.render('user/Acreate')
})

router.post('/Acreate', (req, res)=>{

	var user1 = {
		username: 	req.body.username,
	    name    : 	req.body.name,
		password: 	req.body.password,
		email	: 	req.body.email,
		mobileno:   req.body.mobileno,
		usertype:   req.body.usertype,
		gender  :   req.body.gender,
	};

	usercon.insert(user1, function(status){
		if(status){
			console.log('create successfullly');
			res.redirect('/login');
		}else{
			res.redirect('user/Acreate');
		}
	});
})



router.get('/Mcreate', (req, res)=>{
	res.render('user/Mcreate')
})

router.post('/Mcreate', (req, res)=>{

	var user1 = {
		username: 	req.body.username,
	    name    : 	req.body.name,
		password: 	req.body.password,
		email	: 	req.body.email,
		mobileno:   req.body.mobileno,
		usertype:   req.body.usertype,
		gender  :   req.body.gender,
	};

	usercon.insert(user1, function(status){
		if(status){
			console.log('create successfullly');
			res.redirect('/login');
		}else{
			res.redirect('user/Mcreate');
		}
	});
})


router.get('/Mupdate', (req, res)=>{

	var user= req.cookies['username'];
	console.log (user);

	usercon.getById(user,function(results)
	{
	  res.render('user/Mupdate',{users: results[0]});

	});
	
})

router.post('/Mupdate', (req, res)=>{
   
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


router.get('/Usercreate', (req, res)=>{
   
      res.render('user/Usercreate');
    
})


router.post('/Usercreate',[
    check('username', 'Invalid Username') 
    .isLength({ min: 5, max: 8 }), 
     check('name', 'Name length should be 5 to 20 characters').matches(/^[A-Za-z\s]+$/)
    .isLength({ min: 5}),       
   check('password', 'Password length should be 5 to 10 characters') 
    .isLength({ min: 5, max: 10 }),
     check('usertype', 'User Type Must be User').equals("User").isLength({ min: 4, max: 8 }),
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
                id         : req.body.id,
                username   : req.body.username,
                name       : req.body.name,
                password   : req.body.password,
                email      : req.body.email,
                mobileno   : req.body.mobileno,
                gender     : req.body.gender,
                usertype   : req.body.usertype,
                address    : req.body.address
                
              
        
            };
            usercon.validate2(user,(type) => {
                if ( type == req.body.username ) {
                    res.send("User Name Already Taken")     
                }
                else {

                    usercon.insert(user, function(status){
        
                        if(status){
                    
                            console.log("added");
                         
                           
                            res.redirect('/adminhome');
                          
                        }
                        else{
                              console.log("Error");  
                        }
                    });    
                }
            })
           
    
}
});

router.get('/Userdelete/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('user/Userdelete',{users: results[0]});

    });
})

router.post('/Userdelete/:id', (req, res)=>{

    var user = {
       id: req.params.id, 
    };

    usercon.delete(user, function(status){
        if(status){

         res.redirect('/adminhome');
        }else{
            res.redirect('user/Userdelete/:id');
        }
    });
})

router.get('/Moderadelete/:id', (req, res)=>{
    var user ={
        id: req.params.id,   
    };

    usercon.getById2(user,function(results)
    {
      res.render('user/Userdelete',{users: results[0]});

    });
})

router.post('/Moderadelete/:id', (req, res)=>{

    var user = {
       id: req.params.id, 
    };

    usercon.delete(user, function(status){
        if(status){

         res.redirect('/adminhome');
        }else{
            res.redirect('user/Moderadelete/:id');
        }
    });
})

module.exports = router;