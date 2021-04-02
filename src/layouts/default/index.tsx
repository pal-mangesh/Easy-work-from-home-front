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
        {/* <script type="text/javascript">
          {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/60365c89385de40757199188/1eva5ivog';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        `}
        </script> */}
      </HelmetContainer>
      <div>
        <Header safeAreaPadding="0px" />
        <SingleSignOn />

        <div  className="min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
