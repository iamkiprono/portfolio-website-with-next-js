"use client";

import React, { createContext, useState } from "react";

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
  const [theme, setTheme] = useState("light");
  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
