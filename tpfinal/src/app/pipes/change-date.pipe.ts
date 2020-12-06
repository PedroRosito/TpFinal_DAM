import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDate'
})
export class ChangeDatePipe implements PipeTransform {

  transform(value: Date): String {
    var strDate = value.toString();
    var dateParts = strDate.split('T');
    var dateHMS = dateParts[1].split(':');
    dateHMS[0] = String(Number(dateHMS[0])-3);
    var dateS = dateHMS[2].split('.');
    dateParts[0] = dateParts[0].replace('-','/');
    dateParts[0] = dateParts[0].replace('-','/');
    var newDate = dateParts[0]+' '+dateHMS[0]+':'+dateHMS[1]+':'+dateS[0];
    return newDate;
  }

}
