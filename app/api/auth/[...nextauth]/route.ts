import Connectdb from "@/lib/connectdb";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { SessionStrategy } from "next-auth";
import bcrypt from "bcrypt";
import User from "@/lib/schema/user";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        Connectdb();
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Enter Credentials Correctly!");
        }
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          throw new Error("No User Exists");
        }
        const checkPass = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!checkPass) {
          throw new Error("Incorrect Password");
        } else return user;
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
