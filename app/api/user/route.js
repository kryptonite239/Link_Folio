import db from "@/public/database/connectdb";
import Users from "@/public/database/schema/user";
import { hash, hashSync } from "bcrypt";
import { NextResponse } from "next/server";
export async function POST(request) {
  await db().catch((err) => console.log(err));
  const body = await request.json();
  const { userName, email, password } = body;
  const hashValue = await hash(password, 10);
  await Users.create({
    userName,
    email,
    password: hashValue,
    links: {},
  });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}
