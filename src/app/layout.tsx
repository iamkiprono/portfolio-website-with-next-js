import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

import { ThemeContextProvider } from "@/context/ThemeContext";

import Footer from "./components/Footer";
import ThemeComponent from "./components/ThemeComponent";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiprono Collins",
  description: "Personal Web Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeComponent>
            <Nav />
            {/* <Navbar /> */}
            {children}
            <Footer />
          </ThemeComponent>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
