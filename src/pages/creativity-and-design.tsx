import ServicesContainer from "@containers/Services"
import CreativityAndDesignContainer from "@containers/Services/creativity-and-design"

import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Services(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Services - Creativity & Design">
        <CreativityAndDesignContainer />
      </DefaultLayout>
    </>
  )
}

export default Services