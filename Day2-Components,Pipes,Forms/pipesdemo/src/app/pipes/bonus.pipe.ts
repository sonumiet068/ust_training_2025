import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus',
})
export class BonusPipe implements PipeTransform {
  transform(value: number, empDesignation: string) {
    if (empDesignation == 'Co-Founder') {
      return value * 0.05;
    } else if (empDesignation == 'Manager') {
      return value * 0.34;
    } else if (empDesignation == 'Developer') {
      return value * 0.6;
    }
    return value;
  }
}
