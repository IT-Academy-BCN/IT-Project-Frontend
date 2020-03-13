import { ExercisesReview } from './exercisesReview';

export class StudentReview {
    id: number;
    firstName: string;
    lastName: string;
    exercises?: ExercisesReview[];

    constructor(id: number, firstName: string, lastName: string, exercises?: ExercisesReview[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.exercises = exercises;
    }
}
