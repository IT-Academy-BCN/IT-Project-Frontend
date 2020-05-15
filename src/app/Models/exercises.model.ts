
interface Student {
    "studentName" : string;
    "studentLastName" : string;
    "statusExercise" : string;
    "date" : number;
}

export class Students {
    "id": string;
    "firstName": string;
    "lastName": string;
    "exercises" : Subject[];
}

export class StudentInList {
    
}

interface Subject {
  "exerciseName": string;
}

interface Exercice {
    "name" : string;
    "itinerary" : number;
    "students" : Students;
}

// API response to GET
export class Exercices {
    exercise_id : Exercice;
    //no se como añadir aqui un id especifico, en este caso un number de 0-??
}


export class StudentReview {
    name : string;
    itinerary : number;
    
    constructor(name: string, itinerary: number) {
        this.name = name;
        this.itinerary = itinerary;
    }
}