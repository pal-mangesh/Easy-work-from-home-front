import React, { ReactElement } from "react"

interface Props {
  size?: "sm" | "md" | "lg"
  children?: any
  label?: string
  value?: string | number
  onChange?: any
  disabled?: boolean
  type?: "password" | "tel" | "email" | "textarea"
}

function Input({
  size = "sm",
  children,
  value,
  onChange,
  label,
  disabled,
  type,
}: Props): ReactElement {
  const sizes = {
    sm: "p-2",
    md: "py-2 px-4",
    lg: "py-4 px-8",
  }

  const _onChange = (e: any) => {
    const v = e.target.value
    if (onChange) {
      onChange(v)
    }
  }

  return (
    <>
      {type === "textarea" ? (
        <textarea
          disabled={disabled}
          placeholder={label}
          value={value}
          onChange={_onChange}
          className={`bg-gray-100 border border-gray-400 py-3 w-full ${sizes[size]} rounded text-gray-600 outline-none`}
        ></textarea>
      ) : (
        <input
          type={type}
          disabled={disabled}
          placeholder={label}
          value={value}
          onChange={_onChange}
          className={`bg-gray-100 border border-gray-400 py-3 w-full ${sizes[size]} rounded text-gray-600 outline-none`}
        >
          {children}
        </input>
      )}
    </>
  )
}

export default Input
