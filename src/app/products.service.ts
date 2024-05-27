import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //constructor(private http: HttpClient) { }

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("https://fakestoreapi.com/products");
  }

  getAllCategory(){
    return this.http.get(constant.API_END_POINT+constant.METHODS.GET_ALL_PRODUCT+'/'+constant.METHODS.GET_ALL_CATEGORY);
  }

  getSingleProduct(){
    
  }

  
}
