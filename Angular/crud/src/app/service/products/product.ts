import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../interfaces/product';


@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Products[]> {
    const url = "http://localhost:3000/product";
    return this.http.get<Products[]>(url)
  }
  saveProduct(product:Products): Observable<Products> {
    const url = "http://localhost:3000/product";
    return this.http.post<Products>(url,product)
  }
}
