import NextAuth from "next-auth";
import AuthOptions from "../../../../lib/AuthOptions";

const handler = NextAuth(AuthOptions);

export { handler as POST, handler as GET };
