export type ReceiptData = {
  id: string;
  productName: string;
  price: string;
};

export const sampleReceiptData: ReceiptData[] = [
  {
    id: 'FC',
    productName: 'SLATE MOCHA LATTE',
    price: '2.99 F',
  },
  {
    id: 'JS',
    productName: 'GR CHKEN',
    price: '8.99 F',
  },
  {
    id: 'BC',
    productName: 'APPLS',
    price: '2.59 B',
  },
  {
    id: 'FC',
    productName: 'ORNG',
    price: '3.59 B',
  },
  {
    id: 'LRG',
    productName: 'EGGS',
    price: '3.99 F',
  },
];
