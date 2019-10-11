import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { allItems } from '../allItems';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  products = allItems;
  product;

  constructor(private route: ActivatedRoute,
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = this.products[+params.get('productId')];
    })
  }
  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.shoppingService.putInCart(product);
  }
}
