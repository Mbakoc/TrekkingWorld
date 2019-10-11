import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { allItems } from '../allItems';
import { itemClass } from '../itemClass';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private products = allItems;

  constructor( private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

}
