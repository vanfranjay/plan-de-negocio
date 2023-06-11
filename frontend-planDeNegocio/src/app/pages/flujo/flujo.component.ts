import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PresupuestoService } from 'src/app/service/presupuesto/presupuesto.service';
import { FlujoService } from 'src/app/service/flujo/flujo.service';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.scss']
})
export class FlujoComponent {
  colSize: any;
  colSize2: any;

  datosCreditoMonto!: number;
  totalAP!: number;
  totalProyecto!: number;
  aportePropio!: number;
  total!: number;
  totalPI!: number;

  //variables de costos operativos
  costoOpImpuesto!: number;
  costoOpAlimentacion!: number;
  costoOpServLuz!: number;
  costoOpServAgua!: number;
  costoOpServGas!: number;
  costoOpServTelf!: number;
  costoOpServInter!: number;
  costoOpAlquiler!: number;
  costoOpTransporte!: number;
  costoOpMaterialEscritorio!: number;
  costoOpPagoEmpl!: number;
  costoOpPromo!: number;
  costoOpTxtMant1!: string;
  costoOpTxtMant2!: string;
  costoOpTxtMant3!: string;
  costoOpMant1!: number;
  costoOpMant2!: number;
  costoOpMant3!: number;
  costoOpVestimenta!: number;
  costoOpSalud!: number;
  costoOpTxtOtrosImpr1!: string;
  costoOpTxtOtrosImpr2!: string;
  costoOpOtrosImpr1!: number;
  costoOpOtrosImpr2!: number;
  costoOpTotalGasto!: number;

  //variables primera tabla de flujo
  // los que no cambian:
  flujoCostosFijosTb1!: number;
  // los que cambian:



  flujoCostOp: string = 'setCostoOp';
  costoOperativo!: number;
  utilidadOperativa!: number;
  utilidadBruta: number= 0;
  colSize3!: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private presupuestoService: PresupuestoService,
    private flujoService: FlujoService,
  ) {

    //Varibles de costos operativos
    this.costoOpImpuesto = this.flujoService.getCostoOpImpuesto();
    this.costoOpAlimentacion = this.flujoService.getCostoOpAlimentacion();
    this.costoOpServLuz = this.flujoService.getCostoOpServLuz();
    this.costoOpServAgua = this.flujoService.getCostoOpServAgua();
    this.costoOpServGas = this.flujoService.getCostoOpServGas();
    this.costoOpServTelf = this.flujoService.getCostoOpServTelf();
    this.costoOpServInter = this.flujoService.getCostoOpServInter();
    this.costoOpAlquiler = this.flujoService.getCostoOpAlquiler();
    this.costoOpTransporte = this.flujoService.getCostoOpTransporte();
    this.costoOpMaterialEscritorio = this.flujoService.getCostoOpMaterialEscritorio();
    this.costoOpPagoEmpl = this.flujoService.getCostoOpPagoEmpl();
    this.costoOpPromo = this.flujoService.getCostoOpPromo();
    this.costoOpTxtMant1 = this.flujoService.getCostoOpTxtMant1();
    this.costoOpTxtMant2 = this.flujoService.getCostoOpTxtMant2();
    this.costoOpTxtMant3 = this.flujoService.getCostoOpTxtMant3();
    this.costoOpMant1 = this.flujoService.getCostoOpMant1();
    this.costoOpMant2 = this.flujoService.getCostoOpMant2();
    this.costoOpMant3 = this.flujoService.getCostoOpMant3();
    this.costoOpVestimenta = this.flujoService.getCostoOpVestimenta();
    this.costoOpSalud = this.flujoService.getCostoOpSalud();
    this.costoOpTxtOtrosImpr1 = this.flujoService.getCostoOpTxtOtrosImpr1();
    this.costoOpTxtOtrosImpr2 = this.flujoService.getCostoOpTxtOtrosImpr2();
    this.costoOpOtrosImpr1 = this.flujoService.getCostoOpOtrosImpr1();
    this.costoOpOtrosImpr2 = this.flujoService.getCostoOpOtrosImpr2();
    this.costoOpTotalGasto = this.flujoService.getCostoOpTotalGasto();
    this.costoOperativo = this.flujoService.getCostoOperativo();

    this.total = this.presupuestoService.getTotal();

    this.flujoCostosFijosTb1 = this.flujoService.getFlujoCostosFijosTb1();
    this.calcularTotalAP();
    this.calcularTotalPI();
    this.calcularTotalProyecto();
    this.calcularAportePropio();
    this.calcularMontoFinanciar();
  }
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(result => {
        if (result.matches) {
          this.colSize = this.calculateColSize(result.breakpoints);
          this.colSize2 = this.calculateColSize2(result.breakpoints);
          this.colSize3 = this.calculateColSize3(result.breakpoints);
        } else {
          this.colSize = 2; // Pantallas más grandes, 4 columnas
          this.colSize2 = 1;
          this.colSize3 = 3;
        }
      });

  }
  asignarValor(value: string, valor: any) {
    const valueM: string = this.flujoCostOp + value;      //setHome${NombreDeudor}
    (this.flujoService as any)[valueM](valor);

    this.calculateTotalGastosCostoOperativo();
    this.calculateCostoOpTbUtilidad();
    this.calculateUtilidadOperativa();
    this.CalculateCostosFijosFlujoTab1()
  }
  CalculateCostosFijosFlujoTab1(){
    this.flujoCostosFijosTb1 = (this.costoOpTotalGasto ?? 0)
    this.flujoService.setFlujoCostosFijosTb1(this.flujoCostosFijosTb1);
  }
  calculateUtilidadOperativa() {
    this.utilidadOperativa =
      (this.utilidadBruta)-
      (this.costoOperativo);
  }
  calculateCostoOpTbUtilidad() {
    this.costoOperativo = (this.costoOpTotalGasto ?? 0) * 12;
    this.flujoService.setCostoOperativo(this.costoOperativo);
  }

  calculateTotalGastosCostoOperativo() {
    this.costoOpTotalGasto =
      (this.costoOpImpuesto ?? 0) +
      (this.costoOpAlimentacion ?? 0) +
      (this.costoOpServLuz ?? 0) +
      (this.costoOpServAgua ?? 0) +
      (this.costoOpServGas ?? 0) +
      (this.costoOpServTelf ?? 0) +
      (this.costoOpServInter ?? 0) +
      (this.costoOpAlquiler ?? 0) +
      (this.costoOpTransporte ?? 0) +
      (this.costoOpMaterialEscritorio ?? 0) +
      (this.costoOpPagoEmpl ?? 0) +
      (this.costoOpPromo ?? 0) +
      (this.costoOpMant1 ?? 0) +
      (this.costoOpMant2 ?? 0) +
      (this.costoOpMant3 ?? 0) +
      (this.costoOpVestimenta ?? 0) +
      (this.costoOpSalud ?? 0) +
      (this.costoOpOtrosImpr1 ?? 0) +
      (this.costoOpOtrosImpr2 ?? 0)

    this.flujoService.setCostoOpTotalGasto(this.costoOpTotalGasto);
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
  calculateColSize2(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 1; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 1; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 1; // Pantallas medianas, 3 columnas
    } else {
      return 1; // Por defecto, 4 columnas
    }
  }
  calculateColSize3(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 1; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 2; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 3; // Pantallas medianas, 3 columnas
    } else {
      return 3; // Por defecto, 4 columnas
    }
  }
  // datos credito monto
  calcularTotalAP() {
    this.totalAP =
      (this.presupuestoService.getTotal() ?? 0) +
      (this.presupuestoService.getValorManoObra() ?? 0) +
      (this.presupuestoService.getTotalMateriaPrima() ?? 0) +
      (this.presupuestoService.getTotalReqProm() ?? 0) +
      (this.presupuestoService.getTotalInfr() ?? 0) +
      (this.presupuestoService.getTotalMaq() ?? 0) +
      (this.presupuestoService.getTotalLegal() ?? 0)
  }
  calcularMontoFinanciar() {
    this.datosCreditoMonto = this.totalProyecto - this.aportePropio;
  }
  calcularTotalProyecto() {
    this.totalProyecto = (this.totalAP ?? 0) + (this.totalPI ?? 0) - (this.total ?? 0);
  }
  calcularAportePropio() {
    this.aportePropio = this.totalAP ?? 0;
  }
  calcularTotalPI() {
    this.totalPI =
      (this.presupuestoService.getTotalGastosOp() ?? 0) +
      (this.presupuestoService.getTotalMateriaPrima1() ?? 0) +
      (this.presupuestoService.getTotalReqProm1() ?? 0) +
      (this.presupuestoService.getTotalInfr1() ?? 0) +
      (this.presupuestoService.getTotalMaq1() ?? 0) +
      (this.presupuestoService.getTotalLegal1() ?? 0)
  }
}
