const {equal, deepEqual} = require('assert')

const Product = require('../src/Product')

test("Product:", function(){
  test("no tax due for a not imported and exempt product", function(){
  const product = new Product(1,"book", 10)

  equal(0, product.salesTaxes)
})

})

