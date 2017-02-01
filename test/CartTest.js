const {equal, deepEqual} = require('assert')
const Cart = require('../src/Cart')
const Product = require('../src/Product')

test("Cart: ", function () {
  test("new cart is empty", function () {
    const cart = new Cart()
    deepEqual([], cart.products)
  })

  test("can insert a product in the cart", function () {
    const cart = new Cart()
    const product = new Product(1, "book", 32.11)

    cart.addProduct(product)

    equal(1, cart.products.length)
    deepEqual(product, cart.products[0])
  })

  test("can get the total for a cart with product that are not taxed", function () {
    const cart = new Cart()
    const book = new Product(1, "book", 10.00)
    const meat = new Product(1, "meat", 15.00)

    cart.addProduct(book)
    cart.addProduct(meat)

    equal(25, cart.totalPrice)
  })

  test("can get the total for a cart with a taxed product", function () {
    const cart = new Cart()
    const book = new Product(1, "book", 10.00)
    const car = new Product(1, "Ferrari", 15.00)

    cart.addProduct(book)
    cart.addProduct(car)

    equal(26.50, cart.totalPrice)
  })

  test("can get the total for a cart with multiple taxed products", function () {
    const cart = new Cart()
    const book = new Product(1, "book", 10.00)
    const glasses = new Product(2, "Glasses", 15.10)
    const cars = new Product(3, "Ferrari", 20.99, true)

    cart.addProduct(book)
    cart.addProduct(glasses)    
    cart.addProduct(cars)

    equal(115.72, cart.totalPrice)
  })

})