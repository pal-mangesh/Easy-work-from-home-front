import React, { ReactElement } from "react"

interface Props {
  size?: "sm" | "md" | "lg"
  children?: any
  onClick?: any
  disabled?: boolean
  type?: "primary" | "secondary"
  className?: string
}

function Button({
  size = "lg",
  children,
  onClick,
  disabled,
  type = "primary",
  className,
}: Props): ReactElement {
  const sizes = {
    sm: "p-2",
    md: "py-2 px-4",
    lg: "py-4 px-8",
  }

  const colors = {
    primary: "active:bg-blue-600 hover:bg-blue-400 bg-blue-500 text-white",
    secondary: "active:bg-gray-200 hover:bg-gray-100 bg-white text-black",
  }

  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={` w-full py-3 ${colors[type]}  ${sizes[size]} rounded outline-none  ${className}`}
      >
        {children}
      </button>
    </>
  )
}

export default Button
