export class Exercise {
    id: number;
    name: string;
    state: string;
    date?: Date;

    constructor(id: number, name: string, state: string, date?: Date) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.date = date;


    }

}