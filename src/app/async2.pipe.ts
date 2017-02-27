import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import {AsyncPipe} from '@angular/common';


@Pipe({
  name: 'async2'
})
export class Async2Pipe implements PipeTransform {

  constructor(private _ref: ChangeDetectorRef){

  }
  transform(value: any, args?: any, ): any {
    const values: Array<any> = new Array<any>();
      if (value != null && value !== undefined)
       { 
         value.forEach(arrayItem => arrayItem.subscribe(x => values.push(x)));

       }
       return values;
  }

}
