export class Itineraries {
    "id": number;
    "name": string;
    "initialDate": Date;
    "iterationsNumber": number;
    "iterations": []        
}

export class Iterations {
    "id": number;
    "itNumber": number;
    "initialDate": Date;
    "endingDate": Date;
    "description": string;
    "isActive": boolean;
    "developers": []
}

export class Developers {
    "id": number;
    "name": string;
    "surname": string;
    "newDev": boolean;       
}

  export class newDeveloper{
    "name":string;
    "surname": string;
    "newDev": string;
  }