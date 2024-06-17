// "use server";

// import { getServerSession } from "next-auth";
// import { AuthOptions } from "../api/auth/[...nextauth]/route";
// import { NextRequest, NextResponse } from "next/server";
// export default async function FetchProjects(req: NextRequest) {
//   try {
//     const res: NextResponse = NextResponse.next();
//     const session = await getServerSession(req, res, AuthOptions);
//     console.log(session);
//     const result = await fetch(`${process.env.BACKEND_API}/project`);
//     return [];
//   } catch (err) {
//     console.log("======= in fetch projects error ========");
//     console.log(err);
//     return [];
//   }
// }

// return [
//   {
//     projectName: "Google",
//     projectId: "2sdfsdfsfrsdc",
//   },
//   {
//     projectName: "Google",
//     projectId: "2sdfsdfsfrsdc",
//   },
//   {
//     projectName: "Google",
//     projectId: "2sdfsdfsfrsdc",
//   },
//   {
//     projectName: "Google",
//     projectId: "2sdfsdfsfrsdc",
//   },
// ];
