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

  test("tax calculation for a non imported product when rounding is not necessary", function(){
    const car = new Product(1, "Pandino", 15.00)

    equal(1.50, car.salesTaxes)
  })

  test("tax calculation for a non imported product with rounding up", function(){
    const car = new Product(1, "Astra", 10.22)
    
    equal(1.05, car.salesTaxes)
  })

  test("tax calculation for a imported product that is exempt", function(){
    const importedBook = new Product(1, "book", 10.00, true)
    
    equal(0.5, importedBook.salesTaxes)
  })

  
  
})

