import db from "@/public/database/connectdb";
import Users from "@/public/database/schema/user";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
  await db();
  const user = await Users.findOne({ email: body.email });
  return NextResponse.json({ message: user }, { status: 201 });
};
