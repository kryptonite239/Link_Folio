import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/app/database/connectdb";
import users from "@/app/database/schema/user";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "username", type: "text", placeholder: "Your Name" },
        email: { label: "email", type: "email", placeholder: "Your E-mail" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Your Password",
        },
      },
      async authorize(credentials, req) {
        db().catch(() => ({ err: "Connection Failed" }));
        const user = await users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user of Give Email exists");
        } else {
          const checkpass = user.password === credentials.password;
          if (!checkpass) {
            throw new Error("Password is incorrect");
          }
          return user;
        }
      },
    }),
  ],
};
export default NextAuth(authOptions);
