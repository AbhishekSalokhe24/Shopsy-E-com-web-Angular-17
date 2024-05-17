import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-catogory-btns',
    standalone: true,
    templateUrl: './catogory-btns.component.html',
    styleUrls: ['./catogory-btns.component.css'],
    imports: [CommonModule]
})
export class CatogoryBtnsComponent implements OnInit {
  categories: any = [];
  newdata: any = [];

  constructor(private productSev: ProductsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.productSev.getAllCategory().subscribe((res: any) => {
      this.categories = res;
    });
  }

  someData(categ: string) {
    this.http.get(`https://fakestoreapi.com/products/category/${categ}`).subscribe((res: any) => {
      this.newdata = res;
      // Emit the data once the HTTP request is complete
      this.updateProducts.emit(this.newdata);
    });
  }

  @Output() updateProducts = new EventEmitter<any[]>();

  btnCliked(categ: string) {
    this.someData(categ);
  }
}
