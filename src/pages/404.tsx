import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Index(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="404">
        We could not find what you are looking for
      </DefaultLayout>
    </>
  )
}

export default Index
