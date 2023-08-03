"use client";
import NameContextProvider, {
  ContextProps,
  NameContext,
} from "@/context/NameContext";
import Link from "next/link";
import React, { useContext } from "react";

const Navbar = () => {
  const { user, updateUser } = useContext<ContextProps>(NameContext);
  return (
    <NameContextProvider>
      <div>
        <div className="flex justify-between items-center p-6">
          <Link className="border border-red-800 px-4 py-2 rounded" href={"/"}>
            Collins
          </Link>
          <div>
            <Link className="ml-4" href={"/"}>
              Home
            </Link>
            <Link className="ml-4" href={"about"}>
              About
            </Link>
            <Link className="ml-4" href={"skills"}>
              Skills
            </Link>
            <Link className="ml-4" href={"contact"}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </NameContextProvider>
  );
};

export default Navbar;
