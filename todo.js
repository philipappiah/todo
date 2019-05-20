const express = require('express');
const todo = express();
const bodyparser = require('body-parser');
const path = require('path');
const myapp = require('./routes/myroute');
todo.set('views','views');
todo.set('view engine','ejs');

todo.use(bodyparser.urlencoded({extended:false}));

todo.use(express.static(path.join(__dirname, 'public')));
todo.use(myapp);

todo.listen(7000);

