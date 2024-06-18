import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { AuthOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(AuthOptions);

  const body = await req.json();
  const opts = {
    headers: {
      Authorization: "Bearer " + session?.access_token,
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      project_id: body.projectId,
      services: body.services,
    }),
  };

  console.log(opts);

  const res = await fetch(`${process.env.BACKEND_API}/project/service`, opts);
  const result = await res.json();
  return NextResponse.json({ status: res.status });
}
