import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/public/database/connectdb";
import Users from "@/public/database/schema/user";
import { compareSync } from "bcrypt";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        await db();
        const user = await Users.findOne({ email: credentials.email });
        if (user && compareSync(credentials.password, user.password)) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
export { handler as POST, handler as GET };
