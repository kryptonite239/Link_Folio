"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="navbar flex w-1/2 h-[120px] p-12 drop-shadow-2xl bg-sec text-text items-center justify-between rounded-full fixed">
      {session !== null ? (
        <>
          <nav className="flex w-full h-[80px] bg-sec items-center justify-between p-12 rounded-full">
            <h1 className="font-bold text-text text-4xl">Link Folio</h1>
            <h1 className=" font-semibold text-text text-2xl p-4 h-[65px] bg-border items-center justify-center rounded-full flex">
              LinkFolio/
              <span>{session?.user?.name}</span>
            </h1>
            <button
              onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
              className="w-[200px] h-[70px] rounded-full bg-main border-border border-2"
            >
              Sign Out
            </button>
          </nav>
        </>
      ) : (
        <>
          <Link
            href={"/"}
            className="text-4xl font-extrabold flex items-center h-[120px] w-[200px] justify-center"
          >
            Link Folio
          </Link>
          <Link
            href={"/register"}
            className=" border-[2px] w-[100px] h-[50px] rounded-full flex items-center border-border justify-center hover:bg-border ease-in-out duration-500 hover:font-bold hover:text-sec"
          >
            SignUp
          </Link>
          <Link
            href={"/login"}
            className="border-[2px] w-[100px] h-[50px] rounded-full flex items-center border-border justify-center hover:bg-border ease-in-out duration-500 hover:font-bold hover:text-sec"
          >
            Log In
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
