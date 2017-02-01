const {equal} = require('assert')

const Product = require('../src/Product')

test("Product:", function () {

  test("no tax due for a not imported and exempt product", function () {
    const product = new Product(1, "book", 10)

    equal(0, product.salesTaxes)
  })

  test("exempt product is not taxed", function(){
    const book = new Product(1, "book", 10)

    equal(false, book._taxed)
  })

  test("normal product is taxed", function(){
    const car = new Product(1, "Ferrari", 10000)

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

  test("tax calculation for imported and not exempt product", function(){
    const importedCar= new Product(1, "Ferrari", 27.99, true)

    equal(4.20, importedCar.salesTaxes)
  })

  test("calculate taxes for multiple products", function () {
    const importedCars= new Product(2, "Ferrari", 27.99, true)

    equal(8.40, importedCars.salesTaxes)
  })

  test("calculate price for multiple product", function(){
    const importedCars= new Product(3, "Ferrari", 27.99, true)
    equal(12.60, importedCars.salesTaxes)
    equal(96.57, importedCars.taxedPrice)
  })
})
