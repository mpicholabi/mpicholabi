export interface ProductInterface<T, Q, R> {
  id?: number;
  code: string;
  name: string;
  description: string;
  minLoanAmount: number;
  maxLoanAmount: number;
  minLoanInterest: number;
  maxLoanInterest: number;
  active: boolean;
  startDate: string;
  endDate: string;
  details: Array<T>;
  policies: Array<Q>;
  requirements: Array<R>;
}
