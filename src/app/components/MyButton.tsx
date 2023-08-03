import React from "react";

interface ButtonProps {
  title: string;
  variant?: string;
}

const MyButton: React.FC<ButtonProps> = ({ title, variant }) => {
  const bg = variant;
  return <div className={`border px-4 w-fit rounded bg-${bg}-600`}>{title}</div>;
};

export default MyButton;
