import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectsData {

  private projects: any[] = [
    {
      id: "",
      name: "Angular Frontend",
      initialDate: new Date(2020, 1, 10),
      iterationsNumber: 6,
      iterations: [
        {
          id: 0,
          itNumber: 1,
          initialDate: new Date(2020, 1, 10),
          endingDate: new Date(2020, 1, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Homer",
              surname: "Simpson",
              exStudent: true,
            },
            {
              id: 1,
              name: "Marge",
              surname: "Simpson",
              exStudent: true,
            },
            {
              id: 2,
              name: "Bart",
              surname: "Simpson",
              exStudent: true,
            }
          ]
        },
        {
          id: 1,
          itNumber: 2,
          initialDate: new Date(2020, 2, 10),
          endingDate: new Date(2020, 2, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Maggie",
              surname: "Simpson",
              exStudent: true,
            },
            {
              id: 1,
              name: "Lisa",
              surname: "Simpson",
              exStudent: true,
            },
            {
              id: 2,
              name: "Abe",
              surname: "Simpson",
              exStudent: true,
            }
          ]
        },
        {
          id: 2,
          itNumber:3,
          initialDate: new Date(2020, 3, 10),
          endingDate: new Date(2020, 3, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Ned",
              surname: "Flanders",
              exStudent: true,
            },
            {
              id: 1,
              name: "Rod",
              surname: "Flanders",
              exStudent: true,
            },
            {
              id: 2,
              name: "Tod",
              surname: "Flanders",
              exStudent: true,
            }
          ]
        },
        {
          id: 3,
          itNumber:4,
          initialDate: new Date(2020, 4, 10),
          endingDate: new Date(2020, 4, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Milhouse",
              surname: "Van Houten ",
              exStudent: true,
            },
            {
              id: 1,
              name: "Kirk",
              surname: "Van Houten ",
              exStudent: true,
            },
            {
              id: 2,
              name: "Luann",
              surname: "Van Houten ",
              exStudent: true,
            }
          ]
        },
        {
          id: 4,
          itNumber:5,
          initialDate: new Date(2020, 5, 10),
          endingDate: new Date(2020, 5, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Apu",
              surname: "Nahasapeemapetilon ",
              exStudent: true,
            },
            {
              id: 1,
              name: "Manjula",
              surname: "Nahasapeemapetilon ",
              exStudent: true,
            },
            {
              id: 2,
              name: "Anoop",
              surname: "Nahasapeemapetilon ",
              exStudent: true,
            }
          ]
        },
        {
          id: 5,
          itNumber:6,
          initialDate: new Date(2020, 6, 10),
          endingDate: new Date(2020, 6, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: true,
          developers: [
            {
              id: 0,
              name: "Seymour",
              surname: "Skinner",
              exStudent: false,
            },
            {
              id: 1,
              name: "Agnes",
              surname: "Skinner",
              exStudent: false,
            },
            {
              id: 2,
              name: "Sheldon",
              surname: "Skinner",
              exStudent: false,
            }
          ]
        },
      ]
    },
    {
      id: "",
      name: "Backend Java",
      initialDate: new Date(2020, 1, 10),
      iterationsNumber: 5,
      iterations: [
        {
          id: 0,
          itNumber:1,
          initialDate: new Date(2020, 1, 10),
          endingDate: new Date(2020, 1, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Edna",
              surname: "Krabappel ",
              exStudent: true,
            },
            {
              id: 1,
              name: "Otto",
              surname: "Mann",
              exStudent: true,
            },
            {
              id: 2,
              name: "Willie",
              surname: "MacMoran",
              exStudent: true,
            }
          ]
        },
        {
          id: 1,
          itNumber:2,
          initialDate: new Date(2020, 2, 10),
          endingDate: new Date(2020, 2, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Jon",
              surname: "Doe",
              exStudent: true,
            },
            {
              id: 1,
              name: "Jon",
              surname: "Doe",
              exStudent: true,
            },
            {
              id: 2,
              name: "Jon",
              surname: "Doe",
              exStudent: true,
            }
          ]
        },
        {
          id: 2,
          itNumber:3,
          initialDate: new Date(2020, 3, 10),
          endingDate: new Date(2020, 3, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Nelson",
              surname: "Muntz",
              exStudent: true,
            },
            {
              id: 1,
              name: "Jimbo",
              surname: "Jones",
              exStudent: true,
            },
            {
              id: 2,
              name: "Dolph",
              surname: "Starbeam",
              exStudent: true,
            }
          ]
        },
        {
          id: 3,
          itNumber:4,
          initialDate: new Date(2020, 4, 10),
          endingDate: new Date(2020, 4, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Janey",
              surname: "Polley",
              exStudent: true,
            },
            {
              id: 1,
              name: "Shauna",
              surname: "Chalmers",
              exStudent: true,
            },
            {
              id: 2,
              name: "Ralp",
              surname: "Wiggum",
              exStudent: true,
            }
          ]
        },
        {
          id: 4,
          itNumber:5,
          initialDate: new Date(2020, 5, 10),
          endingDate: new Date(2020, 5, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: true,
          developers: [
            {
              id: 0,
              name: "Ralph",
              surname: "Wiggum",
              exStudent: false,
            },
            {
              id: 1,
              name: "Clancy",
              surname: "Wiggum",
              exStudent: false,
            },
            {
              id: 2,
              name: "Sarah",
              surname: "Wiggum",
              exStudent: false,
            }
          ]
        }
      ]
    },
    {
      id: "",
      name: "Backend .Net",
      initialDate: new Date(2020, 1, 10),
      iterationsNumber: 4,
      iterations: [
        {
          id: 0,
          itNumber:1,
          initialDate: new Date(2020, 1, 10),
          endingDate: new Date(2020, 1, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Don Vittorio",
              surname: "DiMaggio",
              exStudent: true,
            },
            {
              id: 1,
              name: "Johnny ",
              surname: "Labios Sellados",
              exStudent: true,
            },
            {
              id: 2,
              name: "Frankie",
              surname: "El Soplón",
              exStudent: true,
            }
          ]
        },
        {
          id: 1,
          itNumber:2,
          initialDate: new Date(2020, 2, 10),
          endingDate: new Date(2020, 2, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Troy",
              surname: "McClure",
              exStudent: true,
            },
            {
              id: 1,
              name: "Kent",
              surname: "Brockman",
              exStudent: true,
            },
            {
              id: 2,
              name: "Arnie",
              surname: "Pie",
              exStudent: true,
            }
          ]
        },
        {
          id: 2,
          itNumber:3,
          initialDate: new Date(2020, 3, 10),
          endingDate: new Date(2020, 3, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: false,
          developers: [
            {
              id: 0,
              name: "Herschel Schmoikel",
              surname: "Pinkus Krustofski",
              exStudent: true,
            },
            {
              id: 1,
              name: "Melvin",
              surname: "Van Horne",
              exStudent: true,
            },
            {
              id: 2,
              name: "Louis",
              surname: "Mr. Teeny",
              exStudent: true,
            }
          ]
        },
        {
          id: 3,
          itNumber:4,
          initialDate: new Date(2020, 4, 10),
          endingDate: new Date(2020, 4, 25),
          description: "Lorem fistrum a wan apetecan apetecan pecador pecador te voy a borrar el cerito caballo blanco caballo negroorl no puedor te va a hasé pupitaa diodeno. Benemeritaar te voy a borrar el cerito va usté muy cargadoo la caidita condemor a wan está la cosa muy malar de la pradera hasta luego Lucas.",
          isActive: true,
          developers: [
            {
              id: 0,
              name: "Disco",
              surname: "Stu",
              exStudent: false,
            },
            {
              id: 1,
              name: "Duff",
              surname: "Man",
              exStudent: false,
            },
            {
              id: 2,
              name: "Horatio",
              surname: "McCallister",
              exStudent: false,
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getProjects(): ProjectsData[] {
    return this.projects;
  }
}


