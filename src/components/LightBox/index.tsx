import React, { ReactElement } from "react"

interface Props {
  visible?: boolean
  children?: any
  onHidden?: any
}

function LightBox({
  visible = false,
  onHidden,
  children,
}: Props): ReactElement {
  const onHide = () => {
    if (onHidden) {
      onHidden()
    }
  }
  return (
    <div
      className="flex justify-center items-center fixed top-0 left-0 bottom-0 right-0"
      style={{
        opacity: visible ? 1 : 0,
        zIndex: visible ? 100 : -1,
        pointerEvents: visible ? "all" : "none",
      }}
    >
      <div
        onClick={onHide}
        className="absolute w-full h-full cursor-pointer"
        style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: -1 }}
      />
      {/* <div className=" absolute flex w-full h-full items-center justify-center"> */}
      {children}
      {/* </div> */}
    </div>
  )
}

export default LightBox
