"use client";
import useTheme from "@/Hooks/useTheme";

import Link from "next/link";
import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import MyButton from "./MyLibrary/MyButton";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { theme, updateTheme } = useTheme();

  
  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <Link className="" href={"/"}>
          <MyButton title="Collins" />
        </Link>
        <div
          className={`flex flex-col md:flex-row justify-center md:visible ${
            navOpen ? "visible" : "invisible"
          }`}
        >
          {
            <div className="md:invisible">
              <FaTimes size={24} onClick={() => setNavOpen(!navOpen)} />
            </div>
          }

          <Link
            onClick={() => setNavOpen(!navOpen)}
            className="md:ml-4"
            href={"about"}
          >
            About
          </Link>
          <Link
            onClick={() => setNavOpen(!navOpen)}
            className="md:ml-4"
            href={"skills"}
          >
            Skills
          </Link>
          <Link
            onClick={() => setNavOpen(!navOpen)}
            className="md:ml-4"
            href={"projects"}
          >
            Projects
          </Link>
          <Link
            onClick={() => setNavOpen(!navOpen)}
            className="md:ml-4 md:mr-4"
            href={"contact"}
          >
            Contact
          </Link>
          {theme === "dark" ? (
            <FaSun
              size={24}
              onClick={() => {
                window.localStorage.setItem("theme", JSON.stringify("light"));
                updateTheme();
              }}
            />
          ) : (
            <FaMoon
              size={24}
              onClick={() => {
                window.localStorage.setItem("theme", JSON.stringify("dark"));
                updateTheme();
              }}
            />
          )}
        </div>
        {
          <div
            onClick={() => setNavOpen(!navOpen)}
            className={`md:invisible md:absolute ${
              navOpen ? "absolute invisible" : ""
            }`}
          >
            <FaBars size={24} />
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
