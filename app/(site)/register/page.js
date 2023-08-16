"use client";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
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
    await fetch("/api/auth/user", options).then((data, err) => {
      if (data) {
        toast.success("User Created");
        router.push("/login");
      }
      if (err) {
        toast.error(err);
      }
    });
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <h1 className="font-main font-bold text-[40px] text-sec mb-[10px]">
        Link Folio
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-around w-1/2 h-1/3"
      >
        <input
          type="text"
          placeholder="Enter Name"
          {...formik.getFieldProps("username")}
          className="w-[300px] h-[50px] border-main border-[3px] rounded-full focus:outline-border text-[14px] font-semibold p-3"
        />
        <input
          type="email"
          placeholder="Enter Email"
          {...formik.getFieldProps("email")}
          className="w-[300px] h-[50px] border-main border-[3px] rounded-full focus:outline-border text-[14px] font-semibold p-3"
        />
        <input
          type="password"
          placeholder="Enter password"
          {...formik.getFieldProps("password")}
          className="w-[300px] h-[50px] border-main border-[3px] rounded-full focus:outline-border text-[14px] font-semibold p-3"
        />
        <button
          type="submit"
          className="w-[300px] h-[50px] hover:bg-[gray] border-gray border-2 text-sec hover:text-text rounded-full font-semibold text-[23px ease-in-out duration-300"
        >
          Sign Up
        </button>
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
