// Preload config
import config from 'config';
import mongoose from 'mongoose';
import testInputUser from './models/user-test'

const bootMongoose = async () => {
  try {
    const url = config.get("MONGO_DB.URL") as string;
    mongoose.connect(url);
    console.info("Mongoose Initial Successfully!");
    await testInputUser();
  } catch ( error ) {
    throw error;
  }
}

const runBoot = async () => {
  await bootMongoose();
}

export default runBoot;