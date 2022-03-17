import { QuotationResponseInterface } from '@/app/interfaces/quoter/response';
import { ResponseApiInterface } from '@/app/interfaces/response-api';

export const dummyQuotation: ResponseApiInterface<QuotationResponseInterface> =
  {
    data: {
      message: 'Correo enviado',
    },
    transactionId: 'd5b1a0e2-8c3e-422c-be1a-36a566e369c4',
    operationId: '07c7fd8d-4011-4f31-a558-f101b5edaf9f',
    statusCode: 200,
    transactionName: 'Method: Quote - Path: Post',
  };
