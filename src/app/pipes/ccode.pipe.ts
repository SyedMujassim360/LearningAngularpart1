import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccode'
})
export class CcodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
