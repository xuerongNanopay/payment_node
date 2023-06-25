import { AddressData } from "./basic-type";

export interface IAccount<ID, OWER_ID> {
  type: string;
  id: ID,
  name: string;
  domination: string;
  description?: string;
  isDefault?: boolean;
  owner: OWER_ID;
  lifeCycleState: string;
  transferIn: boolean;
  transferOut: boolean;

  createdAt: Date;
  updatedAt: Date;
  createBy: OWER_ID;
  updateBy: OWER_ID;
}

export interface IBankAcount<ID, OWER_ID> extends IAccount<ID, OWER_ID> {
  accountNumber?: string;
  iban?: string;
  institutionNumber: string;
  branchId: string;
  instruction: string;
  bankAddress: AddressData;
  country: string;
  flagImage: string;
  status: string;
  verificationAttempts: string;
  verifyBy: any; // Plaid or Flinks or void check
}

export interface ICABankAcount<ID, OWER_ID> extends IAccount<ID, OWER_ID> {}
export interface IPKBankAcount<ID, OWER_ID> extends IAccount<ID, OWER_ID> {}