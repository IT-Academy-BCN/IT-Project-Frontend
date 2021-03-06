  // types and enums below link API statuses and itinerary ids with meaningful names
  // and prevents hard-coding of constants everywhere else in the code
  // itinerary ideally belongs to another module

export enum ItineraryId {
  CommonBlock = 1,
  FrontEnd,
  BackEndJava,
  BackEndDotNet,
  //ExStudents  //Para dar lógica a la option del desplegable de virtual-it-search.html
}

type ItineraryName = keyof typeof ItineraryId;

export const Itineraries: Record<ItineraryName, string> = {
  CommonBlock: 'Bloque común',
  FrontEnd: 'Front-end',
  BackEndJava: 'Back-End - JAVA',
  BackEndDotNet: 'Back-End - .NET',
  //ExStudents: 'Ex-alumnos', //Para dar lógica a la option del desplegable de virtual-it-search.html
} as const;

export enum StatusId {
  None = 1,
  TurnedIn,
  Received,
  Checked,
  Finished
}

export type StatusName = keyof typeof StatusId;

export const Statuses: Record<StatusName, string> = {
  None: 'no entregado',
  TurnedIn: 'entregado',
  Received: 'a revisar',
  Checked: 'corregido',
  Finished: 'finalizado'
} as const;

export interface StatusUpdateData {
  studentId: string;
  exerciseId: string;
  status: StatusId;
  date: Date;
}

interface Itinerary {
  id: ItineraryId;
  name: string;
}

interface Status {
  name: string;
  id: StatusId;
  date: string;
}

interface Teacher {
  id: string;
  name: string;
}

export class StudentExercise {
  id: string;
  name: string;
  status: Status;
  itinerary: Itinerary;
  teacher: Teacher;
}

export class ExerciseResponseList {
  ExercisesResponse: ExerciseResponse[];
}
interface ExerciseResponse {
  id : number;
  name: string;
  itinerary: number;
  students: studentInSubject[];
}
interface studentInSubject {
  id: number;
  studentName: string;
  studentLastName: string;
  statusExercise: string;
  date: number;
}

export class Student_Review {
  id: number;
  firstName: string;
  lastName: string;
  exercises: exercisesList[];
  lastClassAttendance: string;
  lastDeliveredExercise: string;
}

export interface exercisesList {
  id: number;
  name: string;
  state: string;
  date: Date;
  itinerary: string;
}
