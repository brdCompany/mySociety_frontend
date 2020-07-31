import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notice'
})
export class NoticePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
