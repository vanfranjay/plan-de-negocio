import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.scss']
})
export class Pregunta2Component {
  public colSize!: number;
  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(result => {
        if (result.matches) {
          this.colSize = this.calculateColSize(result.breakpoints);
        } else {
          this.colSize = 2; // Pantallas más grandes, 4 columnas
        }
      });
  }
  calculateColSize(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 1; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 1; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 2; // Pantallas medianas, 3 columnas
    } else {
      return 2; // Por defecto, 4 columnas
    }
  }
  /////// Número de filas para la tabla
  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // captar cambios
  onVariableChange(event: any) {
    const nuevoValor = event;
    console.log('Nuevo valor:', nuevoValor);
  }
  variableMap: { [key: string]: string } = {};
  sumaImpar: number = 0;
  sumaPar: number = 0;

  onSelectChange(event: Event, selectName: string) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    this.variableMap[selectName] = selectedValue;

    this.calculateSumas();
  }

  calculateSumas() {
    let sumaImpar = 0;
    let sumaPar = 0;

    for (const key in this.variableMap) {
      if (this.variableMap.hasOwnProperty(key)) {
        const value = this.variableMap[key];
        const numValue = parseInt(value, 10);

        if (!isNaN(numValue)) {
          if (key.includes('selectValue') && parseInt(key.slice(-1), 10) % 2 === 0) {
            // Suma de valores con terminación par
            sumaPar += numValue;
          } else if (key.includes('selectValue') && parseInt(key.slice(-1), 10) % 2 !== 0) {
            // Suma de valores con terminación impar
            sumaImpar += numValue;
          }
        }
      }
    }

    this.sumaImpar = sumaImpar;
    this.sumaPar = sumaPar;
    const sumaTotal = this.sumaImpar + this.sumaPar;
    const valorUnitario = 100 / sumaTotal;
    const ponderadoFortaleza = this.sumaImpar * valorUnitario;
    const ponderadoDebilidad = this.sumaPar * valorUnitario;

    const porcentajeFortaleza = Math.round(ponderadoFortaleza) + '%';
    const porcentajeDebilidad = Math.round(ponderadoDebilidad) + '%';

    const ponderadoFortalezaOutput = document.getElementById('ponderadoFortalezaOutput');
    const ponderadoDebilidadOutput = document.getElementById('ponderadoDebilidadOutput');

    if (ponderadoFortalezaOutput && ponderadoDebilidadOutput) {
      if (!isNaN(ponderadoFortaleza) && !isNaN(ponderadoDebilidad)) {
        ponderadoFortalezaOutput.textContent = porcentajeFortaleza;
        ponderadoDebilidadOutput.textContent = porcentajeDebilidad;
      } else {
        ponderadoFortalezaOutput.textContent = '';
        ponderadoDebilidadOutput.textContent = '';
      }
    }
  }

}
