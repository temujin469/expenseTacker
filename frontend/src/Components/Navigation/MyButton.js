import React from "react";
import { useThemeContext } from "../../context/ThemeContext";

const MyButton = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  onPress,
}) => {
  const { setIsClicked, initialState } = useThemeContext();

  return (
    <button
      type="button"
      onClick={() => {
        setIsClicked(initialState);
        onPress && onPress();
      }}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default MyButton;