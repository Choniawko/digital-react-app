import React from "react"
import { Event } from "../../store/Event"

export interface Props {
  event: Event
}
export default ({ event: { name, location, description } }: Props) => {
  return (
    <div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{description}</div>
    </div>
  )
}
