const express 		= require('express');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const app 			= express();





const Mhome			= require('./controller/manager/Mhome');
const login			= require('./controller/login');
const logout		= require('./controller/logout');
const user		= require('./controller/manager/user');







//config
app.set('view engine', 'ejs');


//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());





app.use('/login', login);
app.use('/Mhome', Mhome);
app.use('/logout', logout);
app.use('/user', user);








app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});