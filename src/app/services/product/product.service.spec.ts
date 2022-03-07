import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { dummyProduct } from './dummyProduct';

const IsDetailed: boolean = true;

describe('ProductService', () => {
  let service: ProductService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ProductService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts return product', () => {
    const product = service.getProducts(IsDetailed);
    expect(product).not.toBeNull();
  });

  it('Should call getProducts and return an object of posts', () => {
    service.getProducts().subscribe((res) => {
      expect(res).toEqual(dummyProduct);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: 'https://reqres.in/api/posts?IsDetailed=false',
    });

    req.flush(dummyProduct);
  });
});
