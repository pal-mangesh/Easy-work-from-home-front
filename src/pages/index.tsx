import HomeContainer from "@containers/Home"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Index(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Home">
        <HomeContainer />
      </DefaultLayout>
    </>
  )
}

export default Index
