import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  imports: [FormsModule],
  templateUrl: './calculations.component.html',
  styleUrl: './calculations.component.css',
})
export class CalculationsComponent {
  additions = 0;
  subtractions = 0;
  multiplications = 0;
  division = 0;
  calculate(formObject: any) {
    this.additions = formObject.value.num1 + formObject.value.num2;
    this.subtractions = formObject.value.num1 - formObject.value.num2;
    this.multiplications = formObject.value.num1 * formObject.value.num2;
    this.division = formObject.value.num1 / formObject.value.num2;
  }
}
