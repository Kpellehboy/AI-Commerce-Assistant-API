const Product = require('../models/Product');

// CREATE SINGLE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.json({
      message: "Product created ",
      product
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE MANY PRODUCTS (BULK)
exports.createManyProducts = async (req, res) => {
  try {
    const products = req.body;

    const created = await Product.insertMany(products);

    res.json({
      message: "Products created successfully",
      count: created.length,
      products: created
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE PRODUCT
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};