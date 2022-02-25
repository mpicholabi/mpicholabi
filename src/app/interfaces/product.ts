export interface ProductInterface<T>{
  id?: number,
  code: string,
  name: string,
  description: string,
  minLoanAmount: number,
  maxLoanAmount: number,
  minLoanInterest: number,
  maxLoanInterest: number,
  active: boolean,
  startDate: string,
  endDate: string,
  details: T
}
