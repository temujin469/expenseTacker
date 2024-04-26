import React, { createContext, useContext, useState } from "react";

const ThemeStateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ThemeContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#ff7849");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeStateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </ThemeStateContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeStateContext);