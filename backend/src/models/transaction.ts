export interface IFee {
  name: string;
  amount: number;
  currency: string;
  description?: string;
}

export interface ITransfer<F, T> {
  type: string;
  from: F,
  to: T,
  fromAmount: number;
  toAmount: number;
  fromCurrency: string;
  toCurrency: string;
  fees: IFee[] | null
}

export interface ITransaction<S_ID, D_ID> {
  type: string;
  source: S_ID;
  destination: D_ID;
  sourceAmount: number;
  destinationAmount: number;
  sourceCurrency: string;
  destinationCurrency: string;
  transfers: ITransfer<any, any>[];
  totalExpense: number;
  totalFee: number; // grab data from transfer.
}