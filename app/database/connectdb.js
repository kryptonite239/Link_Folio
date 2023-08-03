import mongoose from "mongoose";
export default async function db() {
  const URI = process.env.MONOGO_DB_URI;
  const connection = await mongoose.connect(URI);
  if (connection.readyState >= 1) {
    return Promise.resolve(true);
  } else {
    return Promise.reject(err);
  }
}
