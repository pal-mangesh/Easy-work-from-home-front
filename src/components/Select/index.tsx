import React, { ReactElement } from "react"

export interface ISelectListItem {
  name?: string
  title?: string
  value: string | number
  icon?: any
}

export interface ISelectProps {
  size?: "sm" | "md" | "lg"
  list?: ISelectListItem[]
  onChange?: any
  label?: string
  value?: any
  disabled?: boolean
  spread?: boolean
  multiSelect?: boolean
}

function Select({
  size = "sm",
  list,
  onChange,
  label,
  value,
  disabled,
  spread,
  multiSelect,
}: ISelectProps): ReactElement {
  const sizes = {
    sm: "2px",
    md: "4px",
    lg: "14px 8px ",
  }

  React.useEffect(() => {
    if (list && list.length) {
      _onChange(list[0].value)(null)
    }
  }, [])

  const _onChange = (val: any) => (e: any) => {
    if (multiSelect) {
      _onMultiSelectChange(val)
    } else {
      const v = val || e.target.value
      if (onChange) {
        onChange(v)
      }
    }
  }

  const _onMultiSelectChange = (val: any) => {
    let v = Array.isArray(value) ? value : []
    if (!v.includes(val)) {
      v.push(val)
    } else {
      v = v.filter((_v: any) => _v !== val)
    }
    onChange(v)
  }

  const isActive = (val: any) => {
    return multiSelect
      ? (value || []).includes(val)
      : JSON.stringify(value) === JSON.stringify(val)
  }

  return (
    <>
      {spread ? (
        <>
          {list && list.length ? (
            <>
              <div className="flex items-center flex-wrap">
                {list.map((item: ISelectListItem, index: number) => (
                  <div
                    className={`${
                      isActive(item.value)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-black"
                    } cursor-pointer text-xs rounded-lg py-4 mr-2 px-4 my-1 w-full md:w-auto`}
                    key={index}
                    onClick={_onChange(item.value)}
                  >
                    {item.title || item.name || item.value}
                  </div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className="flex flex-col md:flex-row md:items-center">
          <div>{label}</div>
          <div className="md:ml-4 flex-1">
            <select
              disabled={disabled}
              style={{
                padding: `${sizes[size]}`,
                background: "transparent",
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
      )}
    </>
  )
}

export default Select
