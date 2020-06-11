import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'virtualString' })

export class virtualStringPipe implements PipeTransform {
    transform(word: string):string{
        return word.split(" ")[0];
    }

}

