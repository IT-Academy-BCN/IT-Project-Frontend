interface Seat {
  rowNumber: number;
  colNumber: number;
  classRoom: number;
}

interface Itinerary {
  id: number;
  name: string;
}

interface Course {
  id: number;
  endDate: string | null;
  itinerary: Itinerary;
}
  // API response to GET /students
export class StudentInList {
  id: string;
  firstName: string;
  lastName: string;
  seat: Seat;
  courses: Course[];
}
  // API response to GET /students/id
export class Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  portrait: string | null;
  seat: Seat;
  courses: Course[];
}
