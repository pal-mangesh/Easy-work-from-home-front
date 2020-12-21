import React, { ReactElement } from "react"
const styles = require("./index.module.css")
export interface ISearchListItem {
  name?: string
  title?: string
  icon?: any
  subTitle?: any
  doc?: any
}

export interface ISearchInputProps {
  size?: "sm" | "md" | "lg"
  list?: ISearchListItem[]
  label?: string
  icon?: any
  valueOnly?: boolean
  onChange?: any
  onInputChange?: any
  value?: any
  onItemClick?: any
  disabled?: boolean
  showLoading?: boolean
}

function SearchInput({
  size = "sm",
  list = [],
  label,
  icon,
  valueOnly = false,
  onChange,
  onInputChange,
  value = "",
  disabled,
  onItemClick,
  showLoading,
}: ISearchInputProps): ReactElement {
  const [val, setVal] = React.useState("")
  const [filtered, setFiltered] = React.useState([] as ISearchListItem[])
  const [focused, setFocused] = React.useState(false)
  const sizes = {
    sm: "p-2",
    md: "py-2 px-4",
    lg: "py-4 px-8",
  }

  React.useEffect(() => {
    setFiltered(list)
  }, [list])
  React.useEffect(() => {
    setVal(value)
  }, [value])

  const onFocus = () => {
    setFocused(true)
  }
  const onBlur = () => {
    setTimeout(() => {
      setFocused(false)
    }, 200)
  }
  const _onChange = (e: any) => {
    const v = e.target.value
    setVal(v)
    setFiltered(filter(v))
    if (onInputChange) {
      onInputChange(v)
    }
  }
  const filter = (input: string) => {
    let _filtered = [...list]
    _filtered = _filtered.filter(
      (item: ISearchListItem) =>
        (item.name &&
          item.name.toLowerCase().indexOf(input.toLowerCase()) > -1) ||
        (item.title &&
          item.title.toLowerCase().indexOf(input.toLowerCase()) > -1)
    )
    return [..._filtered]
  }

  const onSelect = (v: any) => (e: any) => {
    if (onItemClick) {
      onItemClick(v)
    }
    const _v = v.value || v.title || v.name
    setVal(_v)
    setFiltered([...list])
    if (onChange) {
      onChange(v)
    }
  }
  return (
    <>
      <div className="w-full relative ">
        <div
          className={`flex items-center py-3 bg-gray-100 border border-gray-400 w-full ${sizes[size]} rounded text-gray-600`}
        >
          <input
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={label}
            className="bg-transparent outline-none w-full flex-1"
            onChange={_onChange}
            value={val}
          />
          {icon ? (
            <div className="mr-2">
              <img
                className={"w-6 h-6 " + (showLoading ? "hidden" : "")}
                src={icon}
                alt={label}
              />
              <img
                className={"w-6 h-6 " + (showLoading ? "" : "hidden")}
                src={require("@images/loading.gif")}
                alt={label}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {focused && filtered.length && val.length ? (
          <div className="relative w-full mt-2">
            <div
              className={
                styles.list +
                " absolute w-full top-0 left-0 bg-gray-100 p-2 rounded-lg z-10 shadow-lg"
              }
            >
              <ul className="list-none">
                {filtered.map((fi: ISearchListItem, fii: number) => (
                  <li
                    onClick={onSelect(fi)}
                    key={fii}
                    className="p-2 text-gray-600 hover:bg-gray-200 cursor-pointer"
                  >
                    {fi.title || fi.name}
                    {fi.subTitle || ""}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default SearchInput
