import React, { ReactElement } from "react"
import Network from "@utils/Network"

export interface IImageProps {
  alternativeText?: string
  caption?: string
  name?: string
  url: string
  className?: string
  style?: any
}

function Image({
  url,
  alternativeText,
  className,
  style,
}: IImageProps): ReactElement {
  const [uri, setUri] = React.useState("")
  React.useEffect(() => {
    if (url && url.length) {
      const _uri = url[0] === "/" ? url.substr(1) : url
      setUri(_uri)
    }
  }, [url])

  const endpoint = Network.ENDPOINT

  return (
    <img
      className={className}
      style={style}
      src={endpoint + uri}
      alt={alternativeText}
    />
  )
}

export default Image
