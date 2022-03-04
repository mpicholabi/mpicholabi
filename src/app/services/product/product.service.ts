import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '@/app/interfaces/Product/product';
import { ProductDetailInterface } from '@/app/interfaces/Product/product-detail';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(
    IsDetailed = false
  ): Observable<ProductInterface<ProductDetailInterface>> {
    return this.http.get<ProductInterface<ProductDetailInterface>>(
      'https://reqres.in/api/posts',
      {
        params: {
          IsDetailed: IsDetailed,
        },
      }
    );
  }
}
