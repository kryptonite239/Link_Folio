import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
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
        const response = await fetch("http://localhost:3000/api/verify",{
            method:"POST",
            body: JSON.stringify(credentials),
            headers:{"content-type":"application/json"}
        });

      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/",
    signUp: "/auth/register",
  },
};
export default NextAuth(authOptions);
