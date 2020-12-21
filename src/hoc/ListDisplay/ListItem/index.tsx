import Button from "@components/Button"
import DateTimeDisplay from "@components/DateTimeDisplay"
import Image, { IImageProps } from "@hoc/Image"
import DateTime from "@utils/DateTime"
import React, { ReactElement } from "react"

export interface IListItem {
  _id?: string
  name?: string
  title?: string
  images?: IImageProps[]
  transmission?: string
  seatingCapacity?: number
  fuelType?: string
  costPerHour?: number
  availableFrom?: string
  availableTill?: string
}

interface IListItemProps {
  item: IListItem
  onBookNowClick?: any
}

function ListItem({ item, onBookNowClick }: IListItemProps): ReactElement {
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
  const image = item.images && item.images.length ? item.images[0] : ({} as any)
  const fromDate = DateTime.Moment(item.availableFrom)
  const toDate = DateTime.Moment(item.availableTill)
  const diff = DateTime.Moment.duration(toDate.diff(fromDate)).asHours()
  return (
    <>
      <div className="py-4 px-8 mb-8 bg-gray-200 w-full rounded-lg shadow-lg">
        <div className="flex items-center flex-wrap">
          <div className="">
            <Image className="md:w-64 w-full" {...image} />
          </div>
          <div className="flex items-center flex-1 px-2 flex-wrap ">
            <div className="flex-1 w-1/2">
              <h4 className="text-lg">{item.title || item.name}</h4>
              <div className="flex items-center">
                {attrs.map((attr: any) => (
                  <div className="flex items-center mr-2">
                    <img className="w-4 h-4 mr-1" src={attr.icon} />
                    <h6 className="text-xs text-gray-500 mr-2">
                      {(item as any)[attr.key] || "Unknown"}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 md:block hidden">
              <DateTimeDisplay
                from={item.availableFrom}
                to={item.availableTill}
              />
            </div>
          </div>
          <div className="mt-4 w-full md:w-1/4 flex-col justify-center items-center">
            <div className="text-center text-2xl m-2">
              $ {((item.costPerHour || 0) * (diff || 1)).toFixed(2)}
            </div>
            <div>
              <Button onClick={() => onBookNowClick(item)}>Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListItem
