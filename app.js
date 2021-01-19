const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');

app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

mongoose
  .connect('mongodb://localhost:27017/ecf', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(3000, () => console.log('server started')));
