/**
* @module routes
* @description
* Define all core routes of applications
*/
"user strict";
var express = require('express');
var router = express.Router();

const coreCtrl = require('../controllers').Core;

  router.route('/admin').get(coreCtrl.renderHomePage);
  router.route('/admin/add-product').get(coreCtrl.renderAddProductPage);
  router.route('/admin/update-product/:productId').get(coreCtrl.renderUpdateProductPage);
  router.route('/admin').post(coreCtrl.AddNewProduct);
  router.route('/admin/:productId').delete(coreCtrl.DeleteProduct);
  router.route('/admin/:productId').post(coreCtrl.UpdateProduct);

module.exports = router;
