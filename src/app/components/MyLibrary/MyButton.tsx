"use client";
import React from "react";

interface ButtonProps {
  title: string;
  variant?: string;
}

const MyButton = ({ title, variant }: ButtonProps) => {
  const bg = variant;
  return (
    <button
      className={`border my-4 mr-4 px-4 py-2 rounded w-fit cursor-pointer hover:bg-white hover:text-black bg-${bg}-600`}
    >
      {title}
    </button>
  );
};

export default MyButton;
