import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(cred, req) {
        const user = {
          id: "user-id",
          token: "my-custom-token",
        };
        return user;
      },
    }),
    Github({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    Google({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.token = token.token;
      return session;
    },
  },
};

export const Handler = NextAuth(AuthOptions);

export { Handler as GET, Handler as POST };
