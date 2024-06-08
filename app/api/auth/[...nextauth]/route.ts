import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
export const AuthOptions = {
  providers: [
    Github({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    Google({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
  ],
};

export const Handler = NextAuth(AuthOptions);

export { Handler as GET, Handler as POST };
