import mongoose from "mongoose";
const db = async () => {
  const URI = process.env.MONGO_DB_URI;
  try {
    const connection = await mongoose.connect(URI);
    if (connection.readyState >= 1) {
      return Promise.resolve(true);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};
export default db;
