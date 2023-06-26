import { AddressData } from "./basic-type";

export interface IAccount<ID, USER_ID> {
  type: string;
  id: ID,
  name: string;
  domination: string;
  description?: string;
  isDefault?: boolean;
  owner: USER_ID;
  lifeCycleState: string;
  transferIn: boolean;
  transferOut: boolean;

  createdAt: Date;
  updatedAt: Date;
  createBy: USER_ID;
  updateBy: USER_ID;
}

export interface IBankAcount<ID, USER_ID> extends IAccount<ID, USER_ID> {
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
  //TODO: transaction?
}

export interface ICABankAcount<ID, USER_ID> extends IAccount<ID, USER_ID> {}
export interface IPKBankAcount<ID, USER_ID> extends IAccount<ID, USER_ID> {}