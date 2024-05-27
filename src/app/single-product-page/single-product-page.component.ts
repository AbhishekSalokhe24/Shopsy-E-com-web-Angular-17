import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewProductsComponent } from '../new-products/new-products.component';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [NewProductsComponent,CommonModule],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent {
    
    PId: string | null | undefined; // this will be Product Id from Router Link from card component 
    newdata: any = {};

    constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }

    ngOnInit() {
      this.PId = this.route.snapshot.paramMap.get("id")
      //console.log("product id : ",this.PId);
      this.http.get(`https://fakestoreapi.com/products/${this.PId}`).subscribe((res: any)=>{
      this.newdata = res;
      console.log("Single Products New data:  ");
      console.log(this.newdata);
      })
    }
    

}
