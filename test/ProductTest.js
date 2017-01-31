const {equal, deepEqual} = require('assert')

const Product = require('../src/Product')

test("Product:", function () {
  test("no tax due for a not imported and exempt product", function () {
    const product = new Product(1, "book", 10)

    equal(0, product.salesTaxes)
  })

  test("can detect if a product is exempt or not", function(){
    const book = new Product(1, "book", 10)
    const car = new Product(1, "Ferrari", 10000)

    equal(false, book._taxed)
    equal(true, car._taxed)
  })
  
})

