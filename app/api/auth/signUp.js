import { hash } from "bcrypt";
import db from "@/app/database/connectdb";
import users from "@/app/database/schema/user";
export default async function handler(req, res) {
  db().catch(() => ({ err: "Connection Failed!" }));
  if (req.method == "POST") {
    const { username, email, password } = req.body;
    const checkUser = await users.findOne({ email: email });
    if (checkUser) {
      return res.send(422).json({ message: "User Already Exists" });
    }
    if()
  }
}
