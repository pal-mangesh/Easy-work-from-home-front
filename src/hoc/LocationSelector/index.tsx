import React, { ReactElement } from "react"
import Network from "@utils/Network"
import Cookies from "@utils/Cookies"
import Store from "@utils/Store"
import LightBox from "@components/LightBox"

interface Props {
  visible?: boolean
  onSelect?: any
  onHidden?: any
}

function LocationSelector({
  onSelect,
  visible,
  onHidden,
}: Props): ReactElement {
  const [locations, setLocations] = React.useState([] as any)
  React.useEffect(() => {
    setTimeout(async () => {
      const { data } = await Network.get("places")
      if (data && data.length) {
        setLocations(data)
      }
    })
  }, [])

  const _onSelect = (val: any) => () => {
    if (onSelect) {
      onSelect(val)
    }
    onHidden()
  }

  return (
    <>
      <LightBox visible={visible} onHidden={onHidden}>
        <div className="p-8 rounded bg-gray-100 w-full md:w-3/4 mx-auto">
          {locations && locations.length ? (
            <>
              <h3 className="text-2xl">Please Select A Location</h3>
              <ul className="flex items-center my-4 flex-wrap">
                {locations.map((l: any) => (
                  <li
                    onClick={_onSelect(l)}
                    className="m-4 rounded bg-gray-200 p-4 cursor-pointer hover:bg-gray-300 w-full md:w-1/4"
                  >
                    {l.name}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      </LightBox>
    </>
  )
}

export default LocationSelector
