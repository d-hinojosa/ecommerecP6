const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  product_name: { type: String, required: true },
  product_image: { type: String, required: true },
  product_description: { type: String, required: true },
  product_price: { type: String, rquired: true },
  category: { type: String, required: true },
  

},
{collection: "Products"}
);
const Products = mongoose.model("Products", productSchema);
module.exports = Products;



