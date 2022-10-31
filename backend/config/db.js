import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB = process.env.MONGO_URL;

    const conn = await mongoose.connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connected>>>>>>>>>>>>>>>>>>>>>>>: ${conn.connection.host}`
        .magenta.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
