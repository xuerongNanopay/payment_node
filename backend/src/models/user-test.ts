//TODO: move this to test class.

import User, { IUser } from "./user";
import BankAccount, { IBankAccount } from "./account";

const testInputUser = async () => {
  let user = new User<Partial<IUser>>({
    userName: 'miumiu',
    email: 'miumiu@xrw.io',
    password: 'bcryptjs',
    legalName: {
      firstName: 'Admin',
      lastName: 'Wu'
    },
    address: {
      address1: 'address1',
      city: 'Regina',
      region: 'SK',
      country: 'Canada',
      postCode: 'L3T 3E8'
    }
  })
  
  user = await user.save();
  console.log(user._doc._id.toString(), user._doc, user.createdAt.toISOString())
  let bankAccount = new BankAccount
}

export default testInputUser;