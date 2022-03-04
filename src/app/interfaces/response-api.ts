export interface ResponseApiInterface<T> {
  data: T;
  transactionId: string;
  operationId: string;
  statusCode: number;
  transactionName: string;
}
export interface ResponseApiArrayInterface<T> {
  data: Array<T>;
  transactionId: string;
  operationId: string;
  statusCode: number;
  transactionName: string;
}
