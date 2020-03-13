import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // error TS2345: Argument of type 'string' is not assignable to parameter of type 'any[]'.
  // El siguiente codigo daba el error anterior
  //transform(images: any[]): string   

  transform(imageSrc: string): string 
  {
    if (imageSrc == null || imageSrc == "") 
    {
      return 'assets/img/noimage.png';
    }
    else
    {
      return imageSrc;
    }
    // Se comenta el codigo anterior
    /*if (images.length > 0) 
    {
      return images[0].url;
    }
    else
    {
      return 'assets/img/noimage.png'
    }*/
  }

}
