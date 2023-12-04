import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse[]> {
    return this.http
      .get<{ data: ProductResponse[] }>('https://dummyjson.com/products')
      .pipe(map((response) => response.data));
  }

  saveCart(products: Product[]): Observable<any> {
    return this.http.post<any>('https://dummyjson.com/save-cart', { products });
  }
}
