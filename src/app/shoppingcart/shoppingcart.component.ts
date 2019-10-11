import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import {FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { itemClass } from '../itemClass';



@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cart:itemClass[];
  suma: number = 0;
  cene =[];
  signupForm: FormGroup;

  constructor(private shoppingservice: ShoppingService) {
    this.cart = this.shoppingservice.takeProducts();
   }

  ngOnInit(){
    this.signupForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(null, Validators.required),
      'textarea': new FormControl(null,Validators.required)
    });
  }
  onSend(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  emtyCart(){
    this.cart = this.shoppingservice.clearcart();
  }
  numberOfItems(){
    return this.cart.length;
  }
  totalPrice(){
    return this.shoppingservice.total();
  }
  removeItem(itemIndex:number){
    this.shoppingservice.removeSingleItem(itemIndex);
  }
  numberSItem(itemIndex:number){
    return this.shoppingservice.itemsNum(itemIndex);
  }
}
