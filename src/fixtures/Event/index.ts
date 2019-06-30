import { Event } from "../../store/Event/"

export const testEvent: Event = {
  id: 1,
  name: "Name",
  startDate: null,
  endDate: null,
  description: "description",
  location: "location",
  category: {
    id: 1,
    name: "name",
  },
}
