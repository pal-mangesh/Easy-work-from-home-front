import React, { ReactElement } from "react"

interface Props {
  title?: string
  children?: any
}

function ServiceInfoStrap({ title, children }: Props): ReactElement {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="md:pr-8 border-r-0 md:border-r-4 border-black flex-shrink-0">
          <img
            style={{ width: "150px", height: "150px" }}
            src={require("@images/logo-cube.svg")}
          />
        </div>
        <div className="w-full md:w-1/3 md:pl-8 my-4 md:my-0 ">
          <h3 className="text-2xl ">{title}</h3>
        </div>
        <div className="text-justify px-8">{children}</div>
      </div>
    </div>
  )
}

export default ServiceInfoStrap
