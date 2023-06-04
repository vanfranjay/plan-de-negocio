import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.scss']
})
export class Pregunta1Component {
  inputValues: (number | null)[] = [];
  total!: number;

  calculateTotal(): void {
    this.total = this.inputValues
      .map(value => (value ?? 0) / 2) // Dividir cada valor por 2
      .reduce((sum, value) => (sum ?? 0) + (value ?? 0), 0); // Sumar los valores divididos
  }
  inputValues1: (number | null)[] = [];
  total1!: number;

  calculateTotal1(): void {
    this.total1 = this.inputValues1
      .map(value => (value ?? 0) / 2) // Dividir cada valor por 2
      .reduce((sum, value) => (sum ?? 0) + (value ?? 0), 0); // Sumar los valores divididos
  }
  inputValues2: (number | null)[] = [];
  total2!: number;

  calculateTotal2(): void {
    this.total2 = this.inputValues2
      .map(value => (value ?? 0) / 2) // Dividir cada valor por 2
      .reduce((sum, value) => (sum ?? 0) + (value ?? 0), 0); // Sumar los valores divididos
  }

}
