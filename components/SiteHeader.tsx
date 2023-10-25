import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
const SiteHeader: React.FC = () => {
  return (
    <header className="dark w-full h-[70px] flex items-center justify-between px-10 text-white rounded-full border border-border">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
        <Link href="/">Link Folio</Link>
      </h1>
      <div className="search flex w-[360px] h-10 items-center justify-between">
        <Input placeholder="Search..." className="w-[300px]" />
        <div className="button w-[50px] flex items-center h-full rounded-md border-border border justify-center">
          <Search size={22} />
        </div>
      </div>
      <div className="buttons h-full hidden lg:flex lg:w-[200px] lg:justify-evenly lg:items-center">
        <Button>
          <Link href={"/login"}>Log In</Link>
        </Button>
        <Button variant={"outline"}>
          <Link href={"/register"}>Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
