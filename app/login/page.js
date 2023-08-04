"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
export default function login() {
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("red");
  const r = useRouter();
  const formik = useFormik({
    initialValues: {
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
    const data = await fetch("/api/login", options);
    if (data.status == 201) {
      setMsg("Login Successful");
      setColor("green");
      r.push("/");
    }
    if (data.status == 401) {
      setMsg("Wrong Passowrd, Try Again");
    }
    if (data.status == 404) {
      setMsg("User Does Not Exist");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-around w-1/2 h-1/3"
      >
        <input
          type="email"
          placeholder="Enter Email"
          {...formik.getFieldProps("email")}
          className="w-[300px] h-[50px] border-border border-[3px] rounded-full"
        />
        <input
          type="password"
          placeholder="password"
          {...formik.getFieldProps("password")}
          className="w-[300px] h-[50px] border-border border-[3px] rounded-full"
        />
        <button
          type="submit"
          className="w-[150px] h-[50px] bg-[gray] text-text rounded-full hover:bg-sec ease-in-out duration-300"
        >
          Login
        </button>
        <p>{msg}</p>
        <p>
          Don't Have An Account?{" "}
          <Link
            href={"/register"}
            className=" text-main hover:text-sec hover:underline"
          >
            Register Here!
          </Link>
        </p>
      </form>
    </div>
  );
}
