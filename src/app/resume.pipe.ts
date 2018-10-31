import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: String, args?: number): any {
    return value.substr(1,args);
  }

}
