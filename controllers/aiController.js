const Product = require('../models/Product');
const Chat = require('../models/Chat');

exports.handleChat = async (req, res) => {
  try {
    const message = req.body.message.toLowerCase();

    // CREATE PRODUCT
    const addMatch = message.match(/add product (.+?) price (\d+)(?: category (\w+))?(?: stock (\d+))?/);

    if (addMatch) {
      const name = addMatch[1];
      const price = parseInt(addMatch[2]);
      const category = addMatch[3] || "general";
      const stock = addMatch[4] ? parseInt(addMatch[4]) : 0;

      const product = await Product.create({
        name,
        price,
        category,
        stock,
        description: "Added via AI"
      });

      const replyText = `Product "${name}" added`;

      await Chat.create({ message, reply: replyText });

      return res.json({
        reply: replyText,
        product
      });
    }

    // SHOW ALL PRODUCTS
    if (message.includes('show') && message.includes('product')) {
      const products = await Product.find();

      const replyText = products.length
        ? "All products:"
        : "No products found ";

      await Chat.create({ message, reply: replyText });

      return res.json({
        reply: replyText,
        products
      });
    }

    // FILTER UNDER PRICE
    const underMatch = message.match(/under (\d+)/);

    if (underMatch) {
      const price = parseInt(underMatch[1]);

      const products = await Product.find({ price: { $lt: price } });

      const replyText = `Products under ${price}`;

      await Chat.create({ message, reply: replyText });

      return res.json({
        reply: replyText,
        products
      });
    }

    // FILTER BY CATEGORY
    const categoryMatch = message.match(/category (\w+)/);

    if (categoryMatch) {
      const category = categoryMatch[1];

      const products = await Product.find({ category });

      const replyText = `Products in category "${category}"`;

      await Chat.create({ message, reply: replyText });

      return res.json({
        reply: replyText,
        products
      });
    }

    // SEARCH PRODUCT
    const searchMatch = message.match(/find (.+)/);

    if (searchMatch) {
      const keyword = searchMatch[1];

      const products = await Product.find({
        name: { $regex: keyword, $options: 'i' }
      });

      const replyText = `Search results for "${keyword}"`;

      await Chat.create({ message, reply: replyText });

      return res.json({
        reply: replyText,
        products
      });
    }

    // UPDATE PRODUCT
    const updateMatch = message.match(/update product (.+?) price (\d+)/);

    if (updateMatch) {
      const name = updateMatch[1];
      const newPrice = parseInt(updateMatch[2]);

      const product = await Product.findOneAndUpdate(
        { name },
        { price: newPrice },
        { new: true }
      );

      const replyText = product
        ? `"${name}" updated to ${newPrice}`
        : "Product not found ";

      await Chat.create({ message, reply: replyText });

      return res.json({
        reply: replyText,
        product
      });
    }

    // DELETE PRODUCT
    const deleteMatch = message.match(/delete product (.+)/);

    if (deleteMatch) {
      const name = deleteMatch[1];

      const product = await Product.findOneAndDelete({ name });

      const replyText = product
        ? `"${name}" deleted`
        : "Product not found ";

      await Chat.create({ message, reply: replyText });

      return res.json({
        reply: replyText
      });
    }

    // DEFAULT RESPONSE
    const replyText =
    `Welcome to AI Commerce Assistant!

     I can help you manage your store:

     1. add product iphone 13 price 800 category electronics stock 10,
     2. show products,
     3. products under 500,
     4. category electronics,
     5. find iphone,
     6. update product iphone 13 price 900,
     7. delete product iphone 13,

     Note: I only handle product management tasks.`;
    
    await Chat.create({ message, reply: replyText });

    return res.json({ reply: replyText });

  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};