"use client";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function register() {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit,
  });
  async function onSubmit(values) {
    setLoading(true);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const response = await fetch("/api/auth/user", options);
    setLoading(false);
    if (response?.ok) {
      toast.success("User Created!");
      router.push("/login");
    } else {
      toast.error(response?.statusText);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <h1 className="font-main font-bold text-[40px] text-sec mb-[10px] text-white">
        Link Folio
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-around w-1/2 h-1/3"
      >
        <Input
          type="text"
          placeholder="Enter Name"
          {...formik.getFieldProps("username")}
        />
        <Input
          type="email"
          placeholder="Enter Email"
          {...formik.getFieldProps("email")}
        />
        <Input
          type="password"
          placeholder="Enter password"
          {...formik.getFieldProps("password")}
        />
        <Button
          type="submit"
          variant="outline"
          className="w-1/2"
          disabled={loading}
        >
          Sign Up
        </Button>
      </form>
      <p className="text-white">
        Already Have An Account?{" "}
        <Link
          href={"/login"}
          className="text-slate-300 hover:text-gray hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
