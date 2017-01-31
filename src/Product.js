module.exports = class Product {
  constructor(quantity, name, price, taxed, imported) {
    this._quantiry = quantity
    this._name = name
    this._price = price
    this._taxed = taxed
    this._imported = imported
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
}