import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CarouselComponent } from "../carousel/carousel.component";
import { FiltersComponent } from "../filters/filters.component";
import { CatogoryBtnsComponent } from "../catogory-btns/catogory-btns.component";
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent, FiltersComponent, CatogoryBtnsComponent, CardComponent]
})
export class HomeComponent {
  products: any[] | undefined;
    newdata: any[]|undefined;
    newPrice: string | undefined;
  
    ngOnInit(): void {
      this.getProducts();
    } 
     
  
   
    constructor(private productSev:  ProductsService){
      
    }
     // This is Passed By-- Btns Component
    updateProducts(updatedProducts: any[]) {
      this.products = updatedProducts;
      
    }
  
    // This is Passed By-- Filter Component 
    productsByPrice(FpProducts: any[]) {
      //console.log("Updated Prod by price: ",FpProducts)
      this.products = FpProducts;
    }
  
    
  
   
  
    getProducts(): void {
      this.productSev.getProducts().subscribe((res: any) => {
        this.products = res;
        //console.log("Data From App component:");
        //console.log(this.products);
        this.products?.forEach((item) =>{
        // console.log("Title: ", item.title);
  
        })
      });
  
    }
}
