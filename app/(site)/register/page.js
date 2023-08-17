"use client";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function register() {
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
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("/api/auth/user", options).then((user, err) => {
      if (err) {
        toast.error(err);
      } else if (user) {
        toast.success("User Created");
        router.push("/login");
      }
    });
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
        <Button type="submit" variant="outline" className="w-1/2">
          Sign Up
        </Button>
      </form>
      <p>
        Already Have An Account?{" "}
        <Link
          href={"/login"}
          className="text-main hover:text-sec hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
