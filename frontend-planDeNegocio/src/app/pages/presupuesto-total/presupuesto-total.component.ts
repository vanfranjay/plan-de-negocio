import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { PresupuestoService } from '../../service/presupuesto/presupuesto.service';

@Component({
  selector: 'app-presupuesto-total',
  templateUrl: './presupuesto-total.component.html',
  styleUrls: ['./presupuesto-total.component.scss']
})
export class PresupuestoTotalComponent {
  public colSize!: number;
  public colSize2: number = 1;
  total!: number;
  manoObraEmprendedor!: number;
  gastosOperativos!: number;
  materiaPrimaAP!: number;
  materiaPrimaPI!: number;
  requerimientosPromocionalesAP!: number;
  requerimientosPromocionalesPI!: number;
  infrTerrPlanAP!: number;
  infrTerrPlanPI!: number;
  maqEquVehAP!: number;
  maqEquVehPI!: number;
  requerimientosLegalesAP!: number;
  requerimientosLegalesPI!: number;
  totalAP!: number;
  totalPI!: number;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private presupuestoService: PresupuestoService
  ) {
    this.total = this.presupuestoService.getTotal();
    this.manoObraEmprendedor = this.presupuestoService.getValorManoObra();
    this.gastosOperativos = this.presupuestoService.getTotalGastosOp();
    this.materiaPrimaAP = this.presupuestoService.getTotalMateriaPrima();
    this.materiaPrimaPI = this.presupuestoService.getTotalMateriaPrima1();
    this.requerimientosLegalesAP = this.presupuestoService.getTotalReqProm();
    this.requerimientosLegalesPI = this.presupuestoService.getTotalReqProm1();
    this.infrTerrPlanAP = this.presupuestoService.getTotalInfr();
    this.infrTerrPlanPI = this.presupuestoService.getTotalInfr1();
    this.maqEquVehAP = this.presupuestoService.getTotalMaq();
    this.maqEquVehPI = this.presupuestoService.getTotalMaq1();
    this.requerimientosLegalesAP = this.presupuestoService.getTotalLegal();
    this.requerimientosLegalesPI = this.presupuestoService.getTotalLegal1();
    this.requerimientosPromocionalesAP = this.presupuestoService.getTotalReqProm();
    this.requerimientosPromocionalesPI = this.presupuestoService.getTotalReqProm1();
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
  inputValues: (number | null)[] = [];
  totalApPropioEfectivo: number = 0;

  calculateTotal(): void {
    this.totalApPropioEfectivo = this.inputValues
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
}
