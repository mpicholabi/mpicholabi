export interface QuoteInterface<T> {
  quotationProductId: number;
  quotationType: number;
  QuotationMonthlyPayment: number;
  quotationDetails: Array<T>;
}
