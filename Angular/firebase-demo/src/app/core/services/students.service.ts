import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  // firebase data url
  url = 'https://fir-demo-99a02-default-rtdb.firebaseio.com/products.json';

  private headers = new HttpHeaders({ 'content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // save product
  saveProducts(products: any[]) {
    try {
      return this.http.put(this.url, products, { headers: this.headers });
    }
    catch(error) {
      return Observable.throw(error);
    }
  }

  // fetch product
  fetchProducts() {
    try {
      return this.http.get(this.url);
    } 
    catch (error) {
      return Observable.throw(error);
    }
  }

  //delete product
  deleteProduct() {
    try {
      return this.http.delete(this.url);
    } 
    catch (error) {
      return Observable.throw(error);
    }
  }  

}
