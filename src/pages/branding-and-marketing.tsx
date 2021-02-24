import ServicesContainer from "@containers/Services"
import BrandingAndMarketingContainer from "@containers/Services/branding-and-marketing"

import DefaultLayout from "@layouts/default"
import React, { ReactElement } from "react"

function Services(): ReactElement {
  return (
    <>
      <DefaultLayout pageTitle="Services - Branding & Marketing">
        <BrandingAndMarketingContainer />
      </DefaultLayout>
    </>
  )
}

export default Services