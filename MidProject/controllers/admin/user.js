const express 	= require('express');
const userModel		= require.main.require('./models/AdminModel');
const router 	= express.Router();
const { check, validationResult } = require('express-validator');

router.get('*',  (req, res, next)=>{
	 if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	 }
}
);

router.get('/createmanager', (req, res)=>{
	res.render('admin/user/createmanager');
});
router.post('/createmanager',[

     check('name', 'Name length should be 5 to 20 characters').matches(/^[A-Za-z\s]+$/)
    .isLength({ min: 5}),
    check('email', 'Email length should be 10 to 30 characters') 
    .isEmail()
    .normalizeEmail()
    .isLength({ min: 10, max: 30 }), 
    
    check('contactno', 'Mobile number not valid') 
    .isLength({ min: 5, max: 15}),
     
   check('type', 'User Type Must be manager').equals("manager").isLength({ min: 5, max: 30 }),
   
   check('password', 'Password length should be 5 to 10 characters') 
    .isLength({ min: 5, max: 10 }) 
], (req, res)=>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) { 
         const alert = errors.array()
        res.render('admin/user/createmanager', {
            alert
        })
     } 
  

    else { 
      
            var user=
            {
                
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                contactno: req.body.contactno,
                nid: req.body.nid,
                gender: req.body.gender,
                address: req.body.address,
                type: req.body.type,
                password: req.body.password
              
        
            };
            userModel.validate2(user,(type) => {
                if ( type == req.body.username ) {
                    res.send("User Name Already Taken")     
                }
                else {
                    console.log("Error");  
                    userModel.insert(user, function(status){
        
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
router.get('/editmanager/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('admin/user/edit',user);
});

router.post('/editmanager/:id', (req, res)=>{
    var user = {
        id: req.params.id,
        ename: req.body.ename,
        cname: req.body.cname,
        contactno: req.body.contactno,
        username: req.body.username
	};
    userModel.update(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/home/userlist');
          
        }
        else{
              console.log("Error");  
        }
});
})

router.get('/deletemanager/:id', (req, res)=>{
        var user = {
    		id: req.params.id
    	};
        
    	res.render('admin/user/deletemanager',user);
});

router.post('/deletemanager/:id', (req, res)=>{
        var inputValue = req.body.vote;
        if (inputValue == "Delete"){
        var user = {
            id: req.params.id
          
    	};
        userModel.delete(user, function(status){

            if(status){
        
                console.log("deleted");
                res.redirect('/adminhome/managerlist');
              
            }
            else{
                  console.log("Error");  
            }
});}
else{
            res.redirect('/adminhome/managerlist');
}
})

router.get('/deleteadmin/:id', (req, res)=>{
            var user = {
                id: req.params.id
            };
            
            res.render('admin/user/deleteadmin',user);
});

router.post('/deleteadmin/:id', (req, res)=>{
            var inputValue = req.body.vote;
            if (inputValue == "Delete"){
            var user = {
                id: req.params.id
              
            };
            userModel.delete(user, function(status){

                if(status){
            
                    console.log("deleted");
                    res.redirect('/adminhome/adminlist');
                  
                }
                else{
                      console.log("Error");  
                }
});}
else{
    res.redirect('/adminhome/adminlist');
}
})


router.get('/addadmin', (req, res)=>{
	res.render('admin/user/addadmin');
});
router.post('/addadmin', [ 

    /* check('username', 'User Name length should be 5 to 20 characters').matches(/^[A-Za-z\s]+$/)
                    .isLength({ min: 5}),*/

    check('name', 'Name length should be 5 to 20 characters').matches(/^[A-Za-z\s]+$/)
                    .isLength({ min: 5}),

    check('email', 'Email is not valid') 
                    .isEmail()
                     .normalizeEmail()
                    .isLength({ min: 10, max: 30 }), 
     
    check('contactno', 'Mobile number should contains 11 digits') 
                    .isLength({ min: 11, max: 15}),
                     
    check('type', 'User Type Must be admin').equals("admin").isLength({ min: 5, max: 30 }),
                   
    check('password', 'Password length should be 5 to 10 characters') 
                    .isLength({ min: 5, max: 10 }) 
], (req, res)=>{
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {  
        
        const alert = errors.array()
        res.render('admin/user/addadmin', {
            alert
        })
            
    } 
    else { 
      
            var user=
            {
                
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                contactno: req.body.contactno,
                nid: req.body.nid,
                gender: req.body.gender,
                address: req.body.address,
                type: req.body.type,
                password: req.body.password
              
        
            };
            userModel.validate2(user,(type) => {
                if ( type == req.body.username ) {
                    res.send("User Name Already Taken")     
                }
                else {
                    console.log("Error");  
                    userModel.insert(user, function(status){
        
                        if(status){
                    
                            console.log("added");
                         
                           
                            res.redirect('/adminhome/adminlist');
                          
                        }
                        else{
                              console.log("Error");  
                        }
                    });    
                }
            })

} 

 
});
router.get('/deleteuser/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('admin/user/deleteuser',user);
});

router.post('/deleteuser/:id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/adminhome/userlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/adminhome/userlist');
}
})


router.get('/addsalary/:id', (req, res)=>{
  
    userModel.getById(req.params.id, (result) => {
        res.render('admin/user/addsalary', { user: result[0] });
    });
    
	
});


router.post('/addsalary/:id', (req, res)=>{
   
    var user = {
        id: req.params.id,
        username:req.body.username,
        salary:req.body.salary,
        date:req.body.date
    };
    userModel.salary(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/adminhome/managerlist')
        }
        else{
              console.log("Error"); 
        }

});
})


router.get('/editprofile/:id', (req, res)=>{
   
    userModel.getById(req.params.id, (result) => {
        res.render('admin/user/editprofile', { user: result[0] });
    });
       
});

router.post('/editprofile/:id', (req, res)=>{
   
                var user = {
                    id: req.params.id,
                    name: req.body.name,
                    email: req.body.email,
                    contactno: req.body.contactno,
                    address: req.body.address,
                    password: req.body.password,
                    file: req.file
            
                };
                userModel.update(user, function(status){
            
                    if(status){
                
                        console.log("Updated");
                        res.redirect('/adminhome/profile');
                      
                    }
                    else{
                          console.log("Error");  
                    }
                });
          
})
        

               
 
    
   


module.exports = router;