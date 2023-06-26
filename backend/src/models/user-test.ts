//TODO: move this to test class.

import User, { IUser } from "./user";
import BankAccount, { IBankAccount } from "./account";

const testInputUser = async () => {
  let user = new User({
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
  // console.log(user._doc._id.toString(), user._doc, user.createdAt.toISOString(), user._id)
  let bankAccount = new BankAccount({
    name: 'new CA bankAccount',
    owner: user,
    transferIn: true,
    iban: 'aaaa',
    country: 'CA'
  })
  bankAccount = await bankAccount.save();
  const rebankAccount = await BankAccount
                                .findOne({_id: bankAccount._id.toString()})
                                .populate({
                                  path: 'owner',
                                  select: '_id userName email'
                                });

  console.log(rebankAccount);
  user.account.bankAccounts.push(bankAccount);
  await user.save();
}

export default testInputUser;