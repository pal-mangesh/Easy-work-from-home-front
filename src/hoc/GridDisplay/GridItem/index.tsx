import Button from "@components/Button"
import DateTimeDisplay from "@components/DateTimeDisplay"
import Image, { IImageProps } from "@hoc/Image"
import CommonUtils from "@utils/CommonUtils"
import DateTime from "@utils/DateTime"
import { Link } from "gatsby"
import React, { ReactElement } from "react"

export interface IGridItem {
  _id?: any
  name?: string
  title?: string
  cost?: number | string
  city?: string
  province?: string
  country?: string
  postalCode?: string
  images?: IImageProps[]
  area?: number
  bathrooms?: number
  bedrooms?: number
}

interface IGridItemProps {
  item: IGridItem
  onClick?: any
  onBookNowClick?: any
  defaultLink?: string
}

function GridItem({
  item,
  onClick,
  onBookNowClick,
  defaultLink,
}: IGridItemProps): ReactElement {
  const attrs = [
    {
      icon: require("@images/transmission_icon.svg"),
      key: "transmission",
    },
    {
      icon: require("@images/seat_icon.svg"),
      key: "seatingCapacity",
    },
    {
      icon: require("@images/fuel_icon.svg"),
      key: "fuelType",
    },
  ]

  const handleClick = (item: any) => (e: any) => {
    if (onClick) {
      onClick(item)
    }
  }
  const image = item.images && item.images.length ? item.images[0] : ({} as any)
  return (
    <>
      <div className="py-2 px-2 mb-8 bg-white w-full rounded-lg shadow-lg">
        <div className="cursor-pointer" onClick={handleClick(item)}>
          <Image className=" w-full" {...image} />
        </div>
        <div className="">
          <div className="flex items-center flex-1 px-4 py-2 flex-wrap ">
            <div className="flex-1 text-md">
              {CommonUtils.Intl.formatCurrency(parseInt(item.cost + "", 10))}
            </div>
            {/* <div>
              <img src={require("@images/heart-icon.svg")} />
            </div> */}
          </div>
          <div className="flex flex-col  flex-1 px-4 flex-wrap ">
            <div
              onClick={handleClick(item)}
              className="flex-1 text-xl cursor-pointer"
            >
              {defaultLink && defaultLink.length ? (
                <Link to={defaultLink + item._id}>{item.title}</Link>
              ) : (
                item.title
              )}
            </div>
            <div className="flex-1 text-sm text-gray-500">
              {item.city +
                ", " +
                item.province +
                ", " +
                item.country +
                ", " +
                item.postalCode}
            </div>
            <div className="flex-1 flex items-center text-sm my-4">
              {item.area ? (
                <div className="flex items-center pr-4">
                  <div>
                    <img src={require("@images/area-icon.svg")} />
                  </div>
                  <div className="ml-2">{item.area || "NA"} Sqft.</div>
                </div>
              ) : (
                ""
              )}
              {item.bathrooms ? (
                <div className="flex items-center pr-4">
                  <div>
                    <img src={require("@images/bathroom-icon.svg")} />
                  </div>
                  <div className="ml-2">{item.bathrooms || "NA"}</div>
                </div>
              ) : (
                ""
              )}
              {item.bedrooms ? (
                <div className="flex items-center pr-4">
                  <div>
                    <img src={require("@images/bed-icon.svg")} />
                  </div>
                  <div className="ml-2">{item.bedrooms || "NA"}</div>
                </div>
              ) : (
                ""
              )}
              <div className="flex-1">
                <Button onClick={() => onBookNowClick(item)}>Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GridItem
