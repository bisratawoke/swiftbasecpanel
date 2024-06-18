import { getServerSession } from "next-auth";
import { AuthOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const session = await getServerSession(AuthOptions);
  const body = await request.json();
  const opts = {
    headers: {
      Authorization: `Bearer ${session.access_token}`,

      "content-type": "application/json",
    },
    body: JSON.stringify({ project_name: body.name }),
    method: "POST",
  };
  const response = await fetch(`${process.env.BACKEND_API}/project`, opts);
  const result = await response.json();
  return NextResponse.json({ status: response.status, message: result });
};
