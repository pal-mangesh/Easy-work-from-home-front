import React, { ReactElement } from "react"
import { connect } from "redux-zero/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Input from "@components/Input"
import Button from "@components/Button"
interface Props {}

function Footer({}: Props): ReactElement {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          footerMenu {
            items {
              title
              items {
                title
                href
              }
            }
          }
        }
      }
    }
  `)
  const { footerMenu, title } = data.site.siteMetadata
  const { items } = footerMenu || {}
  return (
    <>
      <div style={{borderTop:"5px solid #2898FF"}} className="flex flex-col justify-center items-center bg-purple text-white w-full px-8 py-24">
        <div className="max-w-1366 mx-auto w-full flex flex-col md:flex-row flex-wrap">
          <div className="w-full md:w-1/3">
            <div className="mb-2 flex justify-center md:justify-start">
              <img src={require("@images/logo-footer.svg")} />
            </div>
            <div className="text-sm text-gray-400 text-center md:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              aliquip ex ea
            </div>
          </div>
          <div className="md:pl-16 md:w-1/3">
            <div className="flex flex-wrap text-center md:text-left ">
              {items && items.length ? (
                <>
                  {items.map((item: any) => (
                    <>
                      <div className="my-2 w-full md:w-1/2">
                        <div className="mb-2 font-bold text-lg">
                          {item.title}
                        </div>
                        <div className="flex flex-col ">
                          {item.items && item.items.length ? (
                            <>
                              {item.items.map((iitem: any) => (
                                <>
                                  <div className="flex-1 text-sm my-2 ">
                                    <Link
                                      className="text-gray-400 hover:text-white"
                                      to={iitem.href}
                                    >
                                      {iitem.title}
                                    </Link>
                                  </div>
                                </>
                              ))}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="md:pl-16 md:w-1/3">
            <div>
              <Input label="Enter Email-ID to subscribe" />
            </div>
            <div>
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const mapToProps = (state: any) => ({})

export default connect(mapToProps)(Footer)
