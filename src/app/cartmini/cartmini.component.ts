import { Component, OnInit } from '@angular/core';
import { itemClass } from '../itemClass';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-cartmini',
  templateUrl: './cartmini.component.html',
  styleUrls: ['./cartmini.component.css']
})
export class CartminiComponent implements OnInit {

  cartminiProducts: itemClass[];
  cartminiTotal: number;

  constructor( private shopS:ShoppingService ) { }

  ngOnInit() {
    this.cartminiProducts = this.shopS.cart;
  }

}
