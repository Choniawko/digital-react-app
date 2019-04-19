import { combineEpics, Epic, ofType } from "redux-observable"
import { of } from "rxjs"
import { catchError, mergeMap } from "rxjs/operators"
import { actionCreators } from "."
import { RootState } from ".."
import { ajax, apiUrl } from "../../common/services"
import { Action } from "../actionCreator"

const {
  getEvents,
  getEvent,
  postEvent,
  updateEvents,
  updateEvent,
  setError,
} = actionCreators

const getEventsEpic: Epic<Action<null>, Action<any>, RootState> = actions$ =>
  actions$.pipe(
    ofType(getEvents.type),
    mergeMap(() =>
      ajax.get(apiUrl("events")).pipe(
        mergeMap(({ response }) => of(updateEvents.create(response))),
        catchError(error => of(setError.create(error))),
      ),
    ),
  )
const getEventEpic: Epic<Action<number>, Action<any>, RootState> = actions$ =>
  actions$.pipe(
    ofType(getEvent.type),
    mergeMap(id =>
      ajax.get(apiUrl(`event/${id}`)).pipe(
        mergeMap(({ response }) => of(updateEvent.create(response))),
        catchError(error => of(setError.create(error))),
      ),
    ),
  )
const postEventEpic: Epic<Action<Event>, Action<any>, RootState> = actions$ =>
  actions$.pipe(
    ofType(postEvent.type),
    mergeMap(event =>
      ajax.post(apiUrl("events"), event).pipe(
        mergeMap(() => of(getEvents.create())),
        catchError(error => of(setError.create(error))),
      ),
    ),
  )
export const epics = combineEpics(getEventsEpic, getEventEpic, postEventEpic)
