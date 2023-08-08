"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
export default function user() {
  const { data } = useSession();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  let links = [];
  async function getUser() {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data?.user?.email,
      }),
    });
    const user = await res.json();
    setUser(user);
    setLoading(false);
  }
  if (loading && data && data.user) {
    getUser();
    return <> Loading... Please Wait</>;
  }
  if (Object.keys(user).length != 0) links = user?.user?.links;
  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center bg-main">
      <nav className="flex w-full h-[80px] bg-sec items-center justify-between p-12 rounded-full">
        <h1 className="font-bold text-text text-4xl">Link Folio</h1>
        <h1 className=" font-semibold text-text text-2xl p-4 h-[65px] bg-border items-center justify-center rounded-full flex">
          LinkFolio/
          <span>{user?.user?.userName}</span>
        </h1>
        <button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
          className="w-[200px] h-[70px] rounded-full bg-main border-border border-2"
        >
          Sign Out
        </button>
      </nav>
      <div className="links">
        {links.length &&
          links.map((link) => {
            return <>Links</>;
          })}
        <h2>No Links Added</h2>
      </div>
    </div>
  );
}
