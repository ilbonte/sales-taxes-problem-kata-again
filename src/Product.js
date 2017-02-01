const CATEGORIES = require('./categories.json')
module.exports = class Product {
  constructor(quantity, name, price, imported = false) {
    this._quantity = quantity
    this._name = name
    this._price = price
    this._imported = imported
    this._taxed = this._isTaxed(name)
    this.BASIC_TAX_RATE = 10
    this.IMPORT_TAX_RATE = 5
  }

  get taxedPrice() {
    const notTaxedPrice = this._fixDecimals(this._price * this._quantity)
    return this._fixDecimals(notTaxedPrice+this.salesTaxes)
  }

  get quantity(){
    return this._quantity
  }

  get name(){
    return this._name
  }

  get salesTaxes() {

    let totalTaxes = 0
    if (this._taxed) {
      totalTaxes += this._calculateTaxes(this._price, this.BASIC_TAX_RATE)
    }

    if (this._imported) {
      totalTaxes += this._calculateTaxes(this._price, this.IMPORT_TAX_RATE)
    }

    return this._fixDecimals(totalTaxes*this._quantity)
  }

  _calculateTaxes(price, rate) {
    return this._roundUp((price * rate) / 100)
  };

  _isTaxed(productName) {
    const flat = [].concat.apply([], Object.values(CATEGORIES))
    return !flat.includes(productName)
  }

  _roundUp(valueToRound) {
     let rounded = Math.ceil(valueToRound * 20) / 20
     return this._fixDecimals(rounded)
  }
  _fixDecimals(floatValue){
    //workaround for "JS broken math": http://stackoverflow.com/questions/588004/is-floating-point-math-broken 
    return  parseFloat(floatValue.toFixed(2))
  }
}