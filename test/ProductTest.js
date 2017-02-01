const {equal} = require('assert')

const Product = require('../src/Product')

test("Product:", function () {

  const EXEMPT_NAME_PRODUCT = "book"
  const NOT_EXEMPT_NAME_PRODUCT = "Ferrari"

  test("no tax due for a not imported and exempt product", function () {
    const product = new ProductBuilder().withName(EXEMPT_NAME_PRODUCT).build()

    equal(0, product.salesTaxes)
  })

  test("exempt product is not taxed", function(){
    const product = new ProductBuilder().withName(EXEMPT_NAME_PRODUCT).build()

    equal(false, product.isTaxed)
  })

  test("normal product is taxed", function(){
    const product = new ProductBuilder().withName(NOT_EXEMPT_NAME_PRODUCT).build()

    equal(true, product.isTaxed)
  })

  test("tax calculation without rounding", function(){
    const product = new ProductBuilder().withName(NOT_EXEMPT_NAME_PRODUCT).withPrice(15.00).build()

    equal(1.50, product.salesTaxes)
  })

  test("tax calculation with rounding up", function(){
    const product = TaxedProduct.withPrice(10.22)

    const tax = product.salesTaxes

    equal(1.05, tax)
  })

  test("tax calculation with only import duty", function(){
    const imported = true
    const exemptProduct = new Product(1, EXEMPT_NAME_PRODUCT, 27.99, imported)

    equal(1.4, exemptProduct.salesTaxes)
  })

  test("tax calculation for imported and not exempt product", function(){
    const imported = true
    const importedCar= new Product(1, NOT_EXEMPT_NAME_PRODUCT, 27.99, imported)

    equal(4.20, importedCar.salesTaxes)
  })

  test("calculate taxes for multiple products", function () {
    const quantity = 2
    const importedCars= new Product(quantity, "Ferrari", 27.99, true)

    equal(8.40, importedCars.salesTaxes)
  })

  test("calculate price for multiple product", function(){
    const quantity = 3
    const importedCars= new Product(quantity, "Ferrari", 27.99, true)

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
