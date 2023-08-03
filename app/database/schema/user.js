import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  user: String,
  email: String,
  password: String,
  links: [{ link: String }],
});
const users = models.user || model("user", userSchema);

export default users;
