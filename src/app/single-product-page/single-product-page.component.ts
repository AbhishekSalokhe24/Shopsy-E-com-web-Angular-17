import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent {

    constructor(private router: Router) {}
    ngOnInit(): void {
        this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            window.scrollTo(0, 0); // Scroll to the top of the page
          }
        });
      }
}
