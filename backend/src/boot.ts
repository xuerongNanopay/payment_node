// Preload config
import config from 'config';
import mongoose from 'mongoose';

const bootMongoose = async () => {
  try {
    const url = config.get("MONGO_DB.URL") as string;
    mongoose.connect(url);
    console.info("Mongoose Initial Successfully!");
  } catch ( error ) {
    throw error;
  }
}

const runBoot = async () => {
  await bootMongoose();
}

export default runBoot;