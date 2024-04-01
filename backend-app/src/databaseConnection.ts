import mongoose from 'mongoose';
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
dotenv.config();

const connectToDatabase = async (): Promise<void> => {
  if (!process.env.DB_URL) {
    throw new Error('DB_URL must be defined');
  }
  const options = {
    autoIndex: false,
    maxPoolSize: 20,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  };

  await mongoose.connect(process.env.DB_URL, options);
};

export { connectToDatabase };
