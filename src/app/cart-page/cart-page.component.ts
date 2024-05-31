import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartCardComponent } from "../cart-card/cart-card.component";

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [NavbarComponent, FooterComponent, CartCardComponent]
})
export class CartPageComponent {
    constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
}
