module.exports = class Cart{
  constructor(){
    this._products= []
  }

  get products(){
    return this._products
  }

  get totalPrice(){
    return this._products.reduce((total, product)=>{
      return total += product.price
    },0)
  }

  addProduct(product){
    this._products.push(product)
  }
}