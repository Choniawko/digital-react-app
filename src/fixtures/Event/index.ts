import { Event } from "../../store/Event/"

export const testEvent: Event = {
  id: 1,
  name: "Name",
  startDate: expect.any(Date),
  endDate: expect.any(Date),
  description: "description",
  location: "location",
  category: {
    id: 1,
    name: "name",
  },
}
