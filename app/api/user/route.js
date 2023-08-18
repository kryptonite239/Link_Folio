import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const user = await client.user.findUnique({
    where: {
      email: body.email,
    },
  });
  return NextResponse.json(user);
}
