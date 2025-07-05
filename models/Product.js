const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { 
    type: Number, 
    required: true,
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: "Price must be greater than 0"
    }
  },
  category: String,
  inStock: Boolean
});

module.exports = mongoose.model("Product", productSchema);
