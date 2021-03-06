import { Link } from "gatsby"
import React, { ReactElement } from "react"

export interface IInfoGridItem {
  title?: string
  subTitle?: string
  link?: string
  linkText?: string
}

interface Props {
  items: IInfoGridItem[]
  bgTextColor?: string
}

function InfoGrid({ items, bgTextColor = "text-black" }: Props): ReactElement {
  return (
    <div className="flex flex-col md:flex-row ">
      {items.map((item: IInfoGridItem, index: number) => (
        <>
          <div className="px-4 py-8 md:py-4 w-full md:w-1/3 relative">
            <span
              className={
                "text-6xl absolute font-bold  opacity-10 " + bgTextColor
              }
              style={{ zIndex: 0, top: "10px" }}
            >
              {("0" + (index + 1)).slice(-2)}
            </span>
            <h3
              className="text-lg font-bold"
              dangerouslySetInnerHTML={{ __html: item.title || "" }}
            />
            <h5
              className="py-8 text-justify"
              dangerouslySetInnerHTML={{ __html: item.subTitle || "" }}
            />
            {item.link ? (
              <Link className="my-16 font-bold" to={item.link}>
                {item.linkText || "More"}
              </Link>
            ) : (
              ""
            )}
          </div>
        </>
      ))}
    </div>
  )
}

export default InfoGrid
