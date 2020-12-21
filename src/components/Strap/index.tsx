import React, { ReactElement } from "react"

interface Props {
  children?: any
  className?: string
  style?: any
  bg?: string
}

function Strap({ children, className, style, bg }: Props): ReactElement {
  return (
    <>
      <div
        className={`w-full relative ${className} `}
        style={{ minHeight: "150px" }}
      >
        <div
          className="pointer-events-none absolute w-full h-full bg-no-repeat md:bg-cover bg-contain bg-center"
          style={{
            backgroundImage: `url(${bg || require("@images/strap-bg.svg")})`,
            zIndex: 0,
            ...style,
          }}
        />
        <div className="max-w-1366 m-auto flex flex-col md:flex-row justify-center items-center py-16">
          {children}
        </div>
      </div>
    </>
  )
}

export default Strap
