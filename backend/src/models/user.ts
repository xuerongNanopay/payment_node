import { Schema } from "mongoose";

import { DateData, DateDataSchema, LegalName, LegalNameSchema } from "./basic-type";

export default interface BaseUser {
  type: string;
  _id: number;
  userName: string;
  email: string;
  password: string;
  legalName: LegalName;
  birthDay?: DateData;
  emailVerified: boolean;
  isOnboard: boolean;
  loginEnable: boolean;
  lastLogin: Date;
  address: string;
  phoneNumber: string;
  avatarUrl?: string;

  createAt: Date;
  updateAt: Date;
  createBy: number;
  updateBy: number;
}

const baseUserSchema = new Schema<BaseUser>(
  {
    type: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    legalName: {
      type: LegalNameSchema,
      require: true
    },
    birthDay: {
      type: DateDataSchema,
      require: true
    },
    emailVerified: {
      type: Boolean,
      default: false
    }
  }
);