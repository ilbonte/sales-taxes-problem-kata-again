const {equal, deepEqual} = require('assert')
const Cart = require('../src/Cart')
const Product = require('../src/Product')
const Printer = require('../src/Printer')


test("Printer: ", function () {
  test("print the receipt", function () {
    const expectedReceipt =
      `1 book: 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 29.83`

    const cart = new Cart()
    cart.addProduct(new Product(1, "book", 12.49))
    cart.addProduct(new Product(1, "music CD", 14.99))
    cart.addProduct(new Product(1, "chocolate bar", 0.85))

    const printer = new Printer(cart)

    equal(expectedReceipt, printer.receipt)
  })
})
