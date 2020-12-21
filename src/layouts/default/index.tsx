import Header from "@hoc/Header"
import React, { ReactElement } from "react"
import HelmetContainer from "@hoc/Helmet"
import { useStaticQuery, graphql } from "gatsby"
import "@css/index.css"
import SingleSignOn from "@hoc/SSO"
import Footer from "@hoc/Footer"
import ArrangeCallbackForm from "@hoc/ArrangeCallbackForm"

interface IDefaultLayoutProps {
  children?: any
  pageTitle?: string
}

function DefaultLayout({
  children,
  pageTitle,
}: IDefaultLayoutProps): ReactElement {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title
  return (
    <>
    <ArrangeCallbackForm />
      <HelmetContainer>
        <title>
          {title}
          {pageTitle ? ` :: ${pageTitle}` : ""}
        </title>
      </HelmetContainer>
      <div>
        <Header safeAreaPadding="120px" />
        <SingleSignOn />
        
        <div style={{ paddingTop: "120px" }} className="min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
