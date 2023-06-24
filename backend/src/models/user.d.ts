import { DateData, LegalName } from "./basic-type";

interface BaseUser {
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