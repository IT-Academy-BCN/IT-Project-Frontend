  // types and enums below link API statuses and itinerary ids with meaningful names
  // and prevents hard-coding of constants everywhere else in the code
  // itinerary ideally belongs to another module

enum ItineraryId {
  CommonBlock = 1,
  FrontEnd,
  BackEndJava,
  BackEndDotNet
}

type ItineraryName = keyof typeof ItineraryId;

export const Itineraries: Record<ItineraryName, string> = {
  CommonBlock: 'Bloque común',
  FrontEnd: 'Front-end',
  BackEndJava: 'Back-End - JAVA',
  BackEndDotNet: 'Back-End - .NET',
} as const;

export enum ExerciseStatusId {
  None = 1,
  TurnedIn,
  Received,
  Checked,
  Finished
}

type ExerciseStatusName = keyof typeof ExerciseStatusId;

export const Statuses: Record<ExerciseStatusName, string> = {
  None: 'ninguno',
  TurnedIn: 'entregado',
  Received: 'recibido - revisión pendiente',
  Checked: 'revisado - discusión pendiente',
  Finished: 'finalizado'
} as const;

interface Itinerary {
  id: ItineraryId;
  name: string;
}

interface Status {
  name: string;
  id: ExerciseStatusId;
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