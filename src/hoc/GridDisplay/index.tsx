import React, { ReactElement } from "react"
import GridItem, { IGridItem } from "./GridItem"
interface IListProps {
  items?: IGridItem[]
  onSelect?: any
  onItemClick?: any
  defaultLink?: string
}

function Grid({
  items,
  onSelect,
  onItemClick,
  defaultLink,
}: IListProps): ReactElement {
  return (
    <>
      {items && items.length ? (
        <>
          <div className="flex items-baseline flex-wrap">
            {items.map((item: IGridItem, index: number) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <GridItem
                  defaultLink={defaultLink}
                  onClick={onItemClick}
                  item={item}
                  onBookNowClick={onSelect}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default Grid
