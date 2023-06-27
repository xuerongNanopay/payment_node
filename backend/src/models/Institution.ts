import { 
  Schema, 
  model, 
  Types 
} from "mongoose";

export interface IInstitution {
  type: string,
  _id: Types.ObjectId,
  name: string,
  abbreviation: string,
  loginLabelUrl?: string,
  country?: {
    code: string,
    name: string
  },
  institutionNumber?: string,

  createdAt: Date;
  updatedAt: Date;
}

const InstitutionSchema = new Schema<IInstitution>(
  {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    abbreviation: {
      type: String,
      required: true
    },
    loginLabelUrl: {
      type: String,
      required: false
    },
    country: {
      type: {
        code: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        }
      },
      required: false
    },
    institutionNumber: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
)

const Institution = model<IInstitution>('Institution', InstitutionSchema, 'institutions');
export default Institution;
export interface ExchangeRate {

}