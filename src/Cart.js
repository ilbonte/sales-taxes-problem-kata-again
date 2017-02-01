module.exports = class Cart {
  constructor() {
    this._products = []
  }

  get products() {
    return this._products
  }

  get totalPrice() {
    return this._products.reduce((total, product) => total += product.taxedPrice, 0)
  }

  get totalTaxes() {
    return this._products.reduce((total, product) => total += product.salesTaxes, 0)
  }

  addProduct(product) {
    this._products.push(product)
  }
}