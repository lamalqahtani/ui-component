import React from "react";

// Three main styles for the buttons, primary - secondary - warning and reverse all.
interface ButtonProps {
  icon?: React.ReactElement;
  text?: string;
  style?: keyof typeof style;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  //   attributes: React.HTMLAttributes<HTMLButtonElement>;
}

let style = {
  primary: "primary",
  secondary: "secondary",
  warning: "warning",
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={style[props.style ?? "primary"]}
      //   className={params.className}
      onClick={props.onClick}
    >
      {props.text}
      {props.icon}
    </button>
  );
};
