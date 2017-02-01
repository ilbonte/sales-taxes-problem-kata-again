module.exports = class Printer {
  constructor(cart) {
    this._cart = cart
  }
  get receipt() {
    let productList = ''

    for (let product of this._cart.products) {
      productList += `${product.quantity} ${product.name}: ${product.taxedPrice.toFixed(2)}\n`
    }
    let footer = `Sales Taxes: ${this._cart.totalTaxes.toFixed(2)}\nTotal: ${this._cart.totalPrice.toFixed(2)}`
    return productList + footer

  }
}
