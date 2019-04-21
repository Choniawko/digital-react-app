import { actionCreators, EventState } from ".."
import { initEvent } from "../../../fixtures/Event"
import { Action } from "../../actionCreator"

export const INITIAL_STATE: EventState = {
  events: [],
  event: initEvent,
  error: "",
  count: 0,
  previos: null,
  next: null,
}

export default (
  state: EventState = INITIAL_STATE,
  { type, payload }: Action<any>,
): EventState => {
  switch (type) {
    case actionCreators.updateEvents.type:
      return {
        ...state,
        events: payload,
        error: "",
      }
    case actionCreators.updateEvent.type:
      return {
        ...state,
        event: payload,
        error: "",
      }
    default:
      return state
  }
}
