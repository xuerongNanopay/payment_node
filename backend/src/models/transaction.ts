import { 
  PopulatedDoc, 
  Schema, 
  model, 
  Document, 
  Types 
} from "mongoose";


export interface IFee {
  name: string;
  amount: number;
  currency: string;
  description?: string;
  notes?: string;
}

export interface ITransfer<F, T> {
  _id: string; // using transactions._id.toString + _ + autoIncrement
  type: string;
  from: F,
  to: T,
  fromAmount: number;
  toAmount: number;
  fromCurrency: string;
  toCurrency: string;
  status: string;
  description?: string;
  notes?: string;
  fees: IFee[] | null

  createdAt: Date;
  updatedAt: Date;
}

export interface ITransaction<S_ID, D_ID> {
  _id: Types.ObjectId;
  type: string;
  source: S_ID;
  destination: D_ID;
  sourceAmount: number;
  destinationAmount: number;
  sourceCurrency: string;
  destinationCurrency: string;
  status: string;
  transfers: ITransfer<any, any>[];
  totalExpense: number;
  totalFee: number; // grab data from transfer.

  createdAt: Date;
  updatedAt: Date;
}