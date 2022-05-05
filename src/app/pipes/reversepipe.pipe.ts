import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  transform(value:any) {
    return value.slice().reverse();
  }

}


