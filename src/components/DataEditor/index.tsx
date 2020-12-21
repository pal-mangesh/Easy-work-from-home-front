import Input from "@components/Input"
import React, { ReactElement } from "react"
import Select, { ISelectListItem } from "@components/Select"
import SearchInput from "@components/SearchInput"
import Button from "@components/Button"
import DateRange from "@components/DateRange"
import CheckBox from "@components/CheckBox"
import { Link } from "gatsby"
const styles = require("./index.module.css")

type C_FIELD_TYPE =
  | "INPUT"
  | "PASSWORD"
  | "SELECT"
  | "SEARCH_INPUT"
  | "DATE_TIME"
  | "BUTTON"
  | "DIVIDER"
  | "CHECKBOX"
  | "LINK"
  | "TEXT_AREA"

interface IBaseField {
  name: string
  title?: string
  icon?: string
  type?: C_FIELD_TYPE
  styleType?: "primary" | "secondary" | "default"
  list?: ISelectListItem[]
  flexBasis?: string
  disabled?: boolean
  onChange?: any
  onSearchInputChange?: any
  onClick?: any
  validations?: IFieldValidation[]
  onItemClick?: any
  docField?: string
  value?: any
  className?: string
  advancedSetting?: boolean
  to?: string
  showLoading?: boolean
}

export type IField = IBaseField

export type IFieldValidation = {
  type?: "REQUIRED" | "MIN_LEN" | "MAX_LEN" | "NUMBER" | "REGEX"
  value?: any
}

export interface IDataEditorProps {
  schema?: IField[]
  data?: any
  onChange?: any
  validation?: boolean
  compact?: boolean
}

function DataEditor({
  schema = [],
  data,
  onChange,
  validation = false,
  compact = false,
}: IDataEditorProps): ReactElement {
  const [localData, setLocalData] = React.useState({} as any)
  const [errors, setErrors] = React.useState() as any
  const [advancedVisible, setAdvancedVisible] = React.useState(false)

  React.useEffect(() => {
    setLocalData({ ...localData, ...data })
  }, [data])
  React.useEffect(() => {
    if (schema && schema.length) {
      const _d: any = {}
      for (let f of schema) {
        if (f.value) {
          _d[f.name] = f.value
        }
      }
      setLocalData({ ..._d })
      if (onChange) {
        onChange({ ..._d })
      }
    }
  }, [])

  const onEntityChange = (field?: IField) => (val: any) => {
    if (field && field.name) {
      const _d = { ...localData }
      if (validation) {
        const newErrors = validate(field, val)
        setErrors({ ...newErrors })
      }
      if (field.docField && field.docField.length && val.doc) {
        // console.log(field.docField, val)
        _d[field.docField] = val.doc
        _d[field.name] = val.value || val.title || val.name || val
      } else {
        _d[field.name] = val
      }
      setLocalData({ ..._d })
      if (onChange) {
        onChange(_d)
      }
    }
  }

  const validate = (field: IField, val: any) => {
    if (!field || !field.name) return
    const { validations } = field
    let newErrors: any = {}
    let msg
    if (validations && validations.length) {
      delete newErrors[field.name]
      for (let validation of validations) {
        const { type, value } = validation
        switch (type) {
          case "REQUIRED":
            if (!val || val.length <= 0) {
              msg = "Invalid"
            }
            break
          case "MAX_LEN":
            if (!val || val.length > value || val.length <= 0) {
              msg = `Invalid! Should be less than ${value} characters.`
            }
            break
          case "MIN_LEN":
            if (!val || val.length < value || val.length <= 0) {
              msg = `Invalid! Should be more than ${value} characters.`
            }
            break
          // case "NUMBER":
          //   if (!val || val.length<=0 ) {
          //     msg = `Invalid type`
          //   }
          //   break
          case "REGEX":
            if (!val || val.length <= 0 || !new RegExp(value).test(val)) {
              msg = `Invalid`
            }
            break
        }
        if (msg && msg.length) {
          break
        }
      }
      if (msg && msg.length) {
        newErrors = { ...newErrors, [field.name]: msg }
      }
    }
    return { ...newErrors }
  }

  const validateAll = (schema: IField[]) => {
    let errs = {}
    for (let field of schema) {
      if (field.name && field.name.length) {
        let err = validate(field, localData[field.name])
        errs = { ...errs, ...err }
      }
    }
    return errs
  }

  const _onClick = (field: IField) => (e: any) => {
    if (field.onClick) {
      if (validation) {
        const _errors = validateAll(schema)
        field.onClick(_errors, localData)
      } else {
        field.onClick(undefined, localData)
      }
    }
  }

  return (
    <>
      <div className="w-full flex flex-wrap">
        {schema &&
          schema.map((field: IField, i: number) => {
            const v =
              field && field.name && (localData[field.name] || field.value)
            return (
              <>
                <div
                  key={i}
                  className={
                    "w-full p-2 " +
                    styles.field +
                    (field.className ? ` ${field.className}` : "") +
                    (compact && field.advancedSetting && !advancedVisible
                      ? " hidden md:block"
                      : "")
                  }
                  style={{
                    flexBasis: field.flexBasis || "auto",
                  }}
                >
                  {field.type === "DIVIDER" ? (
                    <div className="flex items-center font-bold text-gray-600 w-full ">
                      <div className="mr-2">{field.title || field.name}</div>
                      <div className="flex-1 border border-l-0 border-r-0 border-t-0 border-b-2 h-2" />
                    </div>
                  ) : field.type === "CHECKBOX" ? (
                    <CheckBox
                      disabled={field.disabled}
                      label={field.title}
                      onChange={onEntityChange(field)}
                      checked={v}
                    />
                  ) : field.type === "INPUT" ? (
                    <Input
                      disabled={field.disabled}
                      label={field.title}
                      onChange={onEntityChange(field)}
                      value={v}
                    />
                  ) : field.type === "TEXT_AREA" ? (
                    <Input
                      disabled={field.disabled}
                      label={field.title}
                      onChange={onEntityChange(field)}
                      value={v}
                      type="textarea"
                    />
                  ) : field.type === "PASSWORD" ? (
                    <Input
                      type="password"
                      disabled={field.disabled}
                      label={field.title}
                      onChange={onEntityChange(field)}
                      value={v}
                    />
                  ) : field.type === "SELECT" ? (
                    <Select
                      disabled={field.disabled}
                      label={field.title}
                      list={field.list}
                      onChange={onEntityChange(field)}
                      value={v}
                      size={"lg"}
                    />
                  ) : field.type === "SEARCH_INPUT" ? (
                    <SearchInput
                      disabled={field.disabled}
                      icon={field.icon}
                      label={field.title}
                      list={field.list}
                      onChange={onEntityChange(field)}
                      onInputChange={field.onSearchInputChange}
                      value={v}
                      showLoading={field.showLoading}
                    />
                  ) : field.type === "DATE_TIME" ? (
                    <DateRange
                      disabled={field.disabled}
                      label={field.title}
                      icon={field.icon}
                      onChange={onEntityChange(field)}
                      value={v}
                    />
                  ) : field.type === "BUTTON" ? (
                    <Button disabled={field.disabled} onClick={_onClick(field)}>
                      {field.title}
                    </Button>
                  ) : field.type === "LINK" ? (
                    <Link
                      className={field.className + " flex items-center"}
                      to={field.to || "#"}
                    >
                      <div className="mr-2">{field.title || field.name}</div>
                      <div>
                        <img src={require("@images/chevron-right.svg")} />
                      </div>
                    </Link>
                  ) : (
                    ""
                  )}

                  {errors &&
                  field.name &&
                  Object.keys(errors).length &&
                  errors[field.name] &&
                  errors[field.name].length ? (
                    <div className="text-red-500 text-xs px-2 py-1">
                      {errors[field.name]}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )
          })}
      </div>
    </>
  )
}

export default DataEditor
