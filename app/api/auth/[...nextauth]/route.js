import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
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

        const user = await res.json();
        console.log(user);
        if (user) return user;
        return null;
      },
    }),
  ],
  callbacks: {},
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});
export { handler as POST, handler as GET };
