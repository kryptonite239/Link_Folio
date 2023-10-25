import { Schema, model, models } from "mongoose";

const user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  links: {
    type: { name: String, link: String },
  },
});

const User = models.User || model("User", user);

export default User;
