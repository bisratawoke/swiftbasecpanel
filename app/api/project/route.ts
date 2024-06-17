import { getServerSession } from "next-auth";
import { AuthOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const session = await getServerSession(AuthOptions);
  const opts = {
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify(request.body),
    method: "POST",
  };
  console.log(opts);
  const response = await fetch(`${process.env.BACKEND_API}/project/`, opts);
  console.log(response.status);
  return NextResponse.json({ status: response.status });
};
