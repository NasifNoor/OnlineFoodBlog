//declaration
var express= require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var home = require('./controllers/Home');
var login = require('./controllers/Login');
var logout = require('./controllers/Logout');
var registerM = require('./controllers/memberRegistration');
var registerA = require('./controllers/adminRegistration');
var admin = require('./controllers/Admin');
var member = require('./controllers/Member');
var visitor = require('./controllers/Visitor');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({'extended':false}));
app.use(expressSession({secret:'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use(express.static(__dirname+'/public'));
app.use('/home', home);
app.use('/admin', admin);
app.use('/member', member);
app.use('/visitor', visitor);
app.use('/login', login);
app.use('/logout', logout);
app.use('/registration', registerM);
app.use('/adminRegistration', registerA);

//routing
app.get('/', function(req, res){
	res.render('home/index');
});
app.get('*',function(req,res){
	res.send('404 error');
})

app.listen(5000, function(){
	console.log('Server started at 5000....');
})