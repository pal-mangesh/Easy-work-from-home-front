import PortfolioContainer from "@containers/Portfolio"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Index(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Contact Us">
        <PortfolioContainer />
      </DefaultLayout>
    </>
  )
}

export default Index
