module.exports = class Product{
  constructor(quantity, name, price, taxed, imported){
    this._quantiry = quantity
    this._name = name
    this._price = price
    this._taxed = taxed
    this._imported = imported
  }
}