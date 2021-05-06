import TermsContainer from "@containers/Terms"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Terms(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Terms & Conditions">
        <TermsContainer />
      </DefaultLayout>
    </>
  )
}

export default Terms
