const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    console.log('INSIDE CART >>>>>>', id);
    //fetch previous cart
    fs.readFile(p, (err, data) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(data);
      }

      //check if the products exists
      const existingProdIndex = cart.products.findIndex(p => p.id === id);
      const existingProd = cart.products[existingProdIndex];
      //add or increase product quantity
      let updatedProduct;
      if (existingProd) {
        updatedProduct = { ...existingProd };
        updatedProduct.quantity = updatedProduct.quantity + 1;
        cart.products = [ ...cart.products ];
        cart.products[existingProdIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, quantity: 1 };
        cart.products = [ ...cart.products, updatedProduct ];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      })
    });
  }
};
