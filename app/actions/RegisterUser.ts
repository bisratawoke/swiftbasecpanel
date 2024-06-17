"use server";
export default async function RegsiterUser(payload: Record<string, any>) {
  try {
    const result = await fetch(`${process.env.BACKEND_API}/auth/register`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (result.status != 201)
      return {
        status: false,
      };
    return {
      status: true,
    };
  } catch (err) {
    console.log(err);
  }
}
