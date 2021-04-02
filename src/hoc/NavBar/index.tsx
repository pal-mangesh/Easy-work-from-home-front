import Auth from "@utils/Auth"
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { ReactElement } from "react"
const styles = require("./index.module.css")
interface INavBarProps {
  currentLocation?: any
  onCurrentLocationClick?: any
  jwt?: string
  className?: string
  linkClassName?: string
}

function NavBar({
  currentLocation,
  onCurrentLocationClick,
  jwt,
  className,
  linkClassName,
}: INavBarProps): ReactElement {
  const [visible, setVisible] = React.useState(false)
  const data = useStaticQuery(graphql`
    query NavBarQuery {
      site {
        siteMetadata {
          title
          nav {
            logo {
              title
            }
            menu {
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

  const onMenuIconClick = () => {
    setVisible(!visible)
  }

  const onLoginClick = () => {
    Auth.showLogin()
    setVisible(false)
  }

  const onLinkClick = () => {
    setVisible(false)
  }

  const { nav, title } = data.site.siteMetadata
  const { logo, menu } = nav || {}

  return (
    <>
      <div className={`relative w-full ${className}`}>
        <div className="flex items-center w-full">
          <div className="text-black text-lg md:text-3xl flex flex-1 items-center">
            <Link
              className="text-black hover:text-gray-200  flex items-center"
              to="/"
            >
              <img
                // style={{ width: "32px" }}
                src={require("@images/logo.svg")}
              />
            </Link>
          </div>

          <div className=" hidden md:flex justify-end ml-8 flex-1">
            {menu?.items && menu?.items.length ? (
              <>
                <ul className="flex items-stretch list-none h-full">
                  {menu?.items.map((item: any) => (
                    <>
                      <li className={"relative " + styles.menuItem}>
                        <Link
                          className={`text-black hover:text-gray-400 ${linkClassName}`}
                          to={item.href}
                        >
                          <span className="py-2 px-8  ">{item.title}</span>
                        </Link>
                        {item.items && item.items.length ? (
                          <>
                            <div
                              style={{ minWidth: "250px" }}
                              className={
                                "absolute w-full py-4 " + styles.subMenu
                              }
                            >
                              <ul className="py-2 bg-white rounded-lg shadow-2xl flex flex-col">
                                {item.items.map((si: any) => (
                                  <Link
                                    className={`text-black hover:text-gray-100 hover:bg-blue-500 ${linkClassName}`}
                                    to={si.href || "#"}
                                  >
                                    <li className="p-4 ">{si.title}</li>
                                  </Link>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </li>
                    </>
                  ))}
                </ul>
              </>
            ) : (
              ""
            )}
          </div>
          <div className=" hidden md:flex justify-end ">
            {/* <div
              className="flex items-center cursor-pointer mr-2"
              onClick={onCurrentLocationClick}
            >
              <span className="md:hidden">Location</span>
              <span className="hidden md:block mr-2">
                <img
                  src={require("@images/location_icon.svg")}
                  className="w-4"
                />
              </span>{" "}
              <span className="text-gray-300">
                {currentLocation ? currentLocation.name : "Not Selected"}
              </span>
            </div> */}
            {/* {jwt && jwt.length ? (
              ""
            ) : (
              <div className="flex">
                <a
                  onClick={onLoginClick}
                  className="flex items-center text-black hover:text-gray-800 ml-2"
                  href="#"
                >
                  <img
                    className="w-4 mr-2"
                    src={require("@images/lock_icon.svg")}
                  />
                  <span>Account</span>
                </a>
              </div>
            )} */}
          </div>
          <div className="flex md:hidden flex-1 justify-end">
            {!visible ? (
              <img
                onClick={onMenuIconClick}
                className="w-8 cursor-pointer"
                src={require("@images/menu_icon.svg")}
              />
            ) : (
              <img
                onClick={onMenuIconClick}
                className="w-8 cursor-pointer"
                src={require("@images/close-icon.svg")}
              />
            )}
          </div>
        </div>
        {visible ? (
          <div style={{top:"50px"}} className="absolute w-full flex flex-col md:hidden bg-gray-100 rounded-lg mt-8 shadow-xl overflow-hidden">
            {menu?.items && menu?.items.length ? (
              <>
                <ul className="flex flex-col list-none w-full cursor-pointer">
                  {menu?.items.map((item: any) => (
                    <>
                      <Link
                        className="text-gray-800 hover:text-gray-700"
                        to={item.href}
                        onClick={onLinkClick}
                      >
                        <li className="px-4 py-4 hover:bg-gray-300 w-full">
                          {item.title}
                        </li>
                      </Link>
                      {item.items && item.items.length ? (
                        <>
                          {item.items.map((sitem: any) => (
                            <>
                              <Link
                                className="text-gray-800 hover:text-gray-700"
                                to={sitem.href}
                                onClick={onLinkClick}
                              >
                                <li className="pl-8 pr-4 py-4 hover:bg-gray-300 w-full">
                                  {sitem.title}
                                </li>
                              </Link>
                            </>
                          ))}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </ul>
              </>
            ) : (
              ""
            )}
            <hr />
            {/* <div className=" m-4  text-black justify-end mr-4">
              <div
                className="inline-block cursor-pointer mb-4"
                onClick={() => {
                  onLinkClick()
                  onCurrentLocationClick()
                }}
              >
                Location :{" "}
                <span className="text-gray-500">
                  {currentLocation ? currentLocation.name : "Not Selected"}
                </span>
              </div>
              {jwt && jwt.length ? (
                ""
              ) : (
                <div className="flex">
                  <a
                    onClick={onLoginClick}
                    className="flex items-center text-gray-500 hover:text-gray-400"
                    href="#"
                  >
                    <span>Login</span>
                  </a>
                </div>
              )}
            </div> */}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default NavBar
