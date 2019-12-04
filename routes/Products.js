const router = require("express").Router();
let Products = require("../Models/Products.model");

router.get("/", (req, res) => {
  Products.find({})
  .then(data =>res.json(data))
  .catch(err => res.send(err))
});

// router.get('/', async(req,res) => {
//   try{
//       const product = await Products.find()
//       // const product = await Product.find({}).exec();
//       return res.send(product)
//   } catch (err) {
//       console.log(err);
//     } 
//   });

module.exports = router;