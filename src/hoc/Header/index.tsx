import LocationSelector from "@hoc/LocationSelector"
import NavBar from "@hoc/NavBar"
import Cookies from "@utils/Cookies"
import { Store } from "@utils/Store"
import React, { ReactElement } from "react"
import { connect } from "redux-zero/react"
import Auth from "@utils/Auth"
import { graphql, useStaticQuery } from "gatsby"
interface Props {
  safeAreaPadding?: string
  currentLocation?: any
  jwt?: string
}

function Header({
  safeAreaPadding,
  currentLocation,
  jwt,
}: Props): ReactElement {
  const [locationSelectorVisible, setLocationSelectorVisible] = React.useState(
    false
  )

  const [scrolled, setScrolled] = React.useState(false)
  const ele = React.useRef(null as any)

  const data = useStaticQuery(graphql`
    query TopBarQuery {
      site {
        siteMetadata {
          info {
            contact
            email
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    if (currentLocation && currentLocation !== "" && locationSelectorVisible) {
      setLocationSelectorVisible(false)
    }
  }, [currentLocation])

  React.useEffect(() => {
    const ll = Cookies.getCookie("__ll")
    if (!ll || ll === "") {
      setLocationSelectorVisible(true)
    } else {
      try {
        const json = JSON.parse(ll)
        Store.setState({ rootLocation: json })
      } catch (e) {
        console.error(e)
      }
    }

    // setTimeout(() => setEle(document.getElementById("HEADER_BG")), 500)
    document.addEventListener("scroll", scrollListener)
    return () => {
      document.removeEventListener("scroll", scrollListener)
    }
  }, [])

  const scrollListener = (e: any) => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    if (ele && ele.current) ele.current.style.opacity = window.scrollY / 50 + ""
  }
  const onLocationSelectorHidden = () => {
    if (!currentLocation || currentLocation === "") {
    } else {
      setLocationSelectorVisible(false)
    }
  }

  const updateCurrentLocation = (loc: any) => {
    const { name, location } = loc
    const str = JSON.stringify({ name, location })
    Cookies.setCookie("__ll", str)
    Store.setState({ rootLocation: { name, location } })
  }

  const onCurrentLocationClick = () => {
    setLocationSelectorVisible(true)
  }

  const { info = {} } = data.site.siteMetadata

  return (
    <>
      <div
        style={{
          height: safeAreaPadding,
        }}
        className={`fixed top-0 w-full  text-black   shadow-md z-50`}
      >
        <div className={` px-4 md:px-0 relative`}>
          <div
            ref={ele}
            id="HEADER_BG"
            className="bg-white opacity-0 shadow-lg absolute top-0 left-0 right-0 bottom-0 "
            style={{ zIndex: -1 }}
          />
          <div className={`max-w-1366 mx-auto py-4  flex items-center `}>
            <NavBar
              linkClassName={`${scrolled ? "text-black" : "text-white"}`}
              jwt={jwt}
              onCurrentLocationClick={onCurrentLocationClick}
              currentLocation={currentLocation}
            />
          </div>
        </div>
      </div>
    </>
  )
}
const mapToProps = (state: any) => ({
  currentLocation: state.rootLocation,
  jwt: state.login__jwt,
})

export default connect(mapToProps)(Header)
