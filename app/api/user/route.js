import db from "@/public/database/connectdb";
import Users from "@/public/database/schema/user";
import { hashSync } from "bcrypt";
import { NextResponse } from "next/server";
export async function POST(request) {
  await db().catch((err) => console.log(err));
  const body = await request.json();
  const { userName, email, password } = body;

  await Users.create({
    userName,
    email,
    password: hashSync(password, 10),
    links: {},
  });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}
