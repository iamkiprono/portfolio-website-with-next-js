"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <form action="">
        <div className="flex flex-col">
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
          <input
            required
            placeholder="Message"
            className="border bg-transparent px-4 py-2 rounded h-10"
            type="email"
          />
        </div>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            toast("Sent", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              
            });
          }}
          className="my-4 border rounded py-2 px-4"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
