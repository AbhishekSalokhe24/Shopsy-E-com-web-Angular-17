import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { ImgCarouselComponent } from "../img-carousel/img-carousel.component";

@Component({
    selector: 'app-carousel',
    standalone: true,
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css',
    imports: [CommonModule, ImgCarouselComponent]
})
export class CarouselComponent implements OnInit{

  products: any[] | undefined;
  constructor(private productSev:  ProductsService){
    
  }
  ngOnInit(): void {
   this.getProducts();
  }

  getProducts(): void {
    this.productSev.getProducts().subscribe((res: any) => {
      this.products = res;
      //console.log("Data From App component:");
      //console.log(this.products);
      this.products?.forEach((item) =>{
      // console.log("Title: ", item.title);
        // console.log("img: ",item.image);
      })
    });
}
}
