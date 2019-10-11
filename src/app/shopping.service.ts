import { Injectable } from '@angular/core';
import { allItems } from './allItems';
import { itemClass } from './itemClass';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  
  items = allItems;
  cart: itemClass[] = [];

  constructor() { }

  putInCart(product){
    this.cart.push(product);
  }
  takeProducts(){
    return this.cart;
  }
  clearcart(): itemClass[]{
    this.cart = [];
    return this.cart;
  }
  total(){
    let sum = 0;
    for(let product of this.cart){
      sum += product.price;
    }
    return sum;
  }
  productTotal(){
    let productSum = 0;
    for( let product of this.cart){
      if(product.id == product.id){
        productSum += product.price;
      }
    }
    return productSum;
  }
  removeSingleItem(itemIndex: number){
    this.cart.splice(itemIndex, 1);
    this.total();
  }
  itemsNum(prID){
    let suma = 0;
    for(let i=0; i<this.cart.length; i++ ){
      if(this.cart[i].id == prID){
        suma++;
      }
    }
    return suma;
  }
} 