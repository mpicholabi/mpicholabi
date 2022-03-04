import { ResponseApiArrayInterface } from '../../interfaces/response-api';
import { ProductInterface } from '../../interfaces/Product/product';
import { ProductDetailInterface } from '../../interfaces/Product/product-detail';
import { ProductPoliciesInterface } from '@/app/interfaces/Product/product-policies';
import { ProductRequirementsInterface } from '@/app/interfaces/Product/prodcut-requirements';

export const dummyProduct: ResponseApiArrayInterface<
  ProductInterface<
    ProductDetailInterface,
    ProductPoliciesInterface,
    ProductRequirementsInterface
  >
> = {
  data: [
    {
      id: 1,
      code: '222-002',
      name: 'Bi Fácil Sin Convenio',
      description: 'Bi Fácil Sin Convenio',
      minLoanAmount: 3000,
      maxLoanAmount: 50000,
      minLoanInterest: 19,
      maxLoanInterest: 19.6,
      active: true,
      startDate: '24/02/2022',
      endDate: '',
      details: [
        {
          id: 1,
          name: 'Recibo',
          description:
            'Recibo de servicios (agua, luz o teléfono) menor a 3 meses',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-utility-bill.svg',
          active: true,
        },
        {
          id: 2,
          name: 'Interes',
          description: 'Tasa de interés del 19% al 19.6% ',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-rate.svg',
          active: true,
        },
        {
          id: 3,
          name: 'Plazos',
          description: 'Plazos de 6 hasta 60 meses',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-watch.svg',
          active: true,
        },
        {
          id: 4,
          name: 'Fiador',
          description: 'Sin Fiador',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-group.svg',
          active: true,
        },
        {
          id: 5,
          name: 'Abono',
          description: 'Abono a capital sin penalización',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-money.svg',
          active: true,
        },
      ],
      policies: [
        {
          id: 2,
          name: 'Edad',
          description: 'Aplica desde los 20 hasta los 65 años de edad',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-age-range.svg',
          active: true,
        },
        {
          id: 3,
          name: 'Laboral',
          description:
            'Estabilidad laboral de mínimo 1 año en una misma empresa',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-job-stability.svg',
          active: true,
        },
        {
          id: 4,
          name: 'Endeudamiento',
          description: 'Endeudamiento permitido del 35% de tus ingresos',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-permitted-borrowing.svg',
          active: true,
        },
      ],
      requirements: [
        {
          id: 1,
          name: 'Dpi',
          description:
            'Fotografía DPI de ambos lados (El DPI debe estar vigente y en buen estado)',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-identifier.svg',
          active: true,
        },
        {
          id: 2,
          name: 'OtroDocumento',
          description:
            'Otro documento de identificación (Ejemplo: licencia de conducir)',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-second-identifier.svg',
          active: true,
        },
        {
          id: 3,
          name: 'Recibo',
          description:
            'Recibo de servicios (agua, luz o teléfono) menor a 3 meses',
          imageUrl:
            'https://storage-consumogt-dev.s3.amazonaws.com/BackEnd/Icons/bi-utility-bill.svg',
          active: true,
        },
      ],
    },
  ],
  transactionId: '8bf401d6-2761-4e16-a172-bfc61ff46dea',
  operationId: '1b82d01f-b124-49f3-aaf3-60002f9d5c63',
  statusCode: 200,
  transactionName: 'Method: Product - Path: Get',
};
