import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { CardComponent } from '../card/card.component';
import { CatogoryBtnsComponent } from "../catogory-btns/catogory-btns.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { FiltersComponent } from "../filters/filters.component";
 
@Component({
    selector: 'app-catogory-cards',
    standalone: true,
    templateUrl: './catogory-cards.component.html',
    styleUrl: './catogory-cards.component.css',
    imports: [CommonModule, CardComponent, CatogoryBtnsComponent, CarouselComponent, FiltersComponent]
})
export class CatogoryCardsComponent implements OnInit{


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
    console.log("Updated Prod by price: ",FpProducts)
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