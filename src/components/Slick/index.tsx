import React, { ReactElement } from "react"
import Slider, { Settings } from "react-slick"
interface Props {
  children?: any
  settings?: Settings
}

function SlickSlider(props: Props): ReactElement {
  return (
    <>
      <Slider {...props.settings}>{props.children}</Slider>
    </>
  )
}

export default SlickSlider
