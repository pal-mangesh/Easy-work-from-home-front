import RegisterContainer from "@containers/Register"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Index(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Get Started">
        <RegisterContainer />
      </DefaultLayout>
    </>
  )
}

export default Index
