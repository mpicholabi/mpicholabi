import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApiInterface } from '@/app/interfaces/response-api';
import { QuoterRequestInterface } from '@/app/interfaces/quoter/request';
import { QuotationRequestInterface } from '@/app/interfaces/quoter/request';
import { QuoteInterface } from '@/app/interfaces/quoter/quote';
import { FeeInterface } from '@/app/interfaces/quoter/fee';
import {
  QuotationResponseInterface,
  QuoterResponseInterface,
} from '@/app/interfaces/quoter/response';
import { QuotationtInterface } from '@/app/interfaces/quoter/quotation';

@Injectable({
  providedIn: 'root',
})
export class QuoterService {
  constructor(private http: HttpClient) {}

  getQuoter(
    data: QuoterRequestInterface
  ): Observable<
    ResponseApiInterface<QuoterResponseInterface<QuoteInterface<FeeInterface>>>
  > {
    return this.http.post<
      ResponseApiInterface<
        QuoterResponseInterface<QuoteInterface<FeeInterface>>
      >
    >('https://reqres.in/api/posts', data);
  }

  sendQuoterEmail(
    data: QuotationRequestInterface<QuotationtInterface>
  ): Observable<ResponseApiInterface<QuotationResponseInterface>> {
    return this.http.post<ResponseApiInterface<QuotationResponseInterface>>(
      'https://reqres.in/api/posts',
      data
    );
  }
}
