import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //constructor(private http: HttpClient) { }

  private apiUrl = 'https://fakestoreapi.com';
  private authSecretKey = 'Bearer Token';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem(this.authSecretKey);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    });
  }


  getProducts(){
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/products`, { headers });
  }

  getAllCategory(){
    return this.http.get(constant.API_END_POINT+constant.METHODS.GET_ALL_PRODUCT+'/'+constant.METHODS.GET_ALL_CATEGORY);
  }

  getSingleProduct(){
    
  }

  
}
