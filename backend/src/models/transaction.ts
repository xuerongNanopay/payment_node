import { 
  PopulatedDoc, 
  Schema, 
  model, 
  Document, 
  Types 
} from "mongoose";
import { IUser } from "./user";


export interface IFee {
  name: string;
  amount: number;
  currency: string;
  description?: string;
  notes?: string;
}

export interface ITransfer<F, T> {
  _id: string; // using transactions._id.toString + _ + autoIncrement & also can support order.
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
  fees: IFee[] | null,

  owner: PopulatedDoc<IUser&Document>;
  belong: PopulatedDoc<ITransaction&Document>;

  createdAt: Date;
  updatedAt: Date;
}

//handler to handler transaction.
export interface ITransaction {
  _id: Types.ObjectId;
  type: string;
  source: Types.ObjectId;
  destination: Types.ObjectId;
  sourceAmount: number;
  destinationAmount: number;
  sourceCurrency: string;
  destinationCurrency: string;
  status: string;
  internalStage: string;
  // Need to difine stage train.
  transferStage: {};
  reverseTransferStage: {};
  feeDetails: any[]
  totalExpense: number;
  totalFee: number; // grab data from transfer.
  owner: PopulatedDoc<IUser&Document>;

  createdAt: Date;
  updatedAt: Date;
}

export class PKTransactionProcessor {
  static initTransaction() {

  }
  static onTransferUpdate(transferId: number) {

  }
}