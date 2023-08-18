import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const link = await client.link.create({
    data: {
      name: body.name,
      image: body.image,
      url: body.url,
      user: {
        connect: {
          id: body.userId,
        },
      },
    },
  });
  const update = await client.user.update({
    where: {
      id: body.userId,
    },
    data: {
      links: {
        connect: {
          id: link.id,
        },
      },
    },
  });
  return NextResponse.json({}, { status: 200, statusText: "Link Added" });
}
