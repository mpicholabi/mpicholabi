import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuoterRequestInterface } from '@/app/interfaces/quoter/request';
import { QuoterResponseInterface } from '@/app/interfaces/quoter/response';
import { QuoteInterface } from '@/app/interfaces/quoter/quote';
import { FeeInterface } from '@/app/interfaces/quoter/fee';

@Injectable({
  providedIn: 'root',
})
export class QuoterService {
  constructor(private http: HttpClient) {}

  getQuoter(
    data: QuoterRequestInterface
  ): Observable<QuoterResponseInterface<QuoteInterface<FeeInterface>>> {
    return this.http.post<
      QuoterResponseInterface<QuoteInterface<FeeInterface>>
    >('https://reqres.in/api/posts', data);
  }
}
