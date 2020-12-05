import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeApertura'
})
export class ChangeAperturaPipe implements PipeTransform {

  transform(value: number): string {
    if(value == 0){
      return "cerrado";
    }
    else{
      return "abierto";
    }
  }

}
