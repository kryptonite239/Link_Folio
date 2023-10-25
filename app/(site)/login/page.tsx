"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, isLoading] = useState(false);
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    isLoading(true);
    e.preventDefault();
    signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    }).then((callback) => {
      console.log(callback);
      if (callback?.ok && !callback?.error) {
        console.log("User logged in");
      }
      if (callback?.error) {
        console.log(callback.error);
      }
    });
    isLoading(false);
  };
  return (
    <div className="text-white w-full h-[100vh] flex flex-col items-center justify-center gap-3">
      <h2 className="scroll-m-20 border-b  pb-3 text-5xl font-bold tracking-wider first:mt-0 ">
        Welcome Back!
      </h2>
      <p className="text-xl text-muted-foreground pb-5">Log In To LinkFolio</p>
      <form
        className="lg:w-[365px] flex  flex-col justify-center items-start gap-5"
        onSubmit={handlesubmit}
      >
        <div className="email w-full flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password w-full flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassowrd(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Log In
        </Button>
      </form>
      <form className="lg:w-[365px] flex  flex-col justify-center items-start gap-3">
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
        Don't Have An Account?
        <span className=" underline text-">
          <Link href="/register"> Sign Up</Link>
        </span>
      </small>
    </div>
  );
}
