import React, { ReactElement } from "react"
import DateTime from "@utils/DateTime"

interface Props {
  from?: string
  to?: string
}

function DateTimeDisplay({ from, to }: Props): ReactElement {
  const [aFrom, setAFrom] = React.useState() as any
  const [aTo, setATo] = React.useState() as any
  React.useEffect(() => {
    if (from && from.length) {
      setAFrom(DateTime.Moment(from))
    }
    if (to && to.length) {
      setATo(DateTime.Moment(to))
    }
  }, [from, to])
  return (
    <div className="flex-1 p-8 flex md:flex-col flex-row">
      <div className="flex items-start mb-2 mr-2 md:mr-0">
        <div className="mr-2">
          <img className="mt-1" src={require("@images/clock_icon.svg")} />
        </div>
        <div className="">
          <div className="text-lg font-bold">From</div>
          <div className="text-gray-500">{aFrom && aFrom.format("LLL")}</div>
        </div>
      </div>
      <div className="flex items-start">
        <div className="mr-2">
          <img className="mt-1" src={require("@images/clock_icon.svg")} />
        </div>
        <div className="">
          <div className="text-lg font-bold">To</div>
          <div className="text-gray-500">{aTo && aTo.format("LLL")}</div>
        </div>
      </div>
    </div>
  )
}

export default DateTimeDisplay
