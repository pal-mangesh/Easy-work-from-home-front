import Button from "@components/Button"
import Strap from "@components/Strap"
import { navigate } from "gatsby"
import React, { ReactElement } from "react"

interface Props {}

function AboutUsStrap({}: Props): ReactElement {
  return (
    <div>
      <Strap
        className="bg-purple text-white"
        bg={require("@images/strap-bg-2.svg")}
      >
        <div className="w-full md:w-1/4 text-center my-8 md:my-0">
          <h3 className="text-xl font-bold">500+</h3>
          <h5 className="text-xs">Remote WFH Staff</h5>
        </div>
        <div className="w-full md:w-1/4 text-center my-8 md:my-0">
          <h3 className="text-xl font-bold">2000+</h3>
          <h5 className="text-xs">Projects/Clients</h5>
        </div>
        <div className="w-full md:w-1/4 text-center my-8 md:my-0">
          <h3 className="text-xl font-bold">15000+</h3>
          <h5 className="text-xs">Work Hours</h5>
        </div>
        <div className="w-full md:w-1/4 text-center my-8 md:my-0">
          <div className="w-2/3 mx-auto">
            <Button type="secondary" onClick={()=>navigate("/contact")}>Contact Us</Button>
          </div>
        </div>
      </Strap>
    </div>
  )
}

export default AboutUsStrap
