import React, { ReactElement } from "react"
import ListItem, { IListItem } from "./ListItem"
interface IListProps {
  items?: IListItem[]
  onSelect?: any
}

function List({ items, onSelect }: IListProps): ReactElement {
  return (
    <>
      {items && items.length ? (
        <>
          {items.map((item: IListItem) => (
            <ListItem item={item} onBookNowClick={onSelect} />
          ))}
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default List
