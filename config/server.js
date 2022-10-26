let express = require('express');
let app = express();
let consign = require('consign');
let bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app; 