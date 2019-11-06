const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {

  //render the template file
  //the template engine(pug, ejs, ...) is defined in app.js property view engine
  res.render('shop', { prods: adminData.products, pageTitle: 'Shop', path: '/' });

  //send html files to the borwser, needs to construct the path hence the rootDir property
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;