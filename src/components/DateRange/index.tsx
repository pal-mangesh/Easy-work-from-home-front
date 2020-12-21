import React, { ReactElement } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
interface Props {
  size?: "sm" | "md" | "lg"
  children?: any
  label?: string
  icon?: any
  onChange?: any
  value?: any
  disabled?: boolean
}

function DateRange({
  size = "sm",
  label,
  icon,
  onChange,
  value,
  disabled,
}: Props): ReactElement {
  const sizes = {
    sm: "p-2",
    md: "py-2 px-4",
    lg: "py-4 px-8",
  }
  const [startDate, setStartDate] = React.useState("" as any)

  React.useEffect(() => {
    setStartDate(value ? new Date(value) : "")
  }, [value])

  const _onChange = (val: any) => {
    setStartDate(val)
    if (onChange) {
      onChange(val)
    }
  }
  return (
    <>
      <div
        className={`flex items-center border border-gray-400 py-3 bg-gray-100 w-full ${sizes[size]} rounded text-gray-600 w-full`}
      >
        <div className="flex-1">
          <DatePicker
            disabled={disabled}
            placeholderText={label}
            className="bg-transparent outline-none w-full"
            selected={startDate}
            onChange={_onChange}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        {icon ? (
          <div className="mr-2">
            <img className="w-6 h-6" src={icon} alt={label} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default DateRange
