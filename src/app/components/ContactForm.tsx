"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyButton from "./MyLibrary/MyButton";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      setLoading(false);

      const data = await res.json();
      if (!res.ok) {
        throw Error(data.error);
      }
      toast.success(data.message);
      // console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="border-l-[1px] p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMail();
        }}
        action=""
      >
        <div className="flex flex-col ">
          <label className="my-4" htmlFor="">
            Name:
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
            className="border bg-transparent px-4 py-2 rounded"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="my-4" htmlFor="">
            Email:
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="border bg-transparent px-4 py-2 rounded"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="my-4" htmlFor="">
            Message:
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message"
            className="border bg-transparent px-4 py-2 rounded h-64"
          ></textarea>
        </div>

        <MyButton loading={loading} title="Send" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
