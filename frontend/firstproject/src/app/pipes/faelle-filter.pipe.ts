import { Pipe, PipeTransform } from '@angular/core';
import { Fall } from '../common/interfaces';

@Pipe({
  name: 'faelleFilter'
})
export class FaelleFilterPipe implements PipeTransform {

  transform(value: Fall[], ...args: string[]): any {
    console.log(`value = ${JSON.stringify(value)}`);
    console.log(`args = ${args}`);
    
    return value;
  }

}
