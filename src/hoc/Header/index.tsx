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
  }, [])

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
        className={`fixed top-0 w-full bg-white text-black   shadow-md z-50`}
      >
        <div className="bg-black px-8 py-2 text-white">
          <div
            className="w-full flex justify-start md:justify-end max-w-1366 mx-auto "
            style={{ fontSize: "8px" }}
          >
            <div className="flex-1 md:flex-none">
              Contact : <br className="md:hidden" />
              {info.contact || ""}
            </div>
            <div className="pl-4">
              Email : <br className="md:hidden" />
              {info.email || ""}
            </div>
          </div>
        </div>
        <div className="max-w-1366 mx-auto py-4 px-8 flex items-center">
          <NavBar
            jwt={jwt}
            onCurrentLocationClick={onCurrentLocationClick}
            currentLocation={currentLocation}
          />
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
