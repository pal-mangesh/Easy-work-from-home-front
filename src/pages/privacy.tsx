import PrivacyContainer from "@containers/Privacy"
import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Privacy(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Privacy Policy">
        <PrivacyContainer />
      </DefaultLayout>
    </>
  )
}

export default Privacy
