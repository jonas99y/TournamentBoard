import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'async2'
})
export class Async2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values: Array<any> = new Array<any>();
    if (value != null && value != undefined)
      value.forEach(arrayItem => arrayItem.subscribe(x => values.push(x)));
    return values;
  }

}
