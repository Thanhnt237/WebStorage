var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 8080;

var Database = require('./db/database');
var routes = require('./routes/core.server.routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

// Website routes
app.use('/', routes);


app.listen(port, function () {
    console.log("Starting at port " + port);
});
