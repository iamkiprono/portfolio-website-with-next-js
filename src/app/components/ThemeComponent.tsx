"use client";

import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import useTheme from "@/Hooks/useTheme";

const inter = Inter({ subsets: ["latin"] });

const ThemeComponent = ({ children }: { children: ReactNode }) => {
  const { theme, updateTheme } = useTheme();
  return (
    <div
      className={`${inter.className}relative ${
        theme === "dark" ? "bg-[#201d1d] text-white" : "text-[#201d1d] bg-white"
      }   m-auto`}
    >
      {children}
    </div>
  );
};

export default ThemeComponent;
