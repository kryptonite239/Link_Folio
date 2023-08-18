import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LinkForm from "@/app/components/LinkForm";
import Navbar from "@/app/components/Navbar";
import { getServerSession } from "next-auth";
async function getUser(email) {
  const user = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const res = await user.json();
  return res;
}
export default async function dashboard() {
  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user?.email);
  return (
    <>
      <Navbar user={user} />
      <LinkForm user={user} />
    </>
  );
}
