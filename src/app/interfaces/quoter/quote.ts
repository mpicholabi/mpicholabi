export interface QuoteInterface<T> {
  quotationProductId: number;
  quotationType: number;
  quotationDetails: Array<T>;
}
