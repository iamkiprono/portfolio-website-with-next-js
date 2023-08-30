"use client";

import React, { createContext, useState, useEffect } from "react";

type theme = "dark" | "light" | string;

export interface themeType {
  toggle: boolean;
  updateToggle: () => void;
  theme: theme;
  updateTheme: () => void;
}

export const ThemeContext = createContext<themeType | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle(!toggle);
  };

  const [theme, setTheme] = useState("");
  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");

    if (!currentTheme) {
      window.localStorage.setItem("theme", JSON.stringify("light"));
      return setTheme("light");
    }

    setTheme(JSON.parse(currentTheme));
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, updateTheme, toggle, updateToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
