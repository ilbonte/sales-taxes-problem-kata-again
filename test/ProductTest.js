const {equal, deepEqual} = require('assert')

const Product = require('../src/Product')

test("an exempt and not importand product's price don't change ", function(){
  const product = new Product(1,"book", 10)

  equal(0, product.salesTaxes)
})