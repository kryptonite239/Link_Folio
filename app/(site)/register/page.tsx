"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
export default function Register() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // if (formData.get("password") !== formData.get("cpassowrd")) {
    //   throw new Error("Passwords Dont Match");
    // }
    fetch("/api/auth/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-white w-full h-[100vh] flex flex-col items-center justify-center gap-3">
      <h2 className="scroll-m-20 border-b  pb-3 text-5xl font-bold tracking-wider first:mt-0 ">
        Welcome!
      </h2>
      <p className="text-xl text-muted-foreground pb-5 ">
        Sign Up To LinkFolio
      </p>
      <form
        className="lg:w-[365px] flex  flex-col justify-center items-start gap-5 "
        onSubmit={handleSubmit}
      >
        <div className="email w-full flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input name="username" type="text" />
        </div>
        <div className="email w-full flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input name="email" type="email" />
        </div>
        <div className="password w-full flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" />
        </div>
        <div className="password w-full flex flex-col gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input name="cpassword" type="password" />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
      <form className="lg:w-[365px] flex  flex-col justify-center items-center gap-3 ">
        <div className="seperator w-full flex items-center h-[30px]">
          <div className="w-1/2 border-b"></div>
          <p className="text-xl text-muted-foreground flex justify-center h-full px-2">
            OR
          </p>
          <div className="w-1/2 border-b"></div>
        </div>
        <Button type="submit" variant="secondary" className="w-full flex gap-3">
          <FcGoogle />
          Continue With Google
        </Button>
      </form>
      <small className="text-sm font-medium leading-none">
        Already Have An Account?
        <span className=" underline text-">
          <Link href="/login">Log In</Link>
        </span>
      </small>
    </div>
  );
}
