"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

const LinkForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      userId: user.id,
      name: "",
      image: "",
      url: "",
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
    const response = await fetch("/api/link", options);
    setLoading(false);
    if (response?.ok) {
      toast.success(response?.statusText);
    } else {
      toast.error(response?.statusText);
    }
  }
  return (
    <div>
      <h1>Add Link</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Title"
          required
          {...formik.getFieldProps("name")}
        />
        <Input
          type="text"
          placeholder="Enter Url"
          required
          {...formik.getFieldProps("url")}
        />
        <Input
          type="file"
          placeholder="Choose Icon"
          {...formik.getFieldProps("image")}
        />
        <Button variant="outline" type="submit" disabled={loading}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default LinkForm;
