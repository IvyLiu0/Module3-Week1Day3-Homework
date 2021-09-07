var express = require('express');
var path = require('path');
const { set } = require('../app');
var app = express();

app.get('/components', (req, res) => {
    res.render('content');
});

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.listen(3000);