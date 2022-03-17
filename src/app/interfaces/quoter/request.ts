export interface QuoterRequestInterface {
  quotationProductId: number;
  quotationTerm: number;
  quotationAmount: number;
}

export interface QuotationRequestInterface<Q> {
  to: Array<string>;
  quotationRequest: Q;
}
