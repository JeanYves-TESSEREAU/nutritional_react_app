import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(' yes ! mongoDB connected with succes :)');
  } catch (error) {
    console.log(' hoh ! connection to mongoDB failed :(');
    process.exit(1);
  }
};

export default connectDB;
