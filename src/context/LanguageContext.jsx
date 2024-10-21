import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [direction, setDirection] = useState("ltr");

  // Toggle between RTL and LTR
  const toggleDirection = () => {
    setDirection((prevDirection) => (prevDirection === "ltr" ? "rtl" : "ltr"));
  };

  return (
    <LanguageContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </LanguageContext.Provider>
  );
};
