import { Currency } from "./basic-type";

interface BaseAccount {
  type: string;
  _id: number;
  //_id: Types.ObjectId
  name: string;
  denomination: Currency;
  description?: string;
  summary?: string;
  isDefault: boolean;
  createAt: Date;
  updateAt: Date;
  createBy: number;
  updateBy: number;
  //createBy: Types.ObjectId
  lifeCycleState: string;
  transferIn: boolean;
  transferOut: boolean;
}