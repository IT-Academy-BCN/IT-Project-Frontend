import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'beautifyString' })

export class beautifyStringPipe implements PipeTransform {
    transform(word: string):string{
        return word.split(" ")[0];
    }

}

