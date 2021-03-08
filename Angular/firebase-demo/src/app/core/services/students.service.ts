import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.put(this.url, products, { headers: this.headers });
  }

  // fetch product
  fetchProducts() {
    return this.http.get(this.url);
  }

  //delete product
  deleteProduct() {
    return this.http.delete(this.url);
  }  

}
