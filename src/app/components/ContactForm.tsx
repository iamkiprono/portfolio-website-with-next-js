"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyButton from "./MyLibrary/MyButton";

const ContactForm = () => {
  return (
    <div className="border-l-[1px] p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Message Sent", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }}
        action=""
      >
        <div className="flex flex-col ">
          <label className="my-4" htmlFor="">
            Name:
          </label>
          <input
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
            required
            placeholder="Message"
            className="border bg-transparent px-4 py-2 rounded h-64"
          ></textarea>
        </div>

        <MyButton title="Send" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
