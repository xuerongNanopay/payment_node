import { AddressData, LegalName } from "./basic-type";

enum RemittanceContactType {
  CASH="Cash",
  PARTY="PARTY",
  ACCOUNT="ACCOUNT"
}

export interface IContact {
  type: string;
  _id: number;
  legalName: LegalName;
  address: AddressData;
  owner: any;
  relationship: string;
  phoneNumber?: string; 
}

export interface IPKCashContact extends IContact {
  remittanceMethod: RemittanceContactType;
  bankName: string;
  iban: string;
  accountNumber: string;
}