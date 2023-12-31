const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcrypt");
const Product = require("../models/productModel");
const CryptoJS = require("crypto-js")


// CREATE/POST/UPLOAD A PRODUCT

const postProduct =  asyncHandler( async (req, res) => {
  const newProduct = new Product(req.body);
  
  try {
     const savedProduct = await newProduct.save();
     res.status(200).json(savedProduct)
  }catch(err) {
    res.status(err).json(err);
  }
})

// UPDATE PRODUCT

const updateProduct = asyncHandler(async (req, res) => {

    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, {new : true});
 
      res.status(200).json(updatedProduct)
    } catch(err) {
 
     res.status(500).json(err);
    }
 })

 // DELETE 

const deleteProduct = asyncHandler(async (req, res) => {
    try {
       await Product.findByIdAndDelete(req.params.id);
       res.status(200).json("product has been deleted!");
 
 
    } catch (err) {
      res.status(500).json(err)
    }
   
 })

 // GET A PRODUCT

const getProduct = asyncHandler(async (req, res) => {
    try {
       const product = await Product.findById(req.params.id);
  
       res.status(200).json(product);
  
          
  
    } catch (err) {
      res.status(500).json(err)
    }
   
  })

  //  GET ALL PRODUCTS

const getAllProduct = asyncHandler(async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
          products = await Product.find().sort({ createdAt: -1}).limit(5);
      } else if (qCategory) {
          products = await Product.find({
              categories: {
                  $in : [qCategory]
              },
          });
      }else {
          products = await Product.find();
      }
  
       res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err)
    }
   
  })



module.exports = {
 postProduct,
 updateProduct,
 deleteProduct,
 getProduct,
 getAllProduct,   
}