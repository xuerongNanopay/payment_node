import { Schema, model } from "mongoose";

import { 
  AddressData, 
  AddressDataSchema, 
  DateData, 
  DateDataSchema, 
  DocumentResult, 
  LegalName, 
  LegalNameSchema 
} from "./basic-type";

type ROLES = "USER" | "BACK_OP" | "ADMIN";
const ROLES_MONGOOSE_ENUM = ["USER", "BACK_OP", "ADMIN"];

export interface IUser extends DocumentResult<IUser> {
  // type: string;
  _id: number;
  userName: string;
  email: string;
  password: string;
  legalName: LegalName;
  birthDay?: DateData;
  emailVerified: boolean;
  isOnboard: boolean;
  loginEnable?: boolean;
  lastLogin?: Date;
  address: AddressData;
  phoneNumber: string;
  role: ROLES;
  avatarUrl?: string;
  //TODO: change with correct type.
  accounts: Schema.Types.ObjectId[];
  contacts: Schema.Types.ObjectId[];

  createdAt: Date;
  updatedAt: Date;
  // createBy: number;
  // updateBy: number;
}

const UserSchema = new Schema<IUser>(
  {
    // type: {
    //   type: String,
    //   required: true
    // },
    userName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    legalName: {
      firstName: {
        type: String,
        require: true
      },
      middleName: {
        type: String,
        require: false
      },
      lastName: {
        type: String,
        require: true
      }
    },
    birthDay: {
      type: DateDataSchema,
      require: false
    },
    address: {
      type: AddressDataSchema,
      require: true
    },
    emailVerified: {
      type: Boolean,
      required: true,
      default: false
    },
    isOnboard: {
      type: Boolean,
      required: true,
      default: false
    },
    phoneNumber: {
      type: String,
      required: false
    },
    avatarUrl: {
      type: String,
      required: false
    },
    role: {
      type: String,
      required: true,
      enum: ROLES_MONGOOSE_ENUM,
      default: 'USER'
    },
    //TODO: breakdown to subclass
    accounts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Account'
        // refPath: 'accountModel'
      }
    ],
    contacts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
      }
    ]
    
  },
  {
    timestamps: true
  }
);

const User = model<IUser>('User', UserSchema, 'users');
export default User;