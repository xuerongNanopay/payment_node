import { Schema } from "mongoose";

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

export interface AddressData {
  
}

export enum Currency {
  PKR = "PKR", CAD = "CAD", USD = "USD"
}

export const LegalNameSchema = new Schema<LegalName> (
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    middleName: {
      type: String,
      required: false,
      trime: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    }
  }
)

export const DateDataSchema = new Schema<DateData> (
  {
    year: {
      type: Number,
      required: true,
      trim: true
    },
    month: {
      type: Number,
      required: false,
      trime: true
    },
    day: {
      type: Number,
      required: true,
      trim: true
    }
  }
)