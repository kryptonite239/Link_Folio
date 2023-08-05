import db from "@/public/database/connectdb";
import Users from "@/public/database/schema/user";
import { compareSync } from "bcrypt";

export async function POST(request) {
  await db();
  const body = await request.json();
  const user = await Users.findOne({ email: body.email });
  if (!user) {
    return new Response(
      JSON.stringify({ message: "No User Exists" }, { status: 404 })
    );
  }
  const hash = user.password;
  if (!hashCompare(hash, body.password)) {
    return new Response(
      JSON.stringify({ message: "Wrong Password" }, { status: 401 })
    );
  }
  return new Response(JSON.stringify(user));
}
function hashCompare(hash, pass) {
  return compareSync(pass, hash);
}
