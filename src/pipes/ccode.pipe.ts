import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccode'
})
export class CcodePipe implements PipeTransform {

  transform(value: unknown,code?:string): unknown {
    if (code=="USA") return "(+1)" + value;
    if (code=="DK") return "(+45)" + value;
    return "+91-" + value;
  }

}
