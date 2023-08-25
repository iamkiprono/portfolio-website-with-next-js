import { ThemeContext, themeType } from "@/context/ThemeContext";
import { useContext } from "react";

const useTheme = () => useContext(ThemeContext) as themeType;

export default useTheme;
