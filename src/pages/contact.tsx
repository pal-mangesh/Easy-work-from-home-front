import DefaultLayout from "@layouts/default"
import ContactUsContainer from "@containers/ContactUs"
import React, { ReactElement } from "react"

function Index(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Contact Us">
        <ContactUsContainer />
      </DefaultLayout>
    </>
  )
}

export default Index
