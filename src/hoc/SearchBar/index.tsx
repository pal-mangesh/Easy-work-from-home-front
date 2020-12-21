import Button from "@components/Button"
import DataEditor, { IField } from "@components/DataEditor"
import React, { ReactElement } from "react"
import { connect } from "redux-zero/react"
import Network from "src/utils/Network"

interface ISearchBarProps {
  rootLocation?: any
  onSearchClick?: any
  searchQuery?: any
  spread?: boolean
  onSpread?: any
  minimalDisplay?: boolean
}

function SearchBar({
  rootLocation = {},
  onSearchClick,
  searchQuery,
  spread = false,
  onSpread,
  minimalDisplay = false,
}: ISearchBarProps): ReactElement {
  const [query, setQuery] = React.useState({} as any)
  const [locationsResult, setLocationsResult] = React.useState([] as any)
  const [fetching, setFetching] = React.useState(false)
  const [error, setError] = React.useState("")
  const [locationLoading, setLocationLoading] = React.useState(false)
  let tid: any

  // React.useEffect(() => {
  //   setQuery({})
  // }, [rootLocation])
  React.useEffect(() => {
    setQuery({ ...searchQuery })
  }, [searchQuery])

  const rooms = [
    {
      title: "1+",
      value: "1",
    },
    {
      title: "2+",
      value: "2",
    },
    {
      title: "3+",
      value: "3",
    },
    {
      title: "4+",
      value: "4",
    },
    {
      title: "5+",
      value: "5",
    },
  ]
  const areas = [
    {
      title: "100+",
      value: "100",
    },
    {
      title: "200+",
      value: "200",
    },
    {
      title: "500+",
      value: "500",
    },
    {
      title: "1000+",
      value: "1000",
    },
    {
      title: "2000+",
      value: "2000",
    },
  ]
  const distances = [
    {
      title: "500 m",
      value: "500",
    },
    {
      title: "1 Km",
      value: "1000",
    },
    {
      title: "10 Km",
      value: "10000",
    },
    {
      title: "20 Km",
      value: "20000",
    },
    {
      title: "50 Km",
      value: "50000",
    },
    {
      title: "100 Km",
      value: "100000",
    },
    {
      title: "200 Km",
      value: "200000",
    },
    {
      title: "500 Km",
      value: "500000",
    },
    {
      title: "1000 Km",
      value: "1000000",
    },
    {
      title: "2000 Km",
      value: "2000000",
    },
    {
      title: "5000 Km",
      value: "5000000",
    },
  ]

  const getSchema = () =>
    [
      {
        name: "location",
        docField: "latlong",
        title: "Enter location, city, ref etc.",
        type: "SEARCH_INPUT",
        flexBasis: "70%",
        icon: require("@images/search_icon.svg"),
        list: locationsResult,
        onSearchInputChange: onPlacesSearchInputChange(setLocationsResult),
        showLoading: fetching,
      },
      {
        name: "submit",
        title: "Find Properties",
        type: "BUTTON",
        styleType: "primary",
        flexBasis: "30%",
        onClick: () => {
          if (onSearchClick && validate(query)) {
            onSearchClick(query)
          }
        },
        className: "hidden md:block",
      },
      {
        name: "maxDistance",
        title: "Search within",
        type: "SELECT",
        flexBasis: "20%",
        icon: require("@images/search_icon.svg"),
        list: distances,
        value: "10000",
      },
      {
        name: "bedrooms",
        title: "Rooms",
        type: "SELECT",
        flexBasis: "20%",
        icon: require("@images/search_icon.svg"),
        list: rooms,
        advancedSetting: true,
      },
      {
        name: "area",
        title: "Area (sqft.)",
        type: "SELECT",
        flexBasis: "20%",
        icon: require("@images/search_icon.svg"),
        list: areas,
        advancedSetting: true,
      },
      {
        name: "submit",
        title: "Find Properties",
        type: "BUTTON",
        styleType: "primary",
        flexBasis: "30%",
        onClick: () => {
          if (onSearchClick && validate(query)) {
            onSearchClick(query)
          }
        },
        className: "md:hidden block",
      },
      {
        name: "explore",
        title: "Explore",
        type: "LINK",
        flexBasis: "38%",
        className: "flex justify-end items-center text-white",
        to: "/search",
      },
    ] as IField[]

  const onChange = (d: any) => {
    setQuery({ ...query, ...d })
  }

  const queryPlaces = async (text: string) => {
    setFetching(true)
    try {
      const { data } = await Network.get(
        "https://photon.komoot.io/api/?q=" + text,
        { sameDomain: false }
      )
      if (
        data.features &&
        data.features.length &&
        data.type === "FeatureCollection"
      ) {
        const { features } = data
        setLocationsResult(
          features.map((f: any) => ({
            title: f.properties.name,
            // value: f.geometry,
            doc:
              f.geometry &&
              f.geometry.coordinates &&
              f.geometry.coordinates.length
                ? [f.geometry.coordinates[0], f.geometry.coordinates[1]]
                : [],
            subTitle: (
              <>
                <div className="text-gray-500 ">
                  {(f.properties.county ? f.properties.county + "," : "") +
                    (f.properties.state ? f.properties.state + "," : "") +
                    (f.properties.country ? f.properties.country + "," : "")}
                </div>
              </>
            ),
          }))
        )
      }
    } catch (e) {
      return []
    } finally {
      setFetching(false)
    }
  }

  const onPlacesSearchInputChange = (setListFn: any) => async (val: any) => {
    clearTimeout(tid)
    tid = setTimeout(async () => {
      if (val.length > 2 && !fetching) {
        const res = await queryPlaces(val)
        if (res && res.length > 0) {
          setListFn(
            res.map((i: any) => ({
              name: i.name,
            }))
          )
        }
      }
    }, 300)
  }

  const validate = (query: any) => {
    console.log(query)
    setError("")
    if (!query.location || query.location === "") {
      setError("Please enter a location!")
      return false
    }
    return true
  }

  return (
    <>
      <div className={spread ? " md:block" : "hidden md:block "}>
        {error && error.length ? (
          <div className="bg-yellow-500 text-yellow-800 p-2 px-4 m-2 rounded-full">
            {error}
          </div>
        ) : (
          ""
        )}

        <div className="flex w-full">
          <div className="flex p-2 w-full">
            <DataEditor
              schema={getSchema() as any}
              data={query}
              onChange={onChange}
              compact={minimalDisplay}
            />
          </div>
        </div>
      </div>
      <div
        className={"md:hidden flex items-center " + (spread ? "hidden " : "")}
      >
        <div className="flex-1">
          <span className="text-lg">Showing properties in :</span>
          <span className="text-blue-300 ml-4">{query.location}</span>
        </div>
        <div>
          <Button onClick={onSpread}>Edit Search</Button>
        </div>
      </div>
    </>
  )
}

const mapToProps = (state: any) => ({
  rootLocation: state.rootLocation,
})

export default connect(mapToProps)(SearchBar)
