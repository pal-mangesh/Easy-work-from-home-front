import React, { ReactElement } from "react"

interface Props {
  checked?: boolean
  label?: string
  onChange?: any
  disabled?: boolean
}

function CheckBox({
  checked = false,
  label,
  onChange,
  disabled,
}: Props): ReactElement {
  const [chk, setChk] = React.useState(false)
  React.useEffect(() => {
    setChk(checked)
  }, [checked])
  const _onChange = (e: any) => {
    setChk(!chk)
    if (onChange) {
      onChange(!chk)
    }
  }
  return (
    <>
      <label className="flex items-center">
        <div>
          <input
            disabled={disabled}
            type="checkbox"
            checked={chk}
            onChange={_onChange}
          />
        </div>
        <div className="ml-2">{label}</div>
      </label>
    </>
  )
}

export default CheckBox
