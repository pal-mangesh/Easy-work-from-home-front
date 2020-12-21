import AboutUsContainer from "@containers/AboutUs"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function AboutUs(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="About Us">
        <AboutUsContainer />
      </DefaultLayout>
    </>
  )
}

export default AboutUs
