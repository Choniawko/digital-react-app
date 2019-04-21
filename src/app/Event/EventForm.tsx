import React, { useState } from "react"
import { connect } from "react-redux"
import { initEvent } from "../../fixtures/Event"
import { Action, RootState } from "../../store"
import { actionCreators, Event } from "../../store/Event"

type InputEvent = React.ChangeEvent<HTMLInputElement>
type ButtonEvent = React.FormEvent<HTMLFormElement>
export interface Props {
  event: Event
  postEvent: (payload: Event) => Action<Event>
}

const EventForm = ({ event, postEvent }: Props): JSX.Element => {
  const [eventForm, setEventForm] = useState(event.id ? event : initEvent)
  const handleInputChange = ({ target: { name, value } }: InputEvent) => {
    setEventForm({ ...eventForm, [name]: value })
  }
  const handleSubmit = (e: ButtonEvent) => {
    e.preventDefault()
    postEvent(eventForm)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={eventForm.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Start date</label>
          <input
            type="text"
            name="startDate"
            value={eventForm.startDate.toLocaleString()}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>End date</label>
          <input
            type="text"
            name="endDate"
            value={eventForm.endDate.toLocaleString()}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={eventForm.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={eventForm.location}
            onChange={handleInputChange}
          />
        </div>
        <button>Add new event</button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ event: { event } }: RootState) => ({
  event,
})
const mapDispatchToProps = {
  postEvent: actionCreators.postEvent.create,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm)
