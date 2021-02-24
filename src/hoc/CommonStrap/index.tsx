import Button from "@components/Button"
import Strap from "@components/Strap"
import { navigate } from "gatsby"
import React, { ReactElement } from "react"

interface Props {}

function CommonStrap({}: Props): ReactElement {
  return (
    <div>
      <Strap className="bg-blue-500">
        <div className="px-4 md:px-0 text-center">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Deliver Great Experiences. Grow Faster. Start Today!
            </h3>
          </div>
          <div className="mt-8 w-1/2 md:w-1/3 mx-auto">
            <Button type="secondary" onClick={()=>navigate("/contact")}>Contact Us</Button>
          </div>
        </div>
      </Strap>
    </div>
  )
}

export default CommonStrap
