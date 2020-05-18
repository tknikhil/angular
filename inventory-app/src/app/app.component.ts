import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Product[];

  constructor(){
    this.products=[
      new Product('MYSHOES','Black running shoes','../assets/images/products/black-shoes.jpg',['Men','Shoes','Running Shoes'],109.99),
      new Product('NEATOJACKET','Blue Jacket','../assets/images/products/blue-jacket.jpg',['Women','Apparel','Jacket & Vest'],239.99),
      new Product('NICEHAT','A nice black hat','../assets/images/products/black-hat.jpg',['Men','Accessories','Hat'],29.99),
    ];
  }

  productWasSelected(product:Product):void{
    console.log('Product was Clicked:',product);
  }
}
