"use client";
import { createContext, ReactNode, useState } from "react";

export interface ContextProps {
  user: string;
  updateUser: (x: string) => void;
}

export const NameContext = createContext<ContextProps>({
  user: "",
  updateUser: (x) => {},
});

const NameContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>("Kal");

  const updateUser = (x: string) => {
    setUser(x);
  };
  return (
    <NameContext.Provider value={{ user, updateUser }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameContextProvider;
