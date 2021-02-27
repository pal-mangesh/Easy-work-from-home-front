import React, { ReactElement } from "react"

interface Props {
  size?: "sm" | "md" | "lg"
  children?: any
  label?: string
  value?: string | number
  onChange?: any
  disabled?: boolean
  type?: "text" | "phone" | "email" | "dob" | "textarea"
  prefix?: string
  focus?: boolean
}

function Input({
  size = "sm",
  children,
  value,
  onChange,
  label,
  disabled,
  type,
  prefix,
  focus,
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
      <div className="flex items-center w-full">
        {prefix && prefix.length ? <div className="flex-shrink-0 pr-2">{prefix}</div> : ""}
        <div className="flex-1">
          {type === "textarea" ? (
            <textarea
              autoFocus={focus}
              disabled={disabled}
              placeholder={label}
              value={value}
              onChange={_onChange}
              className={`bg-gray-100 border border-gray-400 py-3 w-full ${sizes[size]} rounded text-gray-600 outline-none`}
            ></textarea>
          ) : (
            <input
              autoFocus={focus}
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
        </div>
      </div>
    </>
  )
}

export default Input
