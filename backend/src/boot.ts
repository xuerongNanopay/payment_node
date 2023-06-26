// Preload config
import config from 'config';
import mongoose from 'mongoose';
import testInputUser from './models/user-test'
import logger from './utils/logger';

const bootMongoose = async () => {
  try {
    const url = config.get("MONGO_DB.URL") as string;
    mongoose.connect(url);
    logger.info("Mongoose Initial Successfully!");
    await testInputUser();
  } catch ( error ) {
    throw error;
  }
}

const runBoot = async () => {
  await bootMongoose();
}

export default runBoot;