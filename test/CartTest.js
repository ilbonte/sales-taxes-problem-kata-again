const {equal, deepEqual} = require('assert')
const Cart = require('../src/Cart')
const Product = require('../src/Product')

test("Cart: ", function(){
  test("new cart is empty", function(){
  const cart = new Cart()
  deepEqual([], cart.products)
})

test("can insert a product in the cart", function(){
  const cart = new Cart()
  const product = new Product(1,"book", 32.11)

  cart.addProduct(product)

  equal(1, cart.products.length)
  deepEqual(product, cart.products[0])
})

test("can get the total for a cart with product that are not taxed", function(){
  const cart = new Cart()
  const book = new Product(1,"book", 10.00)
  const meat = new Product(1,"meat", 15.00)

  cart.addProduct(book)
  cart.addProduct(meat)

  equal(25, cart.totalPrice)
})
})