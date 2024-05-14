import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catogory-btns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catogory-btns.component.html',
  styleUrl: './catogory-btns.component.css'
})
export class CatogoryBtnsComponent implements OnInit{


  catBtnCliked() {
  
  }



  categories: any = [];
  newdata: any = [];
  //products: any[] | undefined;

  
  constructor(private productSev:  ProductsService,private http: HttpClient){
    
  }
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.productSev.getAllCategory().subscribe((res:any)=>{
      // console.log("From Btns component");
      this.categories = res;
      // console.log("displaying all categories.....");
      // console.log(this.categories);
    })
  }
  someData(categ: string) {
    this.http.get(`https://fakestoreapi.com/products/category/${categ}`).subscribe((res: any) => {
      this.newdata = res;
    })
  }
  // btnCliked(categ: string){
  //   this.someData(categ);
  //   console.log("NEW DATA FROM BTNS...for = ",categ);
  //   console.log(this.newdata);
   
  // }
  @Output() updateProducts = new EventEmitter<any[]>();
  btnCliked(categ: string) {
    // Logic to update products array
    this.someData(categ);
    // console.log("NEW DATA FROM BTNS...for = ",categ);
    // console.log(this.newdata)
    let updatedProducts: any[] | undefined = []; // Updated data
    updatedProducts = this.newdata;
    this.updateProducts.emit(updatedProducts); 
  } 
  
}
