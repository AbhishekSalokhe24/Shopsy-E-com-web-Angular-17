import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NewProductsComponent } from '../new-products/new-products.component';


@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [NewProductsComponent],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent {

    constructor(private router: Router) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }

}
