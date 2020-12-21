import React, { ReactElement } from "react"

interface Props {
  color?: string
  children?: any
  className?:string
}

function Heading({ children, color, className }: Props): ReactElement {
  return (
    <h3
      className={"text-2xl relative py-2 inline-block pr-4 " + className}
      style={{ borderBottom: "1px solid black" }}
    >
      <div className={"absolute left-0  h-2 w-1/3 " + color} style={{bottom:"-8px"}} />
      {children}
    </h3>
  )
}

export default Heading
