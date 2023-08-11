"use client";
import useTheme from "@/Hooks/useTheme";
import NameContextProvider, {
  ContextProps,
  NameContext,
} from "@/context/NameContext";
import { themeType } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, updateUser } = useContext<ContextProps>(NameContext);

  const { theme, updateTheme } = useTheme();
  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <Link className="border border-red-800 px-4 py-2 rounded" href={"/"}>
          Collins
        </Link>
        <div className="flex items-center">
          <Link className="ml-4" href={"/"}>
            Home
          </Link>
          <Link className="ml-4" href={"about"}>
            About
          </Link>
          <Link className="ml-4" href={"skills"}>
            Skills
          </Link>
          <Link className="ml-4 mr-4" href={"contact"}>
            Contact
          </Link>
          {theme === "light" ? (
            <FaSun
              onClick={() => {
            
                updateTheme();
              }}
            />
          ) : (
            <FaMoon onClick={() => updateTheme()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
