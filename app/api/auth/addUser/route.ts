import Connectdb from "@/lib/connectdb";
import User from "@/lib/schema/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req: any, res: any) {
  Connectdb();
  const body = await req.json();
  const { password, username, email } = body;
  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("User Already Exists");
  }
  const userName = await User.findOne({ username });
  if (userName) {
    throw new Error("Username Already Taken");
  }
  const hashedPassword = await bcrypt.hashSync(password, 10);

  await User.create({
    username,
    email,
    password: hashedPassword,
  });
  return NextResponse.json({
    status: 200,
    statusText: "User Successfully Created",
  });
}
