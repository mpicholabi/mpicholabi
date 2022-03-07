import { TestBed } from '@angular/core/testing';
import { QuoterService } from './quoter.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { dummyQuoter } from './dummyQuoter';
import { QuoterRequestInterface } from '@/app/interfaces/quoter/request';

const data = {
  quotationProductId: 1,
  quotationTerms: 12,
  quotationAmount: 1259.51,
};

describe('QuoterService', () => {
  let service: QuoterService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(QuoterService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getQuoter return quoter', () => {
    const product = service.getQuoter(data);
    expect(product).not.toBeNull();
  });

  it('Should call getProducts and return an object of posts', () => {
    service.getQuoter(data).subscribe((res) => {
      expect(res).toEqual(dummyQuoter);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: 'https://reqres.in/api/posts',
    });

    req.flush(dummyQuoter);
  });
});
