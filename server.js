const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

const config = require('./config.js');
const apiRouter = require('./api/index.js');
const blogsAPI = require('./api/blogs.js');
const booksAPI = require('./api/books.js');
const usersAPI = require('./api/users.js');
const router = require('react-router');

// const passport = require('./auth.js');

const server = express();

// Express Middleware
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));


/* API 
 * @author: znz
*/
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/buy';
mongoose.connect(url, (err, db) => {
  if(err) throw err;
});

// API middleware
server.use('/', apiRouter);
server.use('/blogs', blogsAPI);
server.use('/books', booksAPI);
server.use('/users', usersAPI);

// set up assets for app
// server.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
// server.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
// server.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
server.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
server.use('/js', express.static(__dirname + '/node_modules/materialize-css/dist/js'));
server.use('/fonts', express.static(__dirname + '/node_modules/materialize-css/dist/fonts/roboto'));

// server.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
server.use('/css', express.static(__dirname + '/node_modules/materialize-css/dist/css'));
server.use('/css', express.static(__dirname + '/node_modules/font-awesome/css'));
server.use('/css', express.static(__dirname + '/public'));

server.listen(config.port, () => {
  console.info('Express listenning on port ', config.port);
});
