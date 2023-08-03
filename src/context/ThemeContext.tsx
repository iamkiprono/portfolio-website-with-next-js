"use client";

import React, { createContext, useState } from "react";

// type themeType = "dark" | "light";
interface themeType {
  theme: string;
  updateTheme: (x: string) => void;
}

export const ThemeContext = createContext<themeType | null>({
  theme: "",
  updateTheme: (x: string) => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("light");
  const updateTheme = (x: string) => {
    setTheme(x);
  };
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
