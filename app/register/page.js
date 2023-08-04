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
    await fetch("/api/user", options).then((data, err) => {
      if (data) {
        if (data.status == "201") {
          r.push("/login");
        }
      }
    });
  }
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Enter Name"
          {...formik.getFieldProps("userName")}
        />
        <input
          type="email"
          placeholder="Enter Email"
          {...formik.getFieldProps("email")}
        />
        <input
          type="password"
          placecholder="Enter password"
          {...formik.getFieldProps("password")}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already Have An Account? <Link href={"/login"}>Sign In Here</Link>
      </p>
    </>
  );
}
