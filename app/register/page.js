"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function register() {
  const [msg, setMsg] = useState("");
  const r = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: "",
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
    console.log(values);
    console.log("Sending Request");
    await fetch("/api/auth/user", options).then((data, err) => {
      if (data) {
        if (data.status == "201") {
          r.push("/login");
        } else if (data.status == "404") {
          setMsg("User Already Exists");
        }
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
          {...formik.getFieldProps("userName")}
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
        <p className="text-[red]">{msg}</p>
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
