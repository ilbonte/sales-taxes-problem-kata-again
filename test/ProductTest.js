const {equal} = require('assert')

const Product = require('../src/Product')

test("Product:", function () {

  test("no tax due for a not imported and exempt product", function () {
    const product = new ProductBuilder().withName("book").build()

    equal(0, product.salesTaxes)
  })

  test("exempt product is not taxed", function(){
    const product = new ProductBuilder().withName("book").build()

    equal(false, product.isTaxed)
  })

  test("normal product is taxed", function(){
    const product = new ProductBuilder().withName("Ferrari").build()

    equal(true, product.isTaxed)
  })

  test("tax calculation without rounding", function(){
    const product = new ProductBuilder().withName("Ferrari").withPrice(15.00).build()

    equal(1.50, product.salesTaxes)
  })

  test("tax calculation with rounding up", function(){
    const product = TaxedProduct.withPrice(10.22)

    const tax = product.salesTaxes

    equal(1.05, tax)
  })

  test("tax calculation with only import duty", function(){
    const isExempt = true
    const importedBook = new Product(1, "book", 10.00, isExempt)

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

class TaxedProduct {
  static withPrice(price) {
    return new ProductBuilder().withName("Ferrari").withPrice(price).build()
  }
}

class ProductBuilder {

  constructor() {
  }

  withName(name) {
    this.name = name
    return this
  }

  withPrice(price) {
    this.price = price
    return this
  }

  build() {
    return new Product(1,this.name,this.price)
  }
}
