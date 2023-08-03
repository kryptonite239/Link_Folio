"use client";
import { useFormik } from "formik";
import { useState } from "react";

export default function register() {
  const [msg, setMsg] = useState("");
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
    </>
  );
}
