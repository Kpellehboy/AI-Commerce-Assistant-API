const express = require('express');
const router = express.Router();

const {
  createProduct,
  createManyProducts, 
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// routes
router.post('/', createProduct);
router.post('/bulk', createManyProducts);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;