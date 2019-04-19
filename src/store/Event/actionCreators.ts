import { Event } from "."
import ActionCreator from "../actionCreator"

export default {
  getEvents: ActionCreator<null>("EVENT_GET_EVENTS"),
  getEvent: ActionCreator<number>("EVENT_GET_EVENT"),
  postEvent: ActionCreator<Event>("EVENT_POST_EVENT"),
  updateEvents: ActionCreator<Event[]>("EVENT_UPDATE_EVENTS"),
  updateEvent: ActionCreator<Event>("EVENT_UPDATE_EVENT"),
  setError: ActionCreator<string>("EVENT_SET_ERROR"),
}
