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
  constructor(private breakpointObserver: BreakpointObserver){}
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
}
