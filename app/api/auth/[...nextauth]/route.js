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
      async authorize(credentials) {
        console.log("Authorizing.. Wait");
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        console.log(res);
        const user = await res.json();
        if (user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
export { handler as POST, handler as GET };
