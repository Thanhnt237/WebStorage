/**
* @module routes
* @description
* Define all core routes of applications
*/
"user strict";
var express = require('express');
var router = express.Router();

const coreCtrl = require('../controllers').Core;

  router.route('/').get(coreCtrl.renderHomePage);
  router.route('/add-product').get(coreCtrl.renderAddProductPage);
  router.route('/update-product/:productId').get(coreCtrl.renderUpdateProductPage);
  router.route('/').post(coreCtrl.AddNewProduct);
  router.route('/:productId').delete(coreCtrl.DeleteProduct);
  router.route('/:productId').post(coreCtrl.UpdateProduct);

module.exports = router;
