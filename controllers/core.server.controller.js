"user strict";
var express = require('express');
var Product = require('./../db/models/product');
var moment = require('moment');
// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderAddProductPage: renderAddProductPage,
  renderUpdateProductPage: renderUpdateProductPage,
  AddNewProduct: AddNewProduct,
  DeleteProduct: DeleteProduct,
  UpdateProduct: UpdateProduct
};

/**
* @name renderHomePage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  Product.find({})
        .then(products => {
            res.render('home', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
}

/**
* @name renderAddProductPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderAddProductPage(req,res){
  res.render('add-product');
}

/**
* @name renderUpdateProductPage
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderUpdateProductPage(req,res){
  Product.findById(req.params.productId, (err, product) => {
    if (err) {
        console.log(err);
        throw err
    }
    res.render('update-product', { product: product });
})
}

/**
* @name AddNewProduct
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function AddNewProduct(req,res){
  let newProduct = new Product({
      ID: req.body.productID,
      name: req.body.productName,
      type: req.body.productType,
      number: req.body.number,
      date: moment().format('DD/MM/YYYY LTS')
  });

  newProduct.save()
      .then(doc => {
          res.redirect('/')
      })
      .catch(err => {
          console.log('Error: ', err);
          throw err;
      })
}

/**
* @name DeleteProduct
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function DeleteProduct(req,res){
  let productId = req.params.productId;
    Product.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc)
    })
}

/**
* @name UpdateProduct
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function UpdateProduct(req,res){
  let productId = req.params.productId;
  Product.findByIdAndUpdate(
      { _id: productId },
      { $set: {
        ID: req.body.productID,
        name: req.body.productName,
        type: req.body.productType,
        number: req.body.number
      } },
      { useFindAndModify: false })
      .then(doc => {
          res.redirect('/');
      })
}
