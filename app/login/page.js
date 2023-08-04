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
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          {...formik.getFieldProps("email")}
        />
        <input
          type="password"
          placeholder="password"
          {...formik.getFieldProps("password")}
        />
        <button type="submit">Login</button>
        <p>{msg}</p>
      </form>
      <p>
        Don't Have An Account? <Link href={"/register"}>Register Here!</Link>
      </p>
    </>
  );
}
