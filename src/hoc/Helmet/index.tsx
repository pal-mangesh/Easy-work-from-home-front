import React, { ReactElement } from "react"
import Helmet from "react-helmet"

interface Props {
  children?: any
}

function HelmetContainer({ children }: Props): ReactElement {
  return <Helmet>{children}</Helmet>
}

export default HelmetContainer
