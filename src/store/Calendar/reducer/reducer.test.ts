import { actionCreators, CalendarState } from ".."
import reducer from "./reducer"

describe("CalendarReducer", () => {
	it("increments to next year", () => {
		const action = {
			type: actionCreators.increment.type,
		}
		const initialState: CalendarState = {
			year: 2000,
			month: 11,
			currentDay: 12,
		}
		const expectedMonth = 0
		const expectedYear = 2001

		const { year, month } = reducer(initialState, action)

		expect({ year, month }).toEqual({
			year: expectedYear,
			month: expectedMonth,
		})
	})
	it("decrements to prev year", () => {
		const action = {
			type: actionCreators.decrement.type,
		}
		const initialState: CalendarState = {
			year: 2000,
			month: 0,
			currentDay: 12,
		}
		const expectedMonth = 11
		const expectedYear = 1999

		const { year, month } = reducer(initialState, action)

		expect({ year, month }).toEqual({
			year: expectedYear,
			month: expectedMonth,
		})
	})
})
