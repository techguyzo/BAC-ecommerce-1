const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProductById,
} = require('../controller/productControllers.js');

//get all product from db
//get api product
//public access
router.get('/', getAllProducts)

//get a product from db
//get api product
//public access
router.get('/:id', getProductById)

module.exports = router;