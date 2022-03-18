import { TestBed } from '@angular/core/testing';
import { QuoterService } from './quoter.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { dummyQuoter } from './dummyQuoter';
import { dummyQuotation } from './dummyQuotation';
import { QuotationRequestInterface } from '@/app/interfaces/quoter/request';
import { QuotationtInterface } from '@/app/interfaces/quoter/quotation';

const data = {
  quotationProductId: 1,
  quotationTerm: 12,
  quotationAmount: 1259.51,
};

const dataSendQuoter: QuotationRequestInterface<QuotationtInterface> = {
  to: ['test@test.com', 'test2@test.com'],
  quotationRequest: {
    quotationProductId: 1,
    quotationTerm: 60,
    quotationAmount: 50000,
    quotationType: 1,
  },
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

  it('Should call getQuoter and return an object of quote', () => {
    service.getQuoter(data).subscribe((res) => {
      expect(res).toEqual(dummyQuoter);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: 'https://reqres.in/api/posts',
    });

    req.flush(dummyQuoter);
  });

  it('Should call sendQuoterEmail and return an message', () => {
    service.sendQuoterEmail(dataSendQuoter).subscribe((res) => {
      expect(res).toEqual(dummyQuotation);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: 'https://reqres.in/api/posts',
    });

    req.flush(dummyQuotation);
  });
});
