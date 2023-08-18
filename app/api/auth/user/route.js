import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(Request) {
  const body = await Request.json();
  const { email, username, password } = body;
  if (!email || !username || !password) {
    return NextResponse.json(
      {},
      { status: 404, statusText: "Enter Proper Credentials" }
    );
  }
  const exists = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return NextResponse.json(
      {},
      { status: 404, statusText: "User Already Exists" }
    );
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
