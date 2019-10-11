import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: Array<any> = [];

  constructor() { 
     
    this.items = [
      {name:'assets/slike/sat.jpg',
       title:'Forerunner® 735XT'},
      {name:'assets/slike/ceonalampa.jpg',
       title:'ASTRO175'},
      {name: 'assets/slike/backpack.jpg',
       title:'TRAIL BLITZ 12 - BACKPACK'},
      {name: 'assets/slike/cipele.jpg',
       title:'Salewa Wild Hiker'},
      {name: 'assets/slike/jakna.jpg',
       title:'HELIO ACTIVE SHELL'},
      {name: 'assets/slike/majica.jpg',
       title:'HELIO ACTIVE SHELL'},
      {name: 'assets/slike/pants.jpg',
       title:'Salomon X Ultra'},
      
    ];

  }

  ngOnInit() {
  }

}
