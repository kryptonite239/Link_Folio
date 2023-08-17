import NextAuth from "next-auth/next";
import client from "@/app/libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
export const authOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const user = await client.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          throw new Error("No Email Exists");
        }
        const checkpass = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!checkpass) {
          throw new Error("Password doesn't match");
        }

        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };
