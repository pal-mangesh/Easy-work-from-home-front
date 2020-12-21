import TechnologyAndDataScienceContainer from "@containers/Services/technology-and-data-science"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Services(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Services - Technology & Data Science">
        <TechnologyAndDataScienceContainer />
      </DefaultLayout>
    </>
  )
}

export default Services
