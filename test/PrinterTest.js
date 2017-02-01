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

  test("print the receipt with imported products", function(){
    const expectedReceipt = `1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
1 imported box of chocolates: 11.85
Sales Taxes: 6.70
Total: 74.68`

  const cart = new Cart()
    cart.addProduct(new Product(1, "bottle of perfume", 27.99, true))
    cart.addProduct(new Product(1, "bottle of perfume", 18.99))
    cart.addProduct(new Product(1, "packet of headache pills", 9.75))
    cart.addProduct(new Product(1, "box of chocolates", 11.25, true))
    

    const printer = new Printer(cart)

    equal(expectedReceipt, printer.receipt)
  })
})
