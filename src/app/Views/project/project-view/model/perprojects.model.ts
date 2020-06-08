export interface PerProjects {
  id: number;
  initialDate: number;
  description: string;
  name: string;
  iterations: [];
}

export interface Itinerary {
  id: number;
  initialDate: number;
  endDate: number;
  description: string;
  name: string;
  iterations: [];
}
