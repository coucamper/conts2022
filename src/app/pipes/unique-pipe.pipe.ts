import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';



@Pipe({
  name: 'uniquePipe',
  pure: false
})
export class UniquePipePipe implements PipeTransform {

  vehiculosF:any[] = [];

  transform( vehiculosF:any ): any{
    if(vehiculosF!== undefined && vehiculosF!== null){
        return _.uniq(vehiculosF);
    }
    return vehiculosF;
  }

}
