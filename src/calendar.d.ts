declare module "calendar" {
	export class Calendar {
		constructor(firstDayOfWeek: number)
		public monthDays(year: number, month: number): number[][]
	}
}
