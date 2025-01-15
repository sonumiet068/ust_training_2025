import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
})
export class SalutationPipe implements PipeTransform {
  transform(value: string, gender: string): unknown {
    return gender == 'M' ? 'Mr.' + value : 'Ms.' + value;
  }
}
