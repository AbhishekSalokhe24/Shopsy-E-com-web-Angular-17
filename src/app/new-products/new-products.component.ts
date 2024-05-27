import { Component, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css'
})
export class NewProductsComponent {
    
  @Input() newCat: string = "";

  categoryProducts: any = [];

  constructor(private http: HttpClient){
   
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newCat'] && changes['newCat'].currentValue) {
      this.fetchProductsByCategory(changes['newCat'].currentValue);
    }
  }
  
  fetchProductsByCategory(category: string) {
    this.http.get(`https://fakestoreapi.com/products/category/${category}`).subscribe((res: any)=>{
      this.categoryProducts = res;
      console.log(this.categoryProducts)
    })
  }



}
