export interface Event {
  id?: number
  name: string
  startDate: Date | null
  endDate: Date | null
  description: string
  location: string
  category: ICategory | null
}

export interface ICategory {
  id: number
  name: string
}

export interface EventState {
  events: ReadonlyArray<Event>
  event: Event
  count: number
  previos: number | null
  next: number | null
  error: string
}
