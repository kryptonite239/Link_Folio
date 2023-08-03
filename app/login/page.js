"use client";
import { useFormik } from "formik";

export default function login() {
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
      </form>
    </>
  );
}
