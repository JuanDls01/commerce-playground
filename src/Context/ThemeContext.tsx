import React, { createContext, useState, useContext, useEffect } from "react";

export const themes = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
};

const actualTheme: string | null = !localStorage.getItem("theme")
  ? themes.dark
  : localStorage.getItem("theme");

type themeContextType = {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
};

export const ThemeContext = createContext<themeContextType | undefined>(
  undefined
);

type props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState(actualTheme);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  return context;
};
