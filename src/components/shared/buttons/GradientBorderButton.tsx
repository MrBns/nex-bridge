import React from "react";

type TProps = {
  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
  className?: string;
  children?: React.ReactNode;
  variant: "glow" | "minimal";
};

export default function GradientBorderButton(props: TProps) {
  return (
    <button
      onClick={props.onClick}
      className={
        `gradient-button ${props.variant} text-[#1C75BC]  rounded-[10px] ` +
        props.className
      }
    >
      {props.children}
    </button>
  );
}
