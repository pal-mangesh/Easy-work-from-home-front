import React, { Component } from "react"
import { Provider } from "redux-zero/react"
import { Store } from "@utils/Store"

interface Props {
  element?: any
}

const StoreWrapper = ({ element }: Props) => {
  return (
    <>
      <Provider store={Store}>{element}</Provider>
    </>
  )
}

export default StoreWrapper
