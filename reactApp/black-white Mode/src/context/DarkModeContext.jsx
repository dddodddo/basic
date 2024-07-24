import { createContext, useState } from "react";

export const DarkModeContext = createContext();

//procider는 칸막이 만드는 역할
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode); //이전 상태값을 받아서 반대로 만든다

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
