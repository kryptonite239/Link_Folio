import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(Request) {
  const body = await Request.json();
  const { email, username, password } = body;
  if ((!email, !username, !password)) {
    throw new Error("Check Your Credentials and Try Again!");
  }
  const exists = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    throw new Error("User Already Exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await client.user.create({
    data: {
      email,
      name: username,
      hashedPassword,
    },
  });
  return new NextResponse.json(user);
}
