"use client";

import React, { createContext, useState } from "react";

// type themeType = "dark" | "light";
interface themeType {
  theme: "dark" | "light";
  setTheme: () => void;
}

export const ThemeContext = createContext<themeType | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme, setTheme }>
      {children}
    </ThemeContext.Provider>
  );
};
