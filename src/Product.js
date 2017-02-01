const CATEGORIES = require('./categories.json')
module.exports = class Product {
  constructor(quantity, name, price, imported) {
    this._quantiry = quantity
    this._name = name
    this._price = price
    this._imported = imported
    this._taxed =  this._isTaxed(name)
  }

  get price(){
    return this._price
  }

  get salesTaxes() {
    const BASIC_TAX_RATE = 10

    if (this._taxed) {
      return this._price * (BASIC_TAX_RATE / 100)
    }

    return 0
  }

  _isTaxed(productName){
    const flat = [].concat.apply([], Object.values(CATEGORIES))
    return !flat.includes(productName)
  }
}