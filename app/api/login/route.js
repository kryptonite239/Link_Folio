import db from "@/public/database/connectdb";
import Users from "@/public/database/schema/user";
import { hashSync } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  await db();

  const body = await request.json();
  const user = await Users.findOne({ email: body.email });
  const pass = user.password;
  const hash = hashSync(body.password, 10);
  console.log({ pass, hash });
  if (!user) {
    return NextResponse.json({ message: "No User Exists" });
  }
  if (pass !== hash) {
    return NextResponse.json({ message: "Wrong Password" });
  }
  return NextResponse.json({ message: "User Authorized" }, { status: 201 });
}
