export interface responseApiInterface<T> {
  data: T;
  transactionId: string;
  operationId: string;
  statusCode: number;
  transactionName: string;
}
