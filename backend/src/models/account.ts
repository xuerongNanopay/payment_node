import { 
  PopulatedDoc, 
  Schema, 
  model, 
  Document, 
  Types 
} from "mongoose";

import { AddressData } from "./basic-type";
import { IUser } from "./user";

export interface IAccount<ID, USER_ID> {
  type: string;
  _id: ID,
  name?: string;
  domination: string;
  description?: string;
  isDefault: boolean;
  owner: PopulatedDoc<IUser&Document>;
  lifeCycleState: string;
  transferIn: boolean;
  transferOut: boolean;

  createdAt: Date;
  updatedAt: Date;
  createBy?: USER_ID;
  updateBy?: USER_ID;
}

export interface IBankAcount<ID, USER_ID> extends IAccount<ID, USER_ID> {
  accountNumber?: string;
  iban?: string;
  institutionNumber: string;
  branchId: string;
  instruction: string;
  bankAddress: AddressData;
  country: string;
  flagImage?: string;
  status: string;
  verificationAttempts?: string;
  verifyBy?: any; // Plaid or Flinks or void check
  //TODO: transaction?
}

export interface ICABankAcount<ID, USER_ID> extends IAccount<ID, USER_ID> {}
export interface IPKBankAcount<ID, USER_ID> extends IAccount<ID, USER_ID> {}

//TODO: pre.save

const BankAccountSchema = new Schema<IBankAcount<Types.ObjectId, Types.ObjectId>>(
  {
    type: {
      type: String,
      immutable: true,
      default: 'CABankAccount'
    },
    name: {
      type: String,
      require: false,
    },
    domination: {
      type: String,
      require: true,
      default: 'CAD'
    },
    description: {
      type: String,
      require: false,
      default: 'CAD'
    },
    owner: {
      type: Types.ObjectId,
      ref: 'User'
    },
    lifeCycleState: {
      type: String,
      require: true,
      default: 'NEW'
    },
    transferIn: {
      type: Boolean,
      require: true,
      default: false
    },
    transferOut: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const User = model<IBankAcount<Types.ObjectId, Types.ObjectId>>('BankAccount', BankAccountSchema, 'bankacounts');