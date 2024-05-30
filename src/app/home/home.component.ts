import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CarouselComponent } from "../carousel/carousel.component";
import { FiltersComponent } from "../filters/filters.component";
import { CatogoryBtnsComponent } from "../catogory-btns/catogory-btns.component";
import { CardComponent } from "../card/card.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CarouselComponent, FiltersComponent, CatogoryBtnsComponent, CardComponent, NavbarComponent, FooterComponent, NgxSkeletonLoaderModule,CommonModule]
})
export class HomeComponent implements OnInit {
  products: any[] | undefined;
  isLoading = true;

  constructor(private productSev: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  updateProducts(updatedProducts: any[]) {
    this.products = updatedProducts;
  }

  productsByPrice(FpProducts: any[]) {
    this.products = FpProducts;
  }

  getProducts(): void {
    this.isLoading = true;  // Set loading to true before the request
    this.productSev.getProducts().subscribe((res: any) => {
      this.products = res;
      this.isLoading = false;  // Set loading to false after the request completes
    });
  }
}
