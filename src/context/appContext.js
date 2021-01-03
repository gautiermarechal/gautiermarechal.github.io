import React, { useState, createContext, useContext } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [showLowerBar, setShowLowerBar] = useState(false);

  const handleState = (value) => {
    setShowLowerBar(value);
  };

  return (
    <AppContext.Provider value={{ showLowerBar, handleState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
