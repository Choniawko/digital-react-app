export interface Event {
  id?: number
  name: string
  startDate: Date
  endDate: Date
  description: string
  location: string
  category: ICategory
}

export interface ICategory {
  id: number
  name: string
}

export interface EventState {
  events: ReadonlyArray<Event>
  event: Event | null
  count: number
  previos: number | null
  next: number | null
  error: string
}
