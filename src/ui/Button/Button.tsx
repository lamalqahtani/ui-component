import React from "react";

// Three main styles for the buttons, primary - secondary - warning and reverse all.
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
  text?: string;
  btnStyle?: keyof typeof style;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  //    React.HTMLAttributes<HTMLButtonElement>;
}

let style = {
  primary: "bg-primary text-white ",
  secondary: "bg-secondary text-white",
  warning: "bg-warning text-white",
};
export const Button = ({
  className,
  text,
  icon,
  btnStyle,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`rounded-md px-2 py-1 flex justify-center items-center 
      ${style[btnStyle ?? "primary"]} 
      ${className}`}
      {...props}
    >
      {text}
      {icon}
    </button>
  );
};
