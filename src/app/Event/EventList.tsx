import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "react-router-dom"
import { EventItem } from "."
import { RootState } from "../../store"
import { actionCreators, Event } from "../../store/Event"

type ParamsProps = null
export interface Props extends RouteComponentProps<ParamsProps> {
  events: ReadonlyArray<Event>
  getEvents: () => void
}

const EventList = ({ events, getEvents }: Props): JSX.Element => {
  const [currEvent, setCurrEvent] = useState()
  useEffect(() => {
    getEvents()
  }, [])
  const handleClick = (event: Event) => (e: React.MouseEvent<HTMLElement>) => {
    setCurrEvent(event)
  }
  return (
    <>
      <h3>EventList</h3>
      <div className="list">
        {events.map(event => (
          <div onClick={handleClick(event)} key={event.id}>
            {event.name}
          </div>
        ))}
      </div>
      {currEvent && <EventItem event={currEvent} />}
    </>
  )
}

const mapStateToProps = ({ event: { events } }: RootState) => ({
  events,
})
const mapDispatchToProps = {
  getEvents: actionCreators.getEvents.create,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList)
