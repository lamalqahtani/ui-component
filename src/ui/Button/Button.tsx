import React from "react";

// Three main styles for the buttons, primary - secondary - warning and reverse all.
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
  text?: string;
  btnStyle?: keyof typeof style;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  //    React.HTMLAttributes<HTMLButtonElement>;
}

let style = {
  primary: "primary",
  secondary: "secondary",
  warning: "warning",
};
export const Button = ({
  className,
  text,
  icon,
  btnStyle,
  ...props
}: ButtonProps) => {
  return (
    <button className={style[btnStyle ?? "primary"]} {...props}>
      {text}
      {icon}
    </button>
  );
};
