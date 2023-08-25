"use client";

import React, { createContext, useState, useEffect } from "react";

type theme = "dark" | "light" | string;

export interface themeType {
  theme: theme;
  updateTheme: () => void;
}

export const ThemeContext = createContext<themeType | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("");
  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");

    if (!currentTheme) {
      console.log({ message: "no theme", currentTheme });
      window.localStorage.setItem("theme", "light");
      return setTheme("light");
    }

    console.log({
      message: "theme available",
      currentTheme: JSON.parse(currentTheme),
    });
    setTheme(JSON.parse(currentTheme) );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
