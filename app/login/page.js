"use client";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
export default function login() {
  const [msg, setMsg] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [input, setInput] = useState("");
  const r = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });
  const validEmail = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value.match(validRegex)) setCheckEmail(true);
    else setCheckEmail(false);
  };
  async function onSubmit(values) {
    setMsg("");
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
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
          type="email"
          placeholder="Enter Email"
          {...formik.getFieldProps("email")}
          className={`w-[300px] h-[50px] border-main border-[3px] rounded-full focus:outline-border text-[14px] font-semibold p-3`}
        />
        <input
          type="password"
          placeholder="Enter Password"
          {...formik.getFieldProps("password")}
          className="w-[300px] h-[50px] border-main border-[3px] rounded-full focus:outline-border text-[14px] font-semibold p-3"
        />
        <button
          type="submit"
          className="w-[300px] h-[50px] hover:bg-[gray] border-gray border-2 text-sec hover:text-text rounded-full font-semibold text-[23px ease-in-out duration-300"
        >
          Login
        </button>
        <p className="text-[red] font-bold">{msg}</p>
        <p>
          Don't Have An Account?{" "}
          <Link
            href={"/register"}
            className=" text-main hover:text-sec hover:underline"
          >
            Create One!
          </Link>
        </p>
      </form>
    </div>
  );
}
