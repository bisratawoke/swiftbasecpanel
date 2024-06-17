import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(creds, req) {
        const result = await fetch(`${process.env.BACKEND_API}/auth/`, {
          headers: {
            "content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: creds?.email,
            password: creds?.password,
          }),
        });

        if (!(result?.status == 201)) {
          return null;
        } else {
          const res = await result.json();
          return {
            id: "",
            access_token: res.access_token,
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.access_token = user.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.access_token = token.access_token;
      return session;
    },
  },
};

export const Handler = NextAuth(AuthOptions);

export { Handler as GET, Handler as POST };
