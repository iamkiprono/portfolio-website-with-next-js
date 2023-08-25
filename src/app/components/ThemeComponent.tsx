"use client";

import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import useTheme from "@/Hooks/useTheme";

const inter = Inter({ subsets: ["latin"] });

const ThemeComponent = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${inter.className} ${
        theme === "dark" ? "bg-[#201d1d] text-white" : "text-[#201d1d] bg-white"
      } min-h-[100vh]   `}
    >
      <div
        className={`${inter.className} ${
          theme === "dark"
            ? "bg-[#201d1d] text-white"
            : "text-[#201d1d] bg-white"
        }   m-auto max-w-7xl mx-auto`}
      >
        {children}
      </div>
    </div>
  );
};

export default ThemeComponent;
