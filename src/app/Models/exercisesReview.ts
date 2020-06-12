export class ExercisesReview {
    id: number;
    name: string;
    state: string;
    date: Date;
    itinerary: string;
    userExerciseId?: number;

    constructor(id: number, name: string, state: string, date: Date, itinerary: string, userExerciseId: number) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.date = date;
        this.itinerary = itinerary;
        this.userExerciseId = userExerciseId;
    }
}
