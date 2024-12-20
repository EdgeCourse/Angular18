import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product, Variant, products} from './product'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  products = products;

  isLoggedIn = true;
  username = 'John Smith';
  topics = ['Components', 'Directives', 'Pipes', 'Routes', 'Services'];
  color = 'green';

  logout() {
    this.isLoggedIn = false;
  }

  

  selectedView = 'view1';

  selectView(view: string) {
    this.selectedView = view;
  }

/* 
Performance Optimization: By using trackBy for both levels of the nested structure, Angular can efficiently update the DOM, especially when the list of products or variants changes.

*/


  trackByProduct(index: number, product: Product): number {
    return product.id;
  }
  
  trackByVariant(index: number, variant: Variant): number {
    return variant.id;
  }



  
}

