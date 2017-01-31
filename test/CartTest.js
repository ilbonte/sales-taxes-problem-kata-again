const {equal, deepEqual} = require('assert')
const Cart = require('../src/Cart')

test("new cart is empty", function(){
  const cart = new Cart()
  deepEqual([], cart.products)
})

