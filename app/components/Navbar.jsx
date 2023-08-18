"use client";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
const Navbar = ({ user }) => {
  if (user) {
    return (
      <div className="w-full  h-20 bg-black rounded-md flex justify-between border-[1px] border-white items-center">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-white ml-3">
          Link Folio
        </h1>
        <div className="flex h-20 items-center justify-evenly w-1/6">
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full  h-20 bg-black rounded-md flex justify-between border-[1px] border-white items-center">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-white ml-3">
          Link Folio
        </h1>
        <div className="flex h-20 items-center justify-evenly w-1/6">
          <Link
            href="/register"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline" })}
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
