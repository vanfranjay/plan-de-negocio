import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { CostosService } from 'src/app/service/costos/costos.service';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.scss']
})
export class CostosComponent {
  costos: string = 'setCostosDir'

  public colSize!: number;
  public colSize2: number = 1;
  costosDirRangoA!: number;
  costosDirRangoB!: number;
  costosDirRangoC!: number;

  costosDirProdServ1!: string;
  costosDirProdTipo1!: string;
  costosDirProdCantidad1!: number;
  costosDirProdUniVenta1!: string;
  costosDirProdFrecuencia1!: string;

  costosDirProdServ2!: string;
  costosDirProdTipo2!: string;
  costosDirProdCantidad2!: number;
  costosDirProdUniVenta2!: string;
  costosDirProdFrecuencia2!: string;

  costosDirProdServ3!: string;
  costosDirProdTipo3!: string;
  costosDirProdCantidad3!: number;
  costosDirProdUniVenta3!: string;
  costosDirProdFrecuencia3!: string;

  costosDirProdServ4!: string;
  costosDirProdTipo4!: string;
  costosDirProdCantidad4!: number;
  costosDirProdUniVenta4!: string;
  costosDirProdFrecuencia4!: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private costosService: CostosService,
  ) {
    this.costosDirRangoA = this.costosService.getCostosDirRangoA();
    this.costosDirRangoB = this.costosService.getCostosDirRangoB();
    this.costosDirRangoC = this.costosService.getCostosDirRangoC();

    this.costosDirProdServ1 = this.costosService.getCostosDirProdServ1();
    this.costosDirProdTipo1 = this.costosService.getCostosDirProdTipo1();
    this.costosDirProdCantidad1 = this.costosService.getCostosDirProdCantidad1();
    this.costosDirProdUniVenta1 = this.costosService.getCostosDirProdUniVenta1();
    this.costosDirProdFrecuencia1 = this.costosService.getCostosDirProdFrecuencia1();

    this.costosDirProdServ2 = this.costosService.getCostosDirProdServ2();
    this.costosDirProdTipo2 = this.costosService.getCostosDirProdTipo2();
    this.costosDirProdCantidad2 = this.costosService.getCostosDirProdCantidad2();
    this.costosDirProdUniVenta2 = this.costosService.getCostosDirProdUniVenta2();
    this.costosDirProdFrecuencia2 = this.costosService.getCostosDirProdFrecuencia2();

    this.costosDirProdServ3 = this.costosService.getCostosDirProdServ3();
    this.costosDirProdTipo3 = this.costosService.getCostosDirProdTipo3();
    this.costosDirProdCantidad3 = this.costosService.getCostosDirProdCantidad3();
    this.costosDirProdUniVenta3 = this.costosService.getCostosDirProdUniVenta3();
    this.costosDirProdFrecuencia3 = this.costosService.getCostosDirProdFrecuencia3();

    this.costosDirProdServ4 = this.costosService.getCostosDirProdServ4();
    this.costosDirProdTipo4 = this.costosService.getCostosDirProdTipo4();
    this.costosDirProdCantidad4 = this.costosService.getCostosDirProdCantidad4();
    this.costosDirProdUniVenta4 = this.costosService.getCostosDirProdUniVenta4();
    this.costosDirProdFrecuencia4 = this.costosService.getCostosDirProdFrecuencia4();
  }

  asignarValor(value: string, valor: any) {
    const valueM: string = this.costos + value;      //setHome${NombreDeudor}

    (this.costosService as any)[valueM](valor);
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
  }
}
