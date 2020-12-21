import React, { ReactElement } from "react"

export interface ISelectListItem {
  name?: string
  title?: string
  value?: string | number
  icon?: any
}

export interface ISelectProps {
  size?: "sm" | "md" | "lg"
  list?: ISelectListItem[]
  onChange?: any
  label?: string
  value?: any
  disabled?: boolean
}

function Select({
  size = "sm",
  list,
  onChange,
  label,
  value,
  disabled,
}: ISelectProps): ReactElement {
  const sizes = {
    sm: "2px",
    md: "4px",
    lg: "14px 8px ",
  }

  React.useEffect(() => {
    if (list && list.length) {
      onChange(list[0].value)
    }
  }, [])

  const _onChange = (e: any) => {
    const v = e.target.value
    if (onChange) {
      onChange(v)
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center">
        <div>{label}</div>
        <div className="md:ml-4 flex-1">
          <select
            disabled={disabled}
            style={{
              padding: `${sizes[size]}`,
              background:"transparent"
            }}
            className={` w-full bg-transparent   rounded text-white outline-none border border-white`}
            onChange={_onChange}
            placeholder={label}
            title={label}
            value={value}
          >
            <option></option>
            {list && list.length ? (
              <>
                {list.map((item: ISelectListItem, index: number) => (
                  <option key={index} value={item.value}>
                    {item.title || item.name}
                  </option>
                ))}
              </>
            ) : (
              ""
            )}
          </select>
        </div>
      </div>
    </>
  )
}

export default Select
