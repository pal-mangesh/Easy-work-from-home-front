import ServicesContainer from "@containers/Services"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Services(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Services">
        <ServicesContainer />
      </DefaultLayout>
    </>
  )
}

export default Services
