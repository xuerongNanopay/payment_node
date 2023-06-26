import { 
  PopulatedDoc, 
  Schema, 
  model, 
  Document, 
  Types 
} from "mongoose";

import { AddressData } from "./basic-type";
import { IUser } from "./user";

export interface IAccount {
  type: string;
  _id: Types.ObjectId;
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
  createBy?: Types.ObjectId;
  updateBy?: Types.ObjectId;
}

export interface IBankAccount extends IAccount {
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

//TODO: pre.save

const BankAccountSchema = new Schema<IBankAccount>(
  {
    type: {
      type: String,
      immutable: true,
      enum: ['CABankAccount', 'PKBankAccount', 'USBankAccount'],
      required: true
    },
    name: {
      type: String,
      required: false,
    },
    domination: {
      type: String,
      required: true,
      default: 'CAD'
    },
    description: {
      type: String,
      required: false,
      default: 'CAD'
    },
    owner: {
      type: Types.ObjectId,
      ref: 'User',
      required: true
    },
    country: {
      type: String,
      required: true
    },
    lifeCycleState: {
      type: String,
      required: true,
      default: 'NEW'
    },
    transferIn: {
      type: Boolean,
      required: true,
      default: false
    },
    transferOut: {
      type: Boolean,
      required: true,
      default: false
    },
    accountNumber: String,
    iban: String,
    institutionNumber: String,
    branchId: String
  },
  {
    timestamps: true
  }
)


const BankAccount = model<IBankAccount>('BankAccount', BankAccountSchema, 'bankacounts');
export default BankAccount;