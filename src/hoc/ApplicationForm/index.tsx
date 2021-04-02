import React, { ReactElement } from "react"
import Button from "@components/Button"
import Input from "@components/Input"
import Select from "@components/Select"
const styles = require("./index.module.css")
export interface IFormFieldItem {
  name?: string
  title?: string
  value: string
  icon?: string
}

export interface IFormField {
  label: string
  title?: string
  name: string
  type: "input" | "select" | "range" | "hidden"
  subType?: "text" | "phone" | "email" | "dob" | "textarea"
  items?: IFormFieldItem[]
  spread?: boolean
  placeholder?: string
  prefix?: string
  validation?: "required" | "dob" | "email" | "length" | "phone"
  minLength?: number
  defaultValue?: any
  multiSelect?: boolean
  wrapperClass?: string
}

export interface IFormSchema {
  title: string
  fields: IFormField[]
  type?: "input" | "confirm"
  onNext?: any
  nextText?: string
}

interface Props {
  schema?: IFormSchema[]
  onChange?: Function
  onSubmit?: Function
  onNext?: Function
  showConfirmation?: boolean
  headline?: string
  data?: any
  disabled?: boolean
  loading?: boolean
}

function ApplicationFormFull({
  schema,
  onChange,
  onSubmit,
  showConfirmation,
  headline,
  disabled,
  loading,
}: Props): ReactElement {
  const [currentField, setCurrentField] = React.useState(0)
  const [localData, setLocalData] = React.useState({} as any)
  const [errors, setErrors] = React.useState({} as any)
  React.useEffect(() => {
    if (schema && schema.length) {
      let updatedData: any = {}
      for (let stage of schema) {
        for (let field of stage.fields) {
          // if (field.items && field.items.length) {
          //   updatedData = {
          //     ...updatedData,
          //     [field.name]: field.multiSelect
          //       ? [field.items[0].value]
          //       : field.items[0].value,
          //   }
          // } else {
          updatedData = {
            ...updatedData,
            [field.name]: field.defaultValue || "",
          }
          // }
        }
      }
      setLocalData({ ...updatedData })
      if (onChange) {
        onChange({ ...updatedData })
      }
    }
  }, [schema])

  const validate = (data: any, fields: IFormField[]) => {
    const _errors: any = {}
    for (let field of fields) {
      const val = data[field.name]
      switch (field.validation) {
        case "required":
          if (!val || val.length <= 0 || val === "") {
            _errors[field.name] = "This field is required!"
          }
          break
        case "email":
          if (!val || val.length <= 0 || val === "") {
            _errors[field.name] = "This field is required!"
          }
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          const matched = re.test(val.toLowerCase())
          if (!matched) {
            _errors[field.name] = "Please provide correct Email-ID!"
          }
          break
        case "phone":
          if (
            !val ||
            val.length < (field.minLength || 10) ||
            val === "" ||
            !/^[0-9]*$/.test(val)
          ) {
            _errors[
              field.name
            ] = `Please provide correct phone number! (min : ${
              field.minLength || 10
            })`
          }
          break
        case "length":
          if (!val || val === "" || val.length < (field.minLength || 0)) {
            _errors[
              field.name
            ] = `Invalid value! (minlength ${field.minLength} chars)`
          }

          break
      }
    }
    setErrors({ ..._errors })
    const keys = Object.keys(_errors)
    if (keys.length) {
      const ele = document.getElementById("FORM_FIELD_" + keys[0])
      const scrollTo = ele ? ele.offsetTop - 200 : 0
      window.scrollTo({ behavior: "smooth", top: scrollTo })
    } else {
    }
    return !keys.length
  }

  const handleOnNext = (e: any) => {
    if (!schema) return

    if (!validate(localData, schema[currentField].fields)) {
      return
    }

    if (schema[currentField].onNext) {
      schema[currentField].onNext(localData)
    }

    if (currentField >= schema.length - 1) {
      submitForm(localData)
      return
    }
    window.scrollTo({ behavior: "smooth", top: 0 })
    const cf = currentField + 1
    setCurrentField(cf)
    if (onChange) {
      onChange(localData)
    }
  }
  const handleOnBack = (e: any) => {
    window.scrollTo({ behavior: "smooth", top: 0 })
    setCurrentField(currentField - 1)
  }

  const submitForm = (data: any) => {
    if (onSubmit) {
      onSubmit(data)
    }
  }

  const onFormFieldChange = (field: string) => {
    return (val: any) => {
      const updatedData = { ...localData, [field]: val }
      setLocalData(updatedData)
      if (onChange) {
        onChange(updatedData)
      }
    }
  }

  const switchToField = (fi: number) => (e: any) => {
    setCurrentField(fi)
  }

  return (
    <>
      {schema && schema.length ? (
        <div className="px-8 bg-white py-4  md:mx-0 mx-4  rounded-lg relative">
          {loading ? (
            <div
              className="rounded-lg absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.8)", zIndex: 1 }}
            >
              <h3 className="text-2xl font-bold"> Loading ...</h3>
            </div>
          ) : (
            ""
          )}
          <div className="mb-8">
            <h3 className="text-xl text-blue-800 font-bold text-center md:text-left">
              {headline}
            </h3>
          </div>
          <div className="block md:hidden mb-4">
            <h3 className="font-bold text-xl">{schema[currentField].title}</h3>
          </div>
          {schema && currentField < schema.length ? (
            <div className="flex w-full mb-8">
              {schema?.map((stage: IFormSchema, index: number) => (
                <>
                  <div className={"flex-1 px-1"}>
                    <div className={"mb-4 hidden md:block"}>
                      <h3
                        className={
                          "font-bold text-lg " +
                          (index < currentField
                            ? "text-green-300 opacity-25"
                            : index === currentField
                            ? "text-black"
                            : "text-gray-300")
                        }
                      >
                        {stage.title}
                      </h3>
                    </div>
                    <div
                      // onClick={switchToField(index)}
                      className={
                        "w-full h-2  " +
                        (index < currentField
                          ? "bg-green-300 opacity-25"
                          : index <= currentField
                          ? "bg-blue-700"
                          : "bg-gray-400")
                      }
                    />
                  </div>
                </>
              ))}
            </div>
          ) : (
            ""
          )}

          <div
            className=" overflow-hidden"
            style={{
              height: currentField < schema?.length ? "auto" : "0px",
            }}
          >
            {schema?.map((stage: IFormSchema, index: number) => (
              <div
                className={
                  styles.item +
                  " flex flex-wrap w-full " +
                  (index === currentField
                    ? styles.itemActive
                    : " h-0 opacity-0 overflow-hidden pointer-events-none")
                }
              >
                {stage.fields.map((field: IFormField, index: number) =>
                  field.type !== "hidden" ? (
                    <>
                      <div
                        id={"FORM_FIELD_" + field.name}
                        className={` mb-8 w-full md:w-1/2 md:px-2 ${field.wrapperClass}`}
                      >
                        <h3 className=" font-bold block text-left">
                          {field.label}
                        </h3>
                        <div
                          className="my-4 text-center relative"
                          onKeyDown={(e: any) => {
                            if (e.key === "Enter") {
                              handleOnNext(e)
                            }
                          }}
                        >
                          {field.type === "input" ? (
                            <Input
                              onChange={onFormFieldChange(field.name)}
                              type={field.subType || "text"}
                              label={field.placeholder || field.label}
                              prefix={field.prefix}
                              focus={index === currentField}
                              value={localData[field.name]}
                            />
                          ) : field.type === "select" ? (
                            <Select
                              spread={field.spread}
                              onChange={onFormFieldChange(field.name)}
                              list={field.items}
                              value={localData[field.name]}
                              multiSelect={field.multiSelect}
                            />
                          ) : (
                            ""
                          )}
                          <div className=" ">
                            {errors[field.name] && errors[field.name].length ? (
                              <>
                                <div
                                  style={{ top: "5px", right: "10px" }}
                                  className="bg-blue-400 absolute  text-white text-left px-2 pt-1 inline-block rounded my-2"
                                >
                                  !
                                </div>
                                <div className="flex justify-start">
                                  <div className="bg-blue-400  text-white text-left px-2 pt-1 inline-block rounded my-2">
                                    {errors[field.name]}
                                  </div>
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )
                )}
              </div>
            ))}
            <div className="clear-left" />
          </div>
          {showConfirmation && currentField === schema.length - 1 ? (
            <>
              <div>
                <div className="">
                  <h4 className="text-2xl font-bold">Preview</h4>
                </div>
                <hr className="my-4" />
                <div
                  //   style={{ maxWidth: "600px" }}
                  className="flex flex-wrap flex-col md:flex-row mx-auto"
                >
                  {schema.map((stage: IFormSchema) =>
                    stage.fields.map((f: IFormField) => (
                      <div className="w-full md:w-1/2 flex py-2">
                        <div className="font-bold text-lg mr-2">
                          {f.title} :{" "}
                        </div>
                        <div>
                          {localData[f.name] || (
                            <i className="text-gray-500">N/A</i>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="bg-white bottom-0 left-0 right-0 md:static mt-4 flex justify-evenly md:justify-end items-center">
            <div className={"mr-4 " + (currentField > 0 ? "" : "hidden")}>
              {/* <Button
                showShadow={false}
                type="secondary"
                title="Back"
                onClick={handleOnBack}
              /> */}
              <button
                disabled={disabled}
                onClick={handleOnBack}
                className="bg-gray-200 px-8 w-full md:px-24 py-4 rounded text-center  hover:bg-gray-100 cursor-pointer"
              >
                Back
              </button>
            </div>
            <div className=" flex-1 md:flex-none ">
              <button
                disabled={disabled}
                onClick={handleOnNext}
                className="bg-blue-700 md:px-24 w-full py-4 rounded text-center text-white hover:bg-blue-500 cursor-pointer"
              >
                {schema[currentField].nextText ||
                  (currentField >= schema.length - 1 ? "SUBMIT" : "Next")}
              </button>
              {/* <Button
              className="w-full shadow-xl text-center "
              showShadow={false}
                title={currentField >= schema.length - 1 ? "Submit" : "Next"}
                onClick={handleOnNext}
              /> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default ApplicationFormFull
