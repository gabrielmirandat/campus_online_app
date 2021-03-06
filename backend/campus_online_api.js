const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const consign = require('consign');
const env = require('./config/env');
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

consign({ verbose: false })
  .include('config')
  .then('libs')
  .then('models')
  .then('controllers')
  .then('routes')
  .into(app);

// get home
// app.get('/', (req, res) => {
//  res.send('home')
//})
app.use(express.static(path.join(__dirname, '../frontend/build/')));

const port = 8080;
app.listen(port, () => {
  console.log(`Server campus online no ar na porta ${port}: ambiente ${env}`);
});
