import { useContext, createContext, useState } from "react";

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
