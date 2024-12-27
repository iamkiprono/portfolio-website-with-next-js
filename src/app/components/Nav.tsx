"use client";

import useTheme from "@/Hooks/useTheme";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import MyButton from "./MyLibrary/MyButton";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const Nav = () => {
  const [active, setActive] = useState("Home");
  // const [toggle, setToggle] = useState(false);

  const { theme, updateTheme, toggle, updateToggle } = useTheme();

  return (
    <div className="">
      <nav className="max-w-7xl m-auto flex p-6 justify-between items-center navbar ">
        {/* Logo */}
        <Link className="" href={"/"}>
          <MyButton title="Collins Kiprono" />
        </Link>

        {/* Desktop Navigation */}
        <div className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <div
              key={nav.id}
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white " : "text-gray-100"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => {
                setActive(nav.title);
                // setToggle(!toggle);
                updateToggle();
              }}
            >
              <Link
                className={`${theme === "dark" ? "text-white" : "text-black"}`}
                href={`/${nav.id}`}
              >
                {nav.title}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <FaBars
            // src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => {
              // setToggle(!toggle);
              updateToggle();
            }}
          />

          {/* Sidebar */}
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 ${
              theme === "dark" ? "border bg-[#201d1d] " : "bg-white border"
            }  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <div className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <Link
                  key={nav.id}
                  className={`w-full ${
                    theme === "dark" ? "text-white" : "text-black"
                  } font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white " : "text-gray-100"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    // setToggle(!toggle);
                    updateToggle();
                  }}
                  href={`/${nav.id}`}
                >
                  <p
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {nav.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {theme === "dark" ? (
          <FaSun
            className="ml-4"
            size={24}
            onClick={() => {
              window.localStorage.setItem("theme", JSON.stringify("light"));
              updateTheme();
            }}
          />
        ) : (
          <FaMoon
            className="ml-4"
            size={24}
            onClick={() => {
              window.localStorage.setItem("theme", JSON.stringify("dark"));
              updateTheme();
            }}
          />
        )}
      </nav>
    </div>
  );
};

export default Nav;
