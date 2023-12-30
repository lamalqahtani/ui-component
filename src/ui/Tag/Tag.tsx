import React from "react";

interface ITagProps {
  text: String;
  className?: String;
  tagStyle?: keyof typeof style;
}
let style = {
  primary: "bg-primary text-white ",
  secondary: "bg-secondary text-white",
  warning: "bg-warning text-white",
  gray: "bg-gray-200",
  orange: "bg-orange-200",
  green: "bg-green-200",
};

export const Tag = ({ text, className, tagStyle, ...props }: ITagProps) => {
  return (
    <p
      className={` text-sm rounded-sm w-fit px-2 ${className} ${
        style[tagStyle ?? "gray"]
      }`}
      {...props}
    >
      {text}
    </p>
  );
};
