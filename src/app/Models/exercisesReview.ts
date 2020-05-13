export class ExercisesReview {
    id: number;
    name: string;
    state: string;
    date: Date;
    itinerary: string;

    constructor(id: number, name: string, state: string, date: Date, itinerary: string) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.date = date;
        this.itinerary = itinerary;
    }
}
