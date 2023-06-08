import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { PresupuestoService } from '../../service/presupuesto/presupuesto.service';
import { PresupuestoTotalService } from '../../service/presupuestoTotal/presupuesto-total.service';

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

  totalProyecto!: number;
  aportePropio!: number;
  porcAportePropio!: number;
  montoFinanciar!: number;
  primerDesembolso!: number;
  segundoDesembolso!: number;

  input!: number;

  showErrorMessage: boolean= false;

  messageApEfectivo!: string;
  messageDesembolso!: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private presupuestoService: PresupuestoService,
    private presupuestoTotalService: PresupuestoTotalService,
  ) {
    this.total = this.presupuestoService.getTotal();
    this.manoObraEmprendedor = this.presupuestoService.getValorManoObra();
    this.gastosOperativos = this.presupuestoService.getTotalGastosOp();
    this.materiaPrimaAP = this.presupuestoService.getTotalMateriaPrima();
    this.materiaPrimaPI = this.presupuestoService.getTotalMateriaPrima1();
    // this.requerimientosLegalesAP = this.presupuestoService.getTotalReqProm();
    // this.requerimientosLegalesPI = this.presupuestoService.getTotalReqProm1();
    this.infrTerrPlanAP = this.presupuestoService.getTotalInfr();
    this.infrTerrPlanPI = this.presupuestoService.getTotalInfr1();
    this.maqEquVehAP = this.presupuestoService.getTotalMaq();
    this.maqEquVehPI = this.presupuestoService.getTotalMaq1();
    this.requerimientosLegalesAP = this.presupuestoService.getTotalLegal();
    this.requerimientosLegalesPI = this.presupuestoService.getTotalLegal1();
    this.requerimientosPromocionalesAP = this.presupuestoService.getTotalReqProm();
    this.requerimientosPromocionalesPI = this.presupuestoService.getTotalReqProm1();

    this.messageApEfectivo = this. presupuestoTotalService.getMessageApEfectivo();

    this.calcularTotalAP();
    this.calcularTotalPI();
    this.calcularTotalProyecto();
    this.calcularAportePropio();
    this.calcularTotalPorcentajeAP();
    this.calcularMontoFinanciar();
    this.verificarApPropioEfectivo();

    this.verificarMontoFinanciar();
  }
  verificarApPropioEfectivo(){
    if (this.totalAP === this.total || (this.totalAP == 0 && (this.total == null || this.total == undefined))) {
     this.messageApEfectivo = 'APORTE PROPIO CORRECTO';
     this.presupuestoTotalService.setMessageApEfectivo(this.messageApEfectivo);
    }else{
      this.messageApEfectivo = 'EL TOTAL APORTE PROPIO DEBE SER IGUAL AL EFECTIVO'
      this.presupuestoTotalService.setMessageApEfectivo(this.messageApEfectivo);
    }
  }
  calcularTotalProyecto() {
    this.totalProyecto = (this.totalAP ?? 0) + (this.totalPI ?? 0) - (this.total ?? 0);
  }
  calcularAportePropio() {
    this.aportePropio = this.totalAP ?? 0;
  }
  calcularTotalPorcentajeAP() {
    if (this.totalAP === 0 || this.totalProyecto === 0) {
      this.porcAportePropio = 0;
    } else {
      this.porcAportePropio = (this.totalAP) / this.totalProyecto;
    }
  }
  calcularMontoFinanciar() {
    this.montoFinanciar = this.totalProyecto - this.aportePropio;
  }
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
  calcularTotalPI() {
    this.totalPI =
      (this.presupuestoService.getTotalGastosOp() ?? 0) +
      (this.presupuestoService.getTotalMateriaPrima1() ?? 0) +
      (this.presupuestoService.getTotalReqProm1() ?? 0) +
      (this.presupuestoService.getTotalInfr1() ?? 0) +
      (this.presupuestoService.getTotalMaq1() ?? 0) +
      (this.presupuestoService.getTotalLegal1() ?? 0)
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

    this.primerDesembolso = this.presupuestoTotalService.getPrimerDesembolso();
    this.segundoDesembolso = this.presupuestoTotalService.getSegundoDesembolso();

    this.inputValues[0] = this.presupuestoTotalService.getInputValues0();
    this.inputValues[1] = this.presupuestoTotalService.getInputValues1();
    this.inputValues[2] = this.presupuestoTotalService.getInputValues2();
    this.inputValues[3] = this.presupuestoTotalService.getInputValues3();
    this.inputValues[4] = this.presupuestoTotalService.getInputValues4();
    this.inputValues[5] = this.presupuestoTotalService.getInputValues5();
    this.totalApPropioEfectivo = this.presupuestoTotalService.getTotalApPropioEfectivo();

    this.showErrorMessage = this.presupuestoTotalService.getShowErrorMessage();

    this.messageDesembolso = this.presupuestoTotalService.getMessageDesembolso();
  }
  verificarMontoFinanciar(){
    if (this.montoFinanciar == ((this.primerDesembolso ?? 0) + (this.segundoDesembolso ?? 0))) {
      this.messageDesembolso = 'DESEMBOLSO CORRECTO';
      this.presupuestoTotalService.setMessageDesembolso(this.messageDesembolso);
    }else{
      this.messageDesembolso = 'REVISAR 1ER Y 2DO DESEMBOLSO';
      this.presupuestoTotalService.setMessageDesembolso(this.messageDesembolso);
    }
  }
  addPrimerDesembolso() {
    this.presupuestoTotalService.setPrimerDesembolso(this.primerDesembolso);
    this.verificarMontoFinanciar();
  }
  addSegundoDesembolso() {
    this.presupuestoTotalService.setSegundoDesembolso(this.segundoDesembolso);
    this.verificarMontoFinanciar();
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

  calculateTotal(index: number): void {
    this.input = this.inputValues[index] ?? 0;
    this.totalApPropioEfectivo = this.inputValues
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoTotalService.setTotalApPropioEfectivo(this.totalApPropioEfectivo);
    switch (index) {
      case 0:
        this.presupuestoTotalService.setInputValues0(this.input);
        break;
      case 1:
        this.presupuestoTotalService.setInputValues1(this.input);
        break;
      case 2:
        this.presupuestoTotalService.setInputValues2(this.input);
        break;
      case 3:
        this.presupuestoTotalService.setInputValues3(this.input);
        break;
      case 4:
        this.presupuestoTotalService.setInputValues4(this.input);
        break;
      case 5:
        this.presupuestoTotalService.setInputValues5(this.input);
        break;
    }
    this.checkOutputValue()
  }
  checkOutputValue() {
    if (this.totalApPropioEfectivo > 100000) {
      this.showErrorMessage = true;
      this.presupuestoTotalService.setShowErrorMessage(this.showErrorMessage);
    } else {
      this.showErrorMessage = false;
      this.presupuestoTotalService.setShowErrorMessage(this.showErrorMessage);
    }
  }
}
