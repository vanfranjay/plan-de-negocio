import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { CostosService } from 'src/app/service/costos/costos.service';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.scss']
})
export class CostosComponent {
  public colSize!: number;
  public colSize2: number = 1;
  rangoA!: number;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private costosService: CostosService,
  ) {
    this.rangoA = this.costosService.getRangoA();
  }
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(result => {
        if (result.matches) {
          this.colSize = this.calculateColSize(result.breakpoints);
          this.colSize2 = this.calculateColSize2(result.breakpoints);
        } else {
          this.colSize = 3; // Pantallas más grandes, 4 columnas
          this.colSize2 = 1;
        }
      });
  this.rangoA = this.costosService.getRangoA();
  }
  calculateColSize(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 2; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 2; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 3; // Pantallas medianas, 3 columnas
    } else {
      return 3; // Por defecto, 4 columnas
    }
  }
  calculateColSize2(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 2; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 2; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 1; // Pantallas medianas, 3 columnas
    } else {
      return 1; // Por defecto, 4 columnas
    }
  }
  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  inputValues: (number | null)[] = [];
  total: number = 0;

  calculateTotal(): void {
    this.total = this.inputValues
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.costosService.setRangoA(this.rangoA)
  }
}
