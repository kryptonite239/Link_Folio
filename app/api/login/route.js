import db from "@/public/database/connectdb";
import Users from "@/public/database/schema/user";
import { compareSync } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  await db();

  const body = await request.json();
  const user = await Users.findOne({ email: body.email });

  // console.log({ pass, hash });
  if (!user) {
    return NextResponse.json({ message: "No User Exists" }, { status: 404 });
  }
  const hash = user.password;
  if (hashCompare(hash, body.password) === false) {
    return NextResponse.json({ message: "Wrong Password" }, { status: 401 });
  }
  return NextResponse.json({ message: "User Authorized" }, { status: 201 });
}
function hashCompare(hash, pass) {
  return compareSync(pass, hash);
}
