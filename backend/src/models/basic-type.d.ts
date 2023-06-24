export interface LegalName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface DateData {
  year: number;
  month: number;
  day: number;
}

export enum Currency {
  PKR = "PKR", CAD = "CAD", USD = "USD"
}