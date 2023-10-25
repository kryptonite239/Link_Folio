import mongoose, { ConnectOptions } from "mongoose";
const Connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI || "");
  } catch (error) {
    console.log(error);
  }
};

export default Connectdb;
