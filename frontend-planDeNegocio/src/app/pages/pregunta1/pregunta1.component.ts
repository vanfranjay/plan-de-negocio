import { Component } from '@angular/core';
import { Pregunta1Service } from 'src/app/service/pregunta1/pregunta1.service';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.scss']
})
export class Pregunta1Component {
  inputValues: (number | null)[] = [];
  input!: number;
  total!: number;

  //analisis de mercado
  pregunta1Clientes!: String;
  pregunta1ClientesPotenciales!: String;
  pregunta1ClientesPotencialesAct!: String;

  pregunta1Minimo1!: number;
  pregunta1Minimo2!: number;
  pregunta1Minimo3!: number;
  pregunta1Maximo1!: number;
  pregunta1Maximo2!: number;
  pregunta1Maximo3!: number;
  pregunta1Promedio1!: number;
  pregunta1Promedio2!: number;
  pregunta1Promedio3!: number;

  //Analisis de la competencia
  pregunta1Competidores!: String;
  pregunta1AccionCompetencia!: String;

  //estratégia de mercado
  pregunta1ProdcServicio!: String;
  pregunta1ProdcMayoringreso!: String;
  pregunta1PrecioServicio!: String;
  pregunta1DetPrecioServProd!: String;


  pregunta1: string = 'setPregunta1';

  constructor(
    private pregunta1Service: Pregunta1Service,
  ) {
    //analisis de mercado
    this.pregunta1Clientes = this.pregunta1Service.getPregunta1Clientes();
    this.pregunta1ClientesPotenciales = this.pregunta1Service.getPregunta1ClientesPotenciales();
    this.pregunta1ClientesPotencialesAct = this.pregunta1Service.getPregunta1ClientesPotencialesAct();

    this.inputValues[0] = this.pregunta1Service.getPregunta1Minimo1();
    this.inputValues1[0] = this.pregunta1Service.getPregunta1Minimo2();
    this.inputValues2[0] = this.pregunta1Service.getPregunta1Minimo3();
    this.inputValues[1] = this.pregunta1Service.getPregunta1Maximo1();
    this.inputValues1[1] = this.pregunta1Service.getPregunta1Maximo2();
    this.inputValues2[1] = this.pregunta1Service.getPregunta1Maximo3();
    this.pregunta1Promedio1 = this.pregunta1Service.getPregunta1Promedio1();
    this.pregunta1Promedio2 = this.pregunta1Service.getPregunta1Promedio2();
    this.pregunta1Promedio3 = this.pregunta1Service.getPregunta1Promedio3();

    //Analisis de la competencia
    this.pregunta1Competidores = this.pregunta1Service.getPregunta1Competidores();
    this.pregunta1AccionCompetencia = this.pregunta1Service.getPregunta1AccionCompetencia();

    //estratégia de mercado
    this.pregunta1ProdcServicio = this.pregunta1Service.getPregunta1ProdcServicio();
    this.pregunta1ProdcMayoringreso = this.pregunta1Service.getPregunta1ProdcMayoringreso();
    this.pregunta1PrecioServicio = this.pregunta1Service.getPregunta1PrecioServicio();
    this.pregunta1DetPrecioServProd = this.pregunta1Service.getPregunta1DetPrecioServProd();

  }

  asignarValor(value: string, valor: any) {
    const valueM: string = this.pregunta1 + value;      //setPregunta1${Clientes}
    (this.pregunta1Service as any)[valueM](valor);
  }

  calculateTotal(index: number): void {
    this.input = this.inputValues[index] ?? 0;
    this.total = this.inputValues
      .map(value => (value ?? 0) / 2) // Dividir cada valor por 2
      .reduce((sum, value) => (sum ?? 0) + (value ?? 0), 0); // Sumar los valores divididos
      this.pregunta1Promedio1 = this.total
    this.pregunta1Service.setPregunta1Promedio1(this.total);
    switch (index) {
      case 0:
        this.pregunta1Service.setPregunta1Minimo1(this.input);
        break;
      case 1:
        this.pregunta1Service.setPregunta1Maximo1(this.input);
        break;
      default:
        break;
    }
  }
  inputValues1: (number | null)[] = [];
  total1!: number;

  calculateTotal1(index: number): void {
    this.input = this.inputValues1[index] ?? 0;
    this.total1 = this.inputValues1
      .map(value => (value ?? 0) / 2) // Dividir cada valor por 2
      .reduce((sum, value) => (sum ?? 0) + (value ?? 0), 0); // Sumar los valores divididos
    this.pregunta1Promedio2 = this.total1
    this.pregunta1Service.setPregunta1Promedio2(this.total1);
    switch (index) {
      case 0:
        this.pregunta1Service.setPregunta1Minimo2(this.input);
        break;
      case 1:
        this.pregunta1Service.setPregunta1Maximo2(this.input);
        break;
      default:
        break;
    }
  }
  inputValues2: (number | null)[] = [];
  total2!: number;

  calculateTotal2(index: number): void {
    this.input = this.inputValues2[index] ?? 0;
    this.total2 = this.inputValues2
      .map(value => (value ?? 0) / 2) // Dividir cada valor por 2
      .reduce((sum, value) => (sum ?? 0) + (value ?? 0), 0); // Sumar los valores divididos
      this.pregunta1Promedio3 = this.total2
    this.pregunta1Service.setPregunta1Promedio3(this.total2);
    switch (index) {
      case 0:
        this.pregunta1Service.setPregunta1Minimo3(this.input);
        break;
      case 1:
        this.pregunta1Service.setPregunta1Maximo3(this.input);
        break;
      default:
        break;
    }
  }

}
