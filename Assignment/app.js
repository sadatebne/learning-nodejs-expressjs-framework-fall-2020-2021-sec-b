const express 		= require('express');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const app 			= express();

//const login			= require('./controller/login');
const registration			= require('./controller/registration');
const login			= require('./controller/login');
const user			= require('./controller/user');



//config
app.set('view engine', 'ejs');


//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());

//app.use('/login', login);
app.use('/registration', registration);
app.use('/login', login);
app.use('/user', user);


app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});