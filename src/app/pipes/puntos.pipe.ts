import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntos'
})
export class PuntosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value < 3000)
    {
      return "mal";
    }
    else if(value > 3000 && value < 8000)
    {
      return "bien";
    }
    else if(value > 8000 && value < 10000)
    {
      return "re bien";
    }
  }

}
