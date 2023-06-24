import { DateData, LegalName } from "./basic-type";

interface BaseUser {
  type: string;
  _id: number;
  userName: string;
  legalName: LegalName;
  birthDay?: DateData;
  isOnboard: boolean;
  loginEnable: boolean;
  lastLogin: Date;
}