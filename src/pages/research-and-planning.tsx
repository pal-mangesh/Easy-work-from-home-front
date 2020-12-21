import ServicesContainer from "@containers/Services"
import ResearchAndDevelopmentContainer from "@containers/Services/research-and-development"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Services(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Services - Research & Planning">
        <ResearchAndDevelopmentContainer />
      </DefaultLayout>
    </>
  )
}

export default Services
