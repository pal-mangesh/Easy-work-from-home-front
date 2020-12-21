import React, { ReactElement } from "react"
import DateTime from "@utils/DateTime"
const style = require("./index.module.css")

function HeroContainer(): ReactElement {
  const dt1 = DateTime.Moment(new Date()).format("LL")
  const dt2 = DateTime.Moment(new Date())
    .add(7, "d")
    .format("LL")

  
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${require("@images/bg.png")})` }}
        className={`${style.wrapper} bg-blue-500 text-white md:px-4 bg-no-repeat bg-cover bg-center`}
      >
        <div className="max-w-1366 mx-auto relative">
          <div
            className={`flex flex-col-reverse md:flex-row flex-wrap items-start  md:py-8`}
          >
            <div className="flex-1 flex-shrink-0 hidden md:block m-4">
              {/* {heading} */}
            </div>
            <div className="flex justify-end relative w-full md:w-auto">
              
              {/* <img src={require("@images/illustration.svg")} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContainer
