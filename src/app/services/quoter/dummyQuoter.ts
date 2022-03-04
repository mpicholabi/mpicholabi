import { FeeInterface } from '@/app/interfaces/quoter/fee';
import { QuoteInterface } from '@/app/interfaces/quoter/quote';
import { QuoterResponseInterface } from '@/app/interfaces/quoter/response';
import { ResponseApiInterface } from '@/app/interfaces/response-api';

export const dummyQuoter: ResponseApiInterface<
  QuoterResponseInterface<QuoteInterface<FeeInterface>>
> = {
  data: {
    quotationBalance: {
      quotationProductId: 1,
      quotationType: 0,
      quotationDetails: [
        {
          quotationNumber: 1,
          quotationPaymentDate: '01/1/2022',
          quotationCapital: 644.68,
          quotationInterestAccrualAmount: 3427.32,
          quotationCapitalBalance: 6300.29,
        },
        {
          quotationNumber: 2,
          quotationPaymentDate: '01/2/2022',
          quotationCapital: 2595.7,
          quotationInterestAccrualAmount: 6317.84,
          quotationCapitalBalance: 4148.25,
        },
      ],
    },
    quotationLeveled: {
      quotationProductId: 1,
      quotationType: 1,
      quotationDetails: [
        {
          quotationNumber: 1,
          quotationPaymentDate: '01/1/2022',
          quotationCapital: 2488.56,
          quotationInterestAccrualAmount: 2514.75,
          quotationCapitalBalance: 201.55,
        },
        {
          quotationNumber: 2,
          quotationPaymentDate: '01/2/2022',
          quotationCapital: 3338.46,
          quotationInterestAccrualAmount: 5186.63,
          quotationCapitalBalance: 13.29,
        },
      ],
    },
  },
  transactionId: 'd5b1a0e2-8c3e-422c-be1a-36a566e369c4',
  operationId: '07c7fd8d-4011-4f31-a558-f101b5edaf9f',
  statusCode: 200,
  transactionName: 'Method: Quote - Path: Post',
};
