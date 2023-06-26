import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PresupuestoService } from 'src/app/service/presupuesto/presupuesto.service';
import { FlujoService } from 'src/app/service/flujo/flujo.service';
import { CostosService } from 'src/app/service/costos/costos.service';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.scss']
})
export class FlujoComponent {
  colSize: any;
  colSize2: any;
  // variable de presupuesto total

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

  // variables de costos para la primera tabla
  costosDirEneVM!: number;
  costosDirFebVM!: number;
  costosDirMarVM!: number;
  costosDirAbrVM!: number;
  costosDirMayVM!: number;
  costosDirJunVM!: number;
  costosDirJulVM!: number;
  costosDirAgoVM!: number;
  costosDirSepVM!: number;
  costosDirOctVM!: number;
  costosDirNovVM!: number;
  costosDirDicVM!: number;

  costosDirEneCPM!: number;
  costosDirFebCPM!: number;
  costosDirMarCPM!: number;
  costosDirAbrCPM!: number;
  costosDirMayCPM!: number;
  costosDirJunCPM!: number;
  costosDirJulCPM!: number;
  costosDirAgoCPM!: number;
  costosDirSepCPM!: number;
  costosDirOctCPM!: number;
  costosDirNovCPM!: number;
  costosDirDicCPM!: number;


  flujoCostOp: string = 'setCostoOp';
  costoOperativo!: number;
  utilidadOperativa!: number;
  utilidadBruta: number = 0;
  colSize3!: number;

  //datos del credito
  flujoCuotaProx!: number;
  flujoPoliza: number = 0.395;
  flujoFrecuencia1!: string;
  flujoValorFrecuencia1!: number;
  datosCreditoMonto!: number;
  flujoTipoCuota!: number;
  flujoTipoCuotaOpcion!: string;
  flujoActividad: string = 'SERVICIOS';
  flujoTasaInteres: number = 0.115;
  flujoDatosCredito!: number;
  flujoPlazoMeses!: number;
  flujoPoliza1: number[] = [];
  flujoResultadoArray: number[] = [];
  flujoCuotaVariable: number[] = [];
  mostrarCuotaProxValue!: number;

  //variables primera tabla de flujo
  // los que no cambian:
  flujoCostosFijosTb1!: number;
  // los que cambian:
  flujoSIEne!: number;
  flujoSIFeb!: number;
  flujoSIMar!: number;
  flujoSIAbr!: number;
  flujoSIMay!: number;
  flujoSIJun!: number;
  flujoSIJul!: number;
  flujoSIAgo!: number;
  flujoSISep!: number;
  flujoSIOct!: number;
  flujoSINov!: number;
  flujoSIDiv!: number;
  flujoIEne: number = 0;
  flujoIFeb: number = 0;
  flujoIMar: number = 0;
  flujoIAbr: number = 0;
  flujoIMay: number = 0;
  flujoIJun: number = 0;
  flujoIJul: number = 0;
  flujoIAgo: number = 0;
  flujoISep: number = 0;
  flujoIOct: number = 0;
  flujoINov: number = 0;
  flujoIDiv: number = 0;
  flujoCProdEne: number = 0;
  flujoCPFeb: number = 0;
  flujoCPMar: number = 0;
  flujoCPAbr: number = 0;
  flujoCPMay: number = 0;
  flujoCPJun: number = 0;
  flujoCPJul: number = 0;
  flujoCPAgo: number = 0;
  flujoCPSep: number = 0;
  flujoCPOct: number = 0;
  flujoCPNov: number = 0;
  flujoCPDiv: number = 0;
  flujoUBEne!: number;
  flujoUBFeb!: number;
  flujoUBMar!: number;
  flujoUBAbr!: number;
  flujoUBMay!: number;
  flujoUBJun!: number;
  flujoUBJul!: number;
  flujoUBAgo!: number;
  flujoUBSep!: number;
  flujoUBOct!: number;
  flujoUBNov!: number;
  flujoUBDiv!: number;
  flujoUNCdPagEne!: number;
  flujoUNCdPFeb!: number;
  flujoUNCdPMar!: number;
  flujoUNCdPAbr!: number;
  flujoUNCdPMay!: number;
  flujoUNCdPJun!: number;
  flujoUNCdPJul!: number;
  flujoUNCdPAgo!: number;
  flujoUNCdPSep!: number;
  flujoUNCdPOct!: number;
  flujoUNCdPNov!: number;
  flujoUNCdPDiv!: number;
  flujoCEne!: number;
  flujoCFeb!: number;
  flujoCMar!: number;
  flujoCAbr!: number;
  flujoCMay!: number;
  flujoCJun!: number;
  flujoCJul!: number;
  flujoCAgo!: number;
  flujoCSep!: number;
  flujoCOct!: number;
  flujoCNov!: number;
  flujoCDiv!: number;
  flujoAEne!: number;
  flujoAFeb!: number;
  flujoAMar!: number;
  flujoAAbr!: number;
  flujoAMay!: number;
  flujoAJun!: number;
  flujoAJul!: number;
  flujoAAgo!: number;
  flujoASep!: number;
  flujoAOct!: number;
  flujoANov!: number;
  flujoADiv!: number;

  flujoAcIni!: number;

  flujoTotalSaldoInicial!: number;
  flujoTotalIngreso!: number;
  flujoTotalCostoProduccion!: number;
  flujoTotalUB!: number;
  flujoTotalCF!: number;
  flujoTotalUNCP!: number;
  flujoTotalC!: number;
  flujoTotalFA!: number;

  flujoTotalPeriodoSaldoInicial!: number;
  flujoTotalPeriodoIngreso!: number;
  flujoTotalPeriodoCostoProduccion!: number;
  flujoTotalPeriodoUB!: number;
  flujoTotalPeriodoCF!: number;
  flujoTotalPeriodoUNCP!: number;
  flujoTotalPeriodoC!: number;
  flujoTotalPeriodoFA!: number;

  flujoSaldoInicial!: number;

  // datos de costos
  flujoCostosDirAnualVM!: number;
  flujoCostosDirAnualCPM!: number;
  flujoCostosDirMubT!: number;

  // datos anuales
  flujoTV!: number;
  flujoTC!: number;
  flujoTM!: number;

  // Tabla de utilidad
  flujoUB!: number;


  interesAX15PL!: number;
  condicionalCuotaFija!: number;
  // tabla pequeña de flujo
  flujoImplementacionEstimadaMes!: string;
  flujoImplementacionEstimadaMesValue!: number;
  flujoImplementacionEstimadaA!: number;
  flujoImplementacionEstimadoMes!: string;
  flujoImplementacionEstimadoMesValue!: number;
  tab2A!: number;
  flujoRedondeoMax!: number;
  flujoPeriodoA!: number;
  flujoPeriodoMes!: number;
  flujoBuscarV!: number;

  // tabla flujo 2 pronostico
  flujoSaldoInicial0!: number;
  flujoSaldoInicial1!: number;
  flujoSaldoInicial2!: number;
  flujoSaldoInicial3!: number;
  flujoSaldoInicial4!: number;
  flujoSaldoInicial5!: number;
  flujoSaldoInicial6!: number;
  flujoSaldoInicial7!: number;
  flujoIngreso0!: number;
  flujoIngreso1!: number;
  flujoIngreso2!: number;
  flujoIngreso3!: number;
  flujoIngreso4!: number;
  flujoIngreso5!: number;
  flujoIngreso6!: number;
  flujoIngreso7!: number;
  flujoCostoProduccion0!: number;
  flujoCostoProduccion1!: number;
  flujoCostoProduccion2!: number;
  flujoCostoProduccion3!: number;
  flujoCostoProduccion4!: number;
  flujoCostoProduccion5!: number;
  flujoCostoProduccion6!: number;
  flujoCostoProduccion7!: number;
  flujoUtilidadBruta0!: number;
  flujoUtilidadBruta1!: number;
  flujoUtilidadBruta2!: number;
  flujoUtilidadBruta3!: number;
  flujoUtilidadBruta4!: number;
  flujoUtilidadBruta5!: number;
  flujoUtilidadBruta6!: number;
  flujoUtilidadBruta7!: number;
  flujoCostosFijos0!: number;
  flujoCostosFijos1!: number;
  flujoCostosFijos2!: number;
  flujoCostosFijos3!: number;
  flujoCostosFijos4!: number;
  flujoCostosFijos5!: number;
  flujoCostosFijos6!: number;
  flujoCostosFijos7!: number;
  flujoUtilidadNetaCapPago0!: number;
  flujoUtilidadNetaCapPago1!: number;
  flujoUtilidadNetaCapPago2!: number;
  flujoUtilidadNetaCapPago3!: number;
  flujoUtilidadNetaCapPago4!: number;
  flujoUtilidadNetaCapPago5!: number;
  flujoUtilidadNetaCapPago6!: number;
  flujoUtilidadNetaCapPago7!: number;
  flujoCuota0!: number;
  flujoCuota1!: number;
  flujoCuota2!: number;
  flujoCuota3!: number;
  flujoCuota4!: number;
  flujoCuota5!: number;
  flujoCuota6!: number;
  flujoCuota7!: number;
  flujoAcumulado0!: number;
  flujoAcumulado1!: number;
  flujoAcumulado2!: number;
  flujoAcumulado3!: number;
  flujoAcumulado4!: number;
  flujoAcumulado5!: number;
  flujoAcumulado6!: number;
  flujoAcumulado7!: number;

  // flujo Van
  flujoValueVan!: number;
  flujoValueFrPaDv!: number;
  //flujo tir
  flujoValueTir!: number;

  anioActual: number = new Date().getFullYear();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private presupuestoService: PresupuestoService,
    private flujoService: FlujoService,
    private costosService: CostosService,
  ) {
    //datos de costos para la primera tabla
    this.flujoIEne = (isNaN(this.costosService.getCostosDirEneVM()) ? 0 : this.costosService.getCostosDirEneVM());
    this.flujoIFeb = (isNaN(this.costosService.getCostosDirFebVM()) ? 0 : this.costosService.getCostosDirFebVM());
    this.flujoIMar = (isNaN(this.costosService.getCostosDirMarVM()) ? 0 : this.costosService.getCostosDirMarVM());
    this.flujoIAbr = (isNaN(this.costosService.getCostosDirAbrVM()) ? 0 : this.costosService.getCostosDirAbrVM());
    this.flujoIMay = (isNaN(this.costosService.getCostosDirMayVM()) ? 0 : this.costosService.getCostosDirMayVM());
    this.flujoIJun = (isNaN(this.costosService.getCostosDirJunVM()) ? 0 : this.costosService.getCostosDirJunVM());
    this.flujoIJul = (isNaN(this.costosService.getCostosDirJulVM()) ? 0 : this.costosService.getCostosDirJulVM());
    this.flujoIAgo = (isNaN(this.costosService.getCostosDirAgoVM()) ? 0 : this.costosService.getCostosDirAgoVM());
    this.flujoISep = (isNaN(this.costosService.getCostosDirSepVM()) ? 0 : this.costosService.getCostosDirSepVM());
    this.flujoIOct = (isNaN(this.costosService.getCostosDirOctVM()) ? 0 : this.costosService.getCostosDirOctVM());
    this.flujoINov = (isNaN(this.costosService.getCostosDirNovVM()) ? 0 : this.costosService.getCostosDirNovVM());
    this.flujoIDiv = (isNaN(this.costosService.getCostosDirDicVM()) ? 0 : this.costosService.getCostosDirDicVM());

    this.flujoCProdEne = (isNaN(this.costosService.getCostosDirEneCPM()) ? 0 : this.costosService.getCostosDirEneCPM());
    this.flujoCPFeb = (isNaN(this.costosService.getCostosDirFebCPM()) ? 0 : this.costosService.getCostosDirFebCPM());
    this.flujoCPMar = (isNaN(this.costosService.getCostosDirMarCPM()) ? 0 : this.costosService.getCostosDirMarCPM());
    this.flujoCPAbr = (isNaN(this.costosService.getCostosDirAbrCPM()) ? 0 : this.costosService.getCostosDirAbrCPM());
    this.flujoCPMay = (isNaN(this.costosService.getCostosDirMayCPM()) ? 0 : this.costosService.getCostosDirMayCPM());
    this.flujoCPJun = (isNaN(this.costosService.getCostosDirJunCPM()) ? 0 : this.costosService.getCostosDirJunCPM());
    this.flujoCPJul = (isNaN(this.costosService.getCostosDirJulCPM()) ? 0 : this.costosService.getCostosDirJulCPM());
    this.flujoCPAgo = (isNaN(this.costosService.getCostosDirAgoCPM()) ? 0 : this.costosService.getCostosDirAgoCPM());
    this.flujoCPSep = (isNaN(this.costosService.getCostosDirSepCPM()) ? 0 : this.costosService.getCostosDirSepCPM());
    this.flujoCPOct = (isNaN(this.costosService.getCostosDirOctCPM()) ? 0 : this.costosService.getCostosDirOctCPM());
    this.flujoCPNov = (isNaN(this.costosService.getCostosDirNovCPM()) ? 0 : this.costosService.getCostosDirNovCPM());
    this.flujoCPDiv = (isNaN(this.costosService.getCostosDirDicCPM()) ? 0 : this.costosService.getCostosDirDicCPM());

    this.flujoTotalSaldoInicial = this.flujoService.getFlujoTotalSaldoInicial();
    this.flujoTotalIngreso = this.flujoService.getFlujoTotalIngreso();
    this.flujoTotalCostoProduccion = this.flujoService.getFlujoTotalCostoProduccion();
    this.flujoTotalUB = this.flujoService.getFlujoTotalUB();
    this.flujoTotalCF = this.flujoService.getFlujoTotalCF();
    this.flujoTotalUNCP = this.flujoService.getFlujoTotalUNCP();
    this.flujoTotalC = this.flujoService.getFlujoTotalC();
    this.flujoTotalFA = this.flujoService.getFlujoTotalFA();

    this.flujoTotalPeriodoSaldoInicial = this.flujoService.getFlujoTotalPeriodoSaldoInicial();
    this.flujoTotalPeriodoIngreso = this.flujoService.getFlujoTotalPeriodoIngreso();
    this.flujoTotalPeriodoCostoProduccion = this.flujoService.getFlujoTotalPeriodoCostoProduccion();
    this.flujoTotalPeriodoUB = this.flujoService.getFlujoTotalPeriodoUB();
    this.flujoTotalPeriodoCF = this.flujoService.getFlujoTotalPeriodoCF();
    this.flujoTotalPeriodoUNCP = this.flujoService.getFlujoTotalPeriodoUNCP();
    this.flujoTotalPeriodoC = this.flujoService.getFlujoTotalPeriodoC();
    this.flujoTotalPeriodoFA = this.flujoService.getFlujoTotalPeriodoFA();

    this.flujoSaldoInicial = this.flujoService.getFlujoSaldoInicial();
    this.flujoAcIni = this.flujoService.getFlujoAcIni();


    // tabla flujo 2 pronostico
    this.flujoSaldoInicial0 = this.flujoService.getFlujoSaldoInicial0();
    this.flujoSaldoInicial1 = this.flujoService.getFlujoSaldoInicial1();
    this.flujoSaldoInicial2 = this.flujoService.getFlujoSaldoInicial2();
    this.flujoSaldoInicial3 = this.flujoService.getFlujoSaldoInicial3();
    this.flujoSaldoInicial4 = this.flujoService.getFlujoSaldoInicial4();
    this.flujoSaldoInicial5 = this.flujoService.getFlujoSaldoInicial5();
    this.flujoSaldoInicial6 = this.flujoService.getFlujoSaldoInicial6();
    this.flujoSaldoInicial7 = this.flujoService.getFlujoSaldoInicial7();
    this.flujoIngreso0 = this.flujoService.getFlujoIngreso0();
    this.flujoIngreso1 = this.flujoService.getFlujoIngreso1();
    this.flujoIngreso2 = this.flujoService.getFlujoIngreso2();
    this.flujoIngreso3 = this.flujoService.getFlujoIngreso3();
    this.flujoIngreso4 = this.flujoService.getFlujoIngreso4();
    this.flujoIngreso5 = this.flujoService.getFlujoIngreso5();
    this.flujoIngreso6 = this.flujoService.getFlujoIngreso6();
    this.flujoIngreso7 = this.flujoService.getFlujoIngreso7();
    this.flujoCostoProduccion0 = this.flujoService.getFlujoCostoProduccion0();
    this.flujoCostoProduccion1 = this.flujoService.getFlujoCostoProduccion1();
    this.flujoCostoProduccion2 = this.flujoService.getFlujoCostoProduccion2();
    this.flujoCostoProduccion3 = this.flujoService.getFlujoCostoProduccion3();
    this.flujoCostoProduccion4 = this.flujoService.getFlujoCostoProduccion4();
    this.flujoCostoProduccion5 = this.flujoService.getFlujoCostoProduccion5();
    this.flujoCostoProduccion6 = this.flujoService.getFlujoCostoProduccion6();
    this.flujoCostoProduccion7 = this.flujoService.getFlujoCostoProduccion7();
    this.flujoUtilidadBruta0 = this.flujoService.getFlujoUtilidadBruta0();
    this.flujoUtilidadBruta1 = this.flujoService.getFlujoUtilidadBruta1();
    this.flujoUtilidadBruta2 = this.flujoService.getFlujoUtilidadBruta2();
    this.flujoUtilidadBruta3 = this.flujoService.getFlujoUtilidadBruta3();
    this.flujoUtilidadBruta4 = this.flujoService.getFlujoUtilidadBruta4();
    this.flujoUtilidadBruta5 = this.flujoService.getFlujoUtilidadBruta5();
    this.flujoUtilidadBruta6 = this.flujoService.getFlujoUtilidadBruta6();
    this.flujoUtilidadBruta7 = this.flujoService.getFlujoUtilidadBruta7();
    this.flujoCostosFijos0 = this.flujoService.getFlujoCostosFijos0();
    this.flujoCostosFijos1 = this.flujoService.getFlujoCostosFijos1();
    this.flujoCostosFijos2 = this.flujoService.getFlujoCostosFijos2();
    this.flujoCostosFijos3 = this.flujoService.getFlujoCostosFijos3();
    this.flujoCostosFijos4 = this.flujoService.getFlujoCostosFijos4();
    this.flujoCostosFijos5 = this.flujoService.getFlujoCostosFijos5();
    this.flujoCostosFijos6 = this.flujoService.getFlujoCostosFijos6();
    this.flujoCostosFijos7 = this.flujoService.getFlujoCostosFijos7();
    this.flujoUtilidadNetaCapPago0 = this.flujoService.getFlujoUtilidadNetaCapPago0();
    this.flujoUtilidadNetaCapPago1 = this.flujoService.getFlujoUtilidadNetaCapPago1();
    this.flujoUtilidadNetaCapPago2 = this.flujoService.getFlujoUtilidadNetaCapPago2();
    this.flujoUtilidadNetaCapPago3 = this.flujoService.getFlujoUtilidadNetaCapPago3();
    this.flujoUtilidadNetaCapPago4 = this.flujoService.getFlujoUtilidadNetaCapPago4();
    this.flujoUtilidadNetaCapPago5 = this.flujoService.getFlujoUtilidadNetaCapPago5();
    this.flujoUtilidadNetaCapPago6 = this.flujoService.getFlujoUtilidadNetaCapPago6();
    this.flujoUtilidadNetaCapPago7 = this.flujoService.getFlujoUtilidadNetaCapPago7();
    this.flujoCuota0 = this.flujoService.getFlujoCuota0();
    this.flujoCuota1 = this.flujoService.getFlujoCuota1();
    this.flujoCuota2 = this.flujoService.getFlujoCuota2();
    this.flujoCuota3 = this.flujoService.getFlujoCuota3();
    this.flujoCuota4 = this.flujoService.getFlujoCuota4();
    this.flujoCuota5 = this.flujoService.getFlujoCuota5();
    this.flujoCuota6 = this.flujoService.getFlujoCuota6();
    this.flujoCuota7 = this.flujoService.getFlujoCuota7();
    this.flujoAcumulado0 = this.flujoService.getFlujoAcumulado0();
    this.flujoAcumulado1 = this.flujoService.getFlujoAcumulado1();
    this.flujoAcumulado2 = this.flujoService.getFlujoAcumulado2();
    this.flujoAcumulado3 = this.flujoService.getFlujoAcumulado3();
    this.flujoAcumulado4 = this.flujoService.getFlujoAcumulado4();
    this.flujoAcumulado5 = this.flujoService.getFlujoAcumulado5();
    this.flujoAcumulado6 = this.flujoService.getFlujoAcumulado6();
    this.flujoAcumulado7 = this.flujoService.getFlujoAcumulado7();

    //utilidad bruta
    this.flujoUBEne = (isNaN(this.flujoIEne) ? 0 : this.flujoIEne) - (isNaN(this.flujoCProdEne) ? 0 : this.flujoCProdEne);
    this.flujoUBFeb = (isNaN(this.flujoIFeb) ? 0 : this.flujoIFeb) - (isNaN(this.flujoCPFeb) ? 0 : this.flujoCPFeb);
    this.flujoUBMar = (isNaN(this.flujoIMar) ? 0 : this.flujoIMar) - (isNaN(this.flujoCPMar) ? 0 : this.flujoCPMar);
    this.flujoUBAbr = (isNaN(this.flujoIAbr) ? 0 : this.flujoIAbr) - (isNaN(this.flujoCPAbr) ? 0 : this.flujoCPAbr);
    this.flujoUBMay = (isNaN(this.flujoIMay) ? 0 : this.flujoIMay) - (isNaN(this.flujoCPMay) ? 0 : this.flujoCPMay);
    this.flujoUBJun = (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) - (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun);
    this.flujoUBJul = (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) - (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul);
    this.flujoUBAgo = (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) - (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo);
    this.flujoUBSep = (isNaN(this.flujoISep) ? 0 : this.flujoISep) - (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep);
    this.flujoUBOct = (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) - (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct);
    this.flujoUBNov = (isNaN(this.flujoINov) ? 0 : this.flujoINov) - (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov);
    this.flujoUBDiv = (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv) - (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);

    this.flujoUB = this.flujoService.getFlujoUB();
    // Variables de costos
    this.flujoCostosDirAnualVM = this.costosService.getCostosDirAnualVM();
    this.flujoCostosDirAnualCPM = this.costosService.getCostosDirAnualCPM();
    this.flujoCostosDirMubT = this.costosService.getCostosDirMubT();

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

    //datos credito
    this.flujoActividad = this.flujoService.getFlujoActividad();
    this.flujoTasaInteres = this.flujoService.getFlujoTasaInteres();
    this.flujoPoliza = this.flujoService.getFlujoPoliza();

    this.utilidadOperativa = this.flujoService.getUtilidadOperativa();

    this.flujoFrecuencia1 = this.flujoService.getFlujoFrecuencia1();
    this.flujoValorFrecuencia1 = this.flujoService.getFlujoValorFrecuencia1();
    this.flujoPlazoMeses = this.flujoService.getFlujoPlazoMeses();

    this.flujoPoliza1 = this.flujoService.getFlujoPoliza1();

    this.flujoTipoCuotaOpcion = this.flujoService.getFlujoTipoCuotaOpcion();

    this.mostrarCuotaProxValue = this.flujoService.getMostrarCuotaProxValue();

    //tabla flujo


    this.interesAX15PL = this.flujoService.getInteresAX15PL();
    this.condicionalCuotaFija = this.flujoService.getCondicionalCuotaFija();

    // datos para el van
    this.flujoValueFrPaDv = this.flujoService.getFlujoValueFrPaDv();
    this.flujoValueVan = this.flujoService.getFlujoValueVan();
    //calcular TIR
    this.flujoValueTir = this.flujoService.getFlujoValueTir();

    // tabla pequeña de flujo
    this.flujoImplementacionEstimadaMes = this.flujoService.getFlujoImplementacionEstimadaMes();
    this.flujoImplementacionEstimadaMesValue = this.flujoService.getFlujoImplementacionEstimadaMesValue();
    this.flujoImplementacionEstimadaA = this.flujoService.getFlujoImplementacionEstimadaA();
    this.flujoImplementacionEstimadoMes = this.flujoService.getFlujoImplementacionEstimadoMes();
    this.flujoImplementacionEstimadoMesValue = this.flujoService.getFlujoImplementacionEstimadoMesValue();
    this.tab2A = this.flujoService.getTab2A();
    this.flujoRedondeoMax = this.flujoService.getFlujoRedondeoMax();
    this.flujoPeriodoA = this.flujoService.getFlujoPeriodoA();
    this.flujoPeriodoMes = this.flujoService.getFlujoPeriodoMes();
    this.flujoBuscarV = this.flujoService.getFlujoBuscarV();
    //  tabla 2

    this.flujoCostosFijosTb1 = this.flujoService.getFlujoCostosFijosTb1();
    this.calcularTotalAP();
    this.calcularTotalPI();
    this.calcularTotalProyecto();
    this.calcularAportePropio();
    this.calcularMontoFinanciar();
    if (this.datosCreditoMonto) {
      this.calculateDatosCredito();
    }
    this.asignarTipoCuota();
    this.llenarTabla1Flujo();
    this.calculateTV();
    this.calculateTC();
    this.calculateTM();
    this.calculateUB();
    this.calculateUtilidadOperativa();

    this.calculateSaldoInicial();

    this.calculateFlujoAcumuladoInicial();
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
    this.CalculateCostosFijosFlujoTab1();
    this.llenarTabla1Flujo();
    this.llenarTablaNro2();
    this.calculateVan();
  }
  CalculateCostosFijosFlujoTab1() {
    this.flujoCostosFijosTb1 = (this.costoOpTotalGasto ?? 0)
    this.flujoService.setFlujoCostosFijosTb1(this.flujoCostosFijosTb1);
  }
  /////////////////// tabla de flujo
  //  asignarValorFlujoCEne(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCEne = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCEne = 0;
  //    }
  //  }
  //  asignarValorFlujoCFeb(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCFeb = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCFeb = 0;
  //    }
  //  }
  //  asignarValorFlujoCMar(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCMar = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCMar = 0;
  //    }
  //  }
  //  asignarValorFlujoCAbr(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCAbr = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCAbr = 0;
  //    }
  //  }
  //  asignarValorFlujoCMay(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCMay = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCMay = 0;
  //    }
  //  }
  //  asignarValorFlujoCJun(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCJun = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCJun = 0;
  //    }
  //  }
  //  asignarValorFlujoCJul(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCJul = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCJul = 0;
  //    }
  //  }
  //  asignarValorFlujoCAgo(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCAgo = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCAgo = 0;
  //    }
  //  }
  //  asignarValorFlujoCSep(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCSep = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCSep = 0;
  //    }
  //  }
  //  asignarValorFlujoCOct(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCOct = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCOct = 0;
  //    }
  //  }
  //  asignarValorFlujoCNov(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCNov = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCNov = 0;
  //    }
  //  }
  //  asignarValorFlujoCDiv(): number {
  //    if (this.flujoService.getFlujoCuotaProx() != null) {
  //      return this.flujoCDiv = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
  //    } else {
  //      return this.flujoCDiv = 0;
  //    }
  //  }

  llenarTabla1Flujo() {
    const resultadoArray: number[] = this.calculatePoliza2();
    const resultadoCuotaVariable: number[] = this.calcularDatosCreditoVariable();

    this.flujoUBEne = (this.flujoIEne ?? 0) - (this.flujoCProdEne ?? 0);
    this.flujoUNCdPagEne = (this.flujoUBEne ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        this.flujoCEne = this.calculateDatosCredito() + this.calculatePoliza();
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        this.flujoCEne = resultadoCuotaVariable[0] + this.calculatePoliza();
      } else {
        this.flujoCEne = this.calculatePoliza();
      }
    } else {
      this.flujoCEne = 0;
    }
    this.flujoAEne = (this.flujoUNCdPagEne ?? 0) - (this.flujoCEne ?? 0) + this.calculateFlujoAcumuladoInicial();
    this.flujoSIFeb = (isNaN(this.flujoAEne) ? 0 : this.flujoAEne);
    this.flujoService.setFlujoUBEne(this.flujoUBEne);
    this.flujoService.setFlujoUNCdPagEne(this.flujoUNCdPagEne);
    this.flujoService.setFlujoAEne(this.flujoAEne);
    this.flujoService.setFlujoSIFeb(this.flujoSIFeb);

    this.flujoUBFeb = (this.flujoIFeb ?? 0) - (this.flujoCPFeb ?? 0);
    this.flujoUNCdPFeb = (this.flujoUBFeb ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (1 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCFeb = this.calculateDatosCredito() + ((isNaN(resultadoArray[1]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[1]);
        } else {
          this.flujoCFeb = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (1 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCFeb = resultadoCuotaVariable[1] + ((isNaN(resultadoArray[1]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[1]);
        } else {
          this.flujoCFeb = 0;
        }
      } else {
        this.flujoCFeb = this.calculatePoliza();
      }
    } else {
      this.flujoCFeb = 0;
    }
    this.flujoAFeb = (this.flujoUNCdPFeb ?? 0) - (this.flujoCFeb ?? 0) + this.flujoSIFeb;
    this.flujoSIMar = this.flujoAFeb;
    this.flujoService.setFlujoUBFeb(this.flujoUBFeb);
    this.flujoService.setFlujoUNCdPFeb(this.flujoUNCdPFeb);
    this.flujoService.setFlujoAFeb(this.flujoAFeb);
    this.flujoService.setFlujoSIMar(this.flujoSIMar);

    this.flujoUBMar = (this.flujoIMar ?? 0) - (this.flujoCPMar ?? 0);
    this.flujoUNCdPMar = (this.flujoUBMar ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (2 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCMar = this.calculateDatosCredito() + ((isNaN(resultadoArray[2]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[2]);
        } else {
          this.flujoCMar = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (2 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCMar = resultadoCuotaVariable[2] + ((isNaN(resultadoArray[2]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[2]);
        } else {
          this.flujoCMar = 0;
        }
      } else {
        this.flujoCMar = this.calculatePoliza();
      }
    } else {
      this.flujoCMar = 0;
    }
    this.flujoAMar = (this.flujoUNCdPMar ?? 0) - (this.flujoCMar ?? 0) + this.flujoSIMar; 1
    this.flujoSIAbr = this.flujoAMar;
    this.flujoService.setFlujoUBMar(this.flujoUBMar);
    this.flujoService.setFlujoUNCdPMar(this.flujoUNCdPMar);
    this.flujoService.setFlujoAMar(this.flujoAMar);
    this.flujoService.setFlujoSIAbr(this.flujoSIAbr);

    this.flujoUBAbr = (this.flujoIAbr ?? 0) - (this.flujoCPAbr ?? 0);
    this.flujoUNCdPAbr = (this.flujoUBAbr ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (3 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCAbr = this.calculateDatosCredito() + ((isNaN(resultadoArray[3]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[3]);
        } else {
          this.flujoCAbr = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (3 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCAbr = resultadoCuotaVariable[3] + ((isNaN(resultadoArray[3]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[3]);
        } else {
          this.flujoCAbr = 0;
        }
      } else {
        this.flujoCAbr = this.calculatePoliza();
      }
    } else {
      this.flujoCAbr = 0;
    }
    this.flujoAAbr = (this.flujoUNCdPAbr ?? 0) - (this.flujoCAbr ?? 0) + this.flujoSIAbr;
    this.flujoSIMay = this.flujoAAbr;
    this.flujoService.setFlujoUBAbr(this.flujoUBAbr);
    this.flujoService.setFlujoUNCdPAbr(this.flujoUNCdPAbr);
    this.flujoService.setFlujoAAbr(this.flujoAAbr);
    this.flujoService.setFlujoSIMay(this.flujoSIMay);

    this.flujoUBMay = (this.flujoIMay ?? 0) - (this.flujoCPMay ?? 0);
    this.flujoUNCdPMay = (this.flujoUBMay ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (4 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCMay = this.calculateDatosCredito() + ((isNaN(resultadoArray[4]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[4]);
        } else {
          this.flujoCMay = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (4 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCMay = resultadoCuotaVariable[4] + ((isNaN(resultadoArray[4]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[4]);
        } else {
          this.flujoCMay = 0;
        }
      } else {
        this.flujoCMay = this.calculatePoliza();
      }
    } else {
      this.flujoCMay = 0;
    }
    this.flujoAMay = (this.flujoUNCdPMay ?? 0) - (this.flujoCMay ?? 0) + this.flujoSIMay;
    this.flujoSIJun = this.flujoAMay;
    this.flujoService.setFlujoUBMay(this.flujoUBMay);
    this.flujoService.setFlujoUNCdPMay(this.flujoUNCdPMay);
    this.flujoService.setFlujoAMay(this.flujoAMay);
    this.flujoService.setFlujoSIJun(this.flujoSIJun);

    this.flujoUBJun = (this.flujoIJun ?? 0) - (this.flujoCPJun ?? 0);
    this.flujoUNCdPJun = (this.flujoUBJun ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (5 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCJun = this.calculateDatosCredito() + ((isNaN(resultadoArray[5]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[5]);
        } else {
          this.flujoCJun = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (5 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCJun = resultadoCuotaVariable[5] + ((isNaN(resultadoArray[5]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[5]);
        } else {
          this.flujoCJun = 0;
        }
      } else {
        this.flujoCJun = this.calculatePoliza();
      }
    } else {
      this.flujoCJun = 0;
    }
    this.flujoAJun = (this.flujoUNCdPJun ?? 0) - (this.flujoCJun ?? 0) + this.flujoSIJun;
    this.flujoSIJul = this.flujoAJun;
    this.flujoService.setFlujoUBJun(this.flujoUBJun);
    this.flujoService.setFlujoUNCdPJun(this.flujoUNCdPJun);
    this.flujoService.setFlujoAJun(this.flujoAJun);
    this.flujoService.setFlujoSIJul(this.flujoSIJul);

    this.flujoUBJul = (this.flujoIJul ?? 0) - (this.flujoCPJul ?? 0);
    this.flujoUNCdPJul = (this.flujoUBJul ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (6 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCJul = this.calculateDatosCredito() + ((isNaN(resultadoArray[6]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[6]);
        } else {
          this.flujoCJul = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (6 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCJul = resultadoCuotaVariable[6] + ((isNaN(resultadoArray[6]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[6]);
        } else {
          this.flujoCJul = 0;
        }
      } else {
        this.flujoCJul = this.calculatePoliza();
      }
    } else {
      this.flujoCJul = 0;
    }
    this.flujoAJul = (this.flujoUNCdPJul ?? 0) - (this.flujoCJul ?? 0) + this.flujoSIJul;
    this.flujoSIAgo = this.flujoAJul;
    this.flujoService.setFlujoUBJul(this.flujoUBJul);
    this.flujoService.setFlujoUNCdPJul(this.flujoUNCdPJul);
    this.flujoService.setFlujoAJul(this.flujoAJul);
    this.flujoService.setFlujoSIAgo(this.flujoSIAgo);

    this.flujoUBAgo = (this.flujoIAgo ?? 0) - (this.flujoCPAgo ?? 0);
    this.flujoUNCdPAgo = (this.flujoUBAgo ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (7 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCAgo = this.calculateDatosCredito() + ((isNaN(resultadoArray[7]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[7]);
        } else {
          this.flujoCAgo = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (7 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCAgo = resultadoCuotaVariable[7] + ((isNaN(resultadoArray[7]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[7]);
        } else {
          this.flujoCAgo = 0;
        }
      } else {
        this.flujoCAgo = this.calculatePoliza();
      }
    } else {
      this.flujoCAgo = 0;
    }
    this.flujoAAgo = (this.flujoUNCdPAgo ?? 0) - (this.flujoCAgo ?? 0) + this.flujoSIAgo;
    this.flujoSISep = this.flujoAAgo;
    this.flujoService.setFlujoUBAgo(this.flujoUBAgo);
    this.flujoService.setFlujoUNCdPAgo(this.flujoUNCdPAgo);
    this.flujoService.setFlujoAAgo(this.flujoAAgo);
    this.flujoService.setFlujoSISep(this.flujoSISep);

    this.flujoUBSep = (this.flujoISep ?? 0) - (this.flujoCPSep ?? 0);
    this.flujoUNCdPSep = (this.flujoUBSep ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (8 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCSep = this.calculateDatosCredito() + ((isNaN(resultadoArray[8]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[8]);
        } else {
          this.flujoCSep = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (8 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCSep = resultadoCuotaVariable[8] + ((isNaN(resultadoArray[8]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[8]);
        } else {
          this.flujoCSep = 0;
        }
      } else {
        this.flujoCSep = this.calculatePoliza();
      }
    } else {
      this.flujoCSep = 0;
    }
    this.flujoASep = (this.flujoUNCdPSep ?? 0) - (this.flujoCSep ?? 0) + this.flujoSISep;
    this.flujoSIOct = this.flujoASep;
    this.flujoService.setFlujoUBSep(this.flujoUBSep);
    this.flujoService.setFlujoUNCdPSep(this.flujoUNCdPSep);
    this.flujoService.setFlujoASep(this.flujoASep);
    this.flujoService.setFlujoSIOct(this.flujoSIOct);

    this.flujoUBOct = (this.flujoIOct ?? 0) - (this.flujoCPOct ?? 0);
    this.flujoUNCdPOct = (this.flujoUBOct ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (9 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCOct = this.calculateDatosCredito() + ((isNaN(resultadoArray[9]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[9]);
        } else {
          this.flujoCOct = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (9 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCOct = resultadoCuotaVariable[9] + ((isNaN(resultadoArray[9]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[9]);
        } else {
          this.flujoCOct = 0;
        }
      } else {
        this.flujoCOct = this.calculatePoliza();
      }
    } else {
      this.flujoCOct = 0;
    }
    this.flujoAOct = (this.flujoUNCdPOct ?? 0) - (this.flujoCOct ?? 0) + this.flujoSIOct;
    this.flujoSINov = this.flujoAOct;
    this.flujoService.setFlujoUBOct(this.flujoUBOct);
    this.flujoService.setFlujoUNCdPOct(this.flujoUNCdPOct);
    this.flujoService.setFlujoAOct(this.flujoAOct);
    this.flujoService.setFlujoSINov(this.flujoSINov);

    this.flujoUBNov = (this.flujoINov ?? 0) - (this.flujoCPNov ?? 0);
    this.flujoUNCdPNov = (this.flujoUBNov ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (10 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCNov = this.calculateDatosCredito() + ((isNaN(resultadoArray[10]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[10]);
        } else {
          this.flujoCNov = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (10 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCNov = resultadoCuotaVariable[10] + ((isNaN(resultadoArray[10]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[10]);
        } else {
          this.flujoCNov = 0;
        }
      } else {
        this.flujoCNov = this.calculatePoliza();
      }
    } else {
      this.flujoCNov = 0;
    }
    this.flujoANov = (this.flujoUNCdPNov ?? 0) - (this.flujoCNov ?? 0) + this.flujoSINov;
    this.flujoSIDiv = this.flujoANov;
    this.flujoService.setFlujoUBNov(this.flujoUBNov);
    this.flujoService.setFlujoUNCdPNov(this.flujoUNCdPNov);
    this.flujoService.setFlujoANov(this.flujoANov);
    this.flujoService.setFlujoSIDiv(this.flujoSIDiv);

    this.flujoUBDiv = (this.flujoIDiv ?? 0) - (this.flujoCPDiv ?? 0);
    this.flujoUNCdPDiv = (this.flujoUBDiv ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    if (this.flujoFrecuencia1 == 'MENSUAL') {
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        if (11 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCDiv = this.calculateDatosCredito() + ((isNaN(resultadoArray[11]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[11]);
        } else {
          this.flujoCDiv = 0;
        }
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        if (11 < this.obtenerPlazoMeses() || this.obtenerPlazoMeses() === 0 || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) {
          this.flujoCDiv = resultadoCuotaVariable[11] + ((isNaN(resultadoArray[11]) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() === 0) ? this.calculatePoliza() : resultadoArray[11]);
        } else {
          this.flujoCDiv = 0;
        }
      } else {
        this.flujoCDiv = this.calculatePoliza();
      }
    } else {
      this.flujoCDiv = 0;
    }
    this.flujoADiv = (this.flujoUNCdPDiv ?? 0) - (this.flujoCDiv ?? 0) + this.flujoSIDiv;
    //this.flujoSIFeb = this.flujoADiv;
    this.flujoService.setFlujoUBDiv(this.flujoUBDiv);
    this.flujoService.setFlujoUNCdPDiv(this.flujoUNCdPDiv);
    this.flujoService.setFlujoADiv(this.flujoADiv);
    //this.flujoService.setFlujoSIFeb(this.flujoSIFeb);
    this.mostrarCuotaProx();
  }

  //  buscarValorPoliza(): number{
  //    const resultadoArray: number[] = this.calculatePoliza2();
  //    console.log(resultadoArray);
  //    return resultadoArray[1];
  //  }


  /////////////////// Datos del credito
  calculateInteres(): number {
    this.interesAX15PL = (this.calculateTasaInteres() * this.datosCreditoMonto) / (360 / this.asignarFrecuencia());
    this.flujoService.setInteresAX15PL(this.interesAX15PL);
    return this.interesAX15PL;
  }
  calculateDatosCredito(): number {
    this.condicionalCuotaFija = ((360 / this.asignarFrecuencia()) * (this.obtenerPlazoMeses() / 12));
    if (this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() == 0) {
      this.flujoCuotaProx = ((this.datosCreditoMonto * (this.calculateTasaInteres() / 12)) / (1 - (1 + (this.calculateTasaInteres() / 12)) ** -(this.obtenerPlazoMeses() === 0 ? 1 : (this.obtenerPlazoMeses() ?? 1)))) - this.datosCreditoMonto;
      //this.flujoCuotaProx = this.datosCreditoMonto*((this.calculateTasaInteres()/(360/this.asignarFrecuencia())/(1-(1+this.calculateTasaInteres()/(360/this.asignarFrecuencia()))^(-(360/this.asignarFrecuencia())*((this.obtenerPlazoMeses()-0)/12)))));
    } else {
      if (this.condicionalCuotaFija < 1) {   // El 1 cambiarlo mmientras por Nro Cuota
        this.flujoCuotaProx = this.calculateInteres();
      } else {
        //this.flujoCuotaProx = ((this.datosCreditoMonto * (this.calculateTasaInteres() / 12)) / (1 - (1 + (this.calculateTasaInteres() / 12)) ** -(this.obtenerPlazoMeses())));
        this.flujoCuotaProx = this.datosCreditoMonto * ((this.calculateTasaInteres() / (360 / this.asignarFrecuencia()) / (1 - (1 + this.calculateTasaInteres() / (360 / this.asignarFrecuencia())) ** (-(360 / this.asignarFrecuencia()) * ((this.obtenerPlazoMeses() - 0) / 12)))));
      }
    }
    //this.flujoCuotaProx = (this.datosCreditoMonto * (this.calculateTasaInteres() / 12)) / (1 - Math.pow(1 + (this.calculateTasaInteres() / 12), -1));
    //this.flujoDatosCredito = this.flujoCuotaProx + this.calculatePoliza(+this.flujoPoliza); ** ((-this.obtenerPlazoMeses()) ?? 1)
    this.flujoService.setCondicionalCuotaFija(this.condicionalCuotaFija);
    this.flujoService.setFlujoCuotaProx(this.flujoCuotaProx);
    this.flujoService.setFlujoPoliza(this.flujoPoliza);
    return this.flujoCuotaProx;
  }
  mostrarCuotaProx() {
    if (this.asignarTipoCuota() == 'CUOTA FIJA') {
      this.mostrarCuotaProxValue = this.calculateDatosCredito();
    } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
      const resultadoCuotaVariable: number[] = this.calcularDatosCreditoVariable();
      this.mostrarCuotaProxValue = resultadoCuotaVariable[0];
    } else if (this.asignarTipoCuota() == 'PERSONALIZADA') {
      this.mostrarCuotaProxValue = 0;
    }
    this.flujoService.setMostrarCuotaProxValue(this.mostrarCuotaProxValue);
  }
  calcularDatosCreditoVariable(): number[] {
    var saldoCapital = this.datosCreditoMonto;
    var interes = 0;
    var amortizacion = 0;
    var poliza = 0;
    var cuotaCredito = 0;
    const valuePoliza = ((this.flujoPoliza / 1000) * 12);
    const valor = (isNaN(this.obtenerPlazoMeses()) ? 0 : this.obtenerPlazoMeses());
    if (this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined || this.obtenerPlazoMeses() == 0) {
      for (let index = 0; index < 16; index++) {
        interes = ((this.calculateTasaInteres() * saldoCapital) / (360 / this.asignarFrecuencia()));
        this.flujoCuotaVariable[index] = interes;
      }
    } else {
      amortizacion = saldoCapital / this.obtenerPlazoMeses();
      for (let index = 0; index < valor; index++) {
        interes = ((this.calculateTasaInteres() * saldoCapital) / (360 / this.asignarFrecuencia()));
        cuotaCredito = (amortizacion + interes);
        saldoCapital = saldoCapital - amortizacion;
        this.flujoCuotaVariable[index] = cuotaCredito;
      }
    }
    return this.flujoCuotaVariable;
  }
  asignarTipoCuota(): string {
    if (this.flujoTipoCuotaOpcion == 'CUOTA VARIABLE') {
      this.flujoTipoCuotaOpcion = 'CUOTA VARIABLE';
    } else if (this.flujoTipoCuotaOpcion == 'PERSONALIZADA') {
      this.flujoTipoCuotaOpcion = 'PERSONALIZADA';
    } else {
      this.flujoTipoCuotaOpcion = 'CUOTA FIJA'
    }
    this.flujoService.setFlujoTipoCuotaOpcion(this.flujoTipoCuotaOpcion);
    return this.flujoTipoCuotaOpcion;
  }
  calculatePoliza(): number {
    const value = ((this.flujoPoliza / 1000) * 12);
    const value1 = ((value * this.datosCreditoMonto) * ((this.asignarFrecuencia() / 30) / 12));
    return value1;
  }
  calculatePoliza2(): number[] {
    var saldoCapital = this.datosCreditoMonto;
    const cuotaCredito = this.calculateDatosCredito();
    var interes = 0;
    var amortizacion = 0;
    var poliza = 0;
    const valor = (isNaN(this.obtenerPlazoMeses()) ? 0 : this.obtenerPlazoMeses());
    const valuePoliza = ((this.flujoPoliza / 1000) * 12);
    for (let index = 1; index < valor; index++) {
      interes = ((this.calculateTasaInteres() * saldoCapital) / (360 / this.asignarFrecuencia()));
      if (this.asignarTipoCuota() == 'CUOTA FIJA') {
        amortizacion = cuotaCredito - interes;
      } else if (this.asignarTipoCuota() == 'CUOTA VARIABLE') {
        amortizacion = this.datosCreditoMonto / valor;
      }
      saldoCapital = saldoCapital - amortizacion;
      poliza = ((valuePoliza * saldoCapital) * ((this.asignarFrecuencia() / 30) / 12));
      this.flujoPoliza1[index] = poliza;
    }
    this.flujoService.setFlujoPoliza1(this.flujoPoliza1);
    this.flujoResultadoArray = this.flujoPoliza1;
    return this.flujoPoliza1;
  }
  asignarFrecuencia(): number {
    if (this.flujoFrecuencia1 == 'BIMENSUAL') {
      this.flujoFrecuencia1 = 'BIMENSUAL';
      this.flujoValorFrecuencia1 = 60;
    } else if (this.flujoFrecuencia1 == 'TRIMESTRAL') {
      this.flujoFrecuencia1 = 'TRIMESTRAL';
      this.flujoValorFrecuencia1 = 90;
    } else if (this.flujoFrecuencia1 == 'CUATRIMESTRAL') {
      this.flujoFrecuencia1 = 'CUATRIMESTRAL';
      this.flujoValorFrecuencia1 = 120;
    } else if (this.flujoFrecuencia1 == 'SEMESTRAL') {
      this.flujoFrecuencia1 = 'SEMESTRAL';
      this.flujoValorFrecuencia1 = 180;
    } else if (this.flujoFrecuencia1 == 'ANUAL') {
      this.flujoFrecuencia1 = 'ANUAL';
      this.flujoValorFrecuencia1 = 360;
    } else {
      this.flujoFrecuencia1 = 'MENSUAL';
      this.flujoValorFrecuencia1 = 30;
    }
    this.flujoService.setFlujoFrecuencia1(this.flujoFrecuencia1);
    this.flujoService.setFlujoValorFrecuencia1(this.flujoValorFrecuencia1);
    return this.flujoValorFrecuencia1;
  }
  calculateTasaInteres(): number {
    if (this.flujoActividad === 'SERVICIOS') {
      this.flujoTasaInteres = 0.115;
    } else {
      this.flujoTasaInteres = 0.07;
    }
    this.flujoService.setFlujoTasaInteres(this.flujoTasaInteres);
    this.flujoService.setFlujoActividad(this.flujoActividad);
    return this.flujoTasaInteres;
  }
  ///////////////////
  calculateUtilidadOperativa() {
    this.utilidadOperativa =
      (isNaN(this.flujoUB) ? 0 : this.flujoUB) -
      (isNaN(this.costoOperativo) ? 0 : this.costoOperativo);
    this.flujoService.setUtilidadOperativa(this.utilidadOperativa);
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
      return 1; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 2; // Pantallas medianas, 3 columnas
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
  calcularMontoFinanciar(): number {
    this.datosCreditoMonto = this.totalProyecto - this.aportePropio;
    return this.datosCreditoMonto;
  }
  calcularTotalProyecto() {
    this.totalProyecto = (this.totalAP ?? 0) + (this.totalPI ?? 0) - (this.total ?? 0);
  }
  calcularAportePropio() {
    this.aportePropio = this.totalAP ?? 0;
  }
  calcularTotalPI(): number {
    this.totalPI =
      (this.presupuestoService.getTotalGastosOp() ?? 0) +
      (this.presupuestoService.getTotalMateriaPrima1() ?? 0) +
      (this.presupuestoService.getTotalReqProm1() ?? 0) +
      (this.presupuestoService.getTotalInfr1() ?? 0) +
      (this.presupuestoService.getTotalMaq1() ?? 0) +
      (this.presupuestoService.getTotalLegal1() ?? 0);
    return this.totalPI;
  }

  calculateTV() {
    this.flujoTV = (isNaN(this.flujoCostosDirAnualVM) ? 0 : this.flujoCostosDirAnualVM); ///agragar + las demas variables que falte
    this.flujoService.setFlujoTV(this.flujoTV);
  }
  calculateTC() {
    this.flujoTC = (isNaN(this.flujoCostosDirAnualCPM) ? 0 : this.flujoCostosDirAnualCPM); // agregar + las demas variables
    this.flujoService.setFlujoTC(this.flujoTC);
  }
  calculateTM() {
    this.flujoTM = (isNaN(this.flujoCostosDirMubT) ? 0 : this.flujoCostosDirMubT)
    this.flujoService.setFlujoTM(this.flujoTM);
  }
  calculateUB() {
    this.flujoUB = (isNaN(this.flujoTV) ? 0 : this.flujoTV) - (isNaN(this.flujoTC) ? 0 : this.flujoTC);
    this.flujoService.setFlujoUB(this.flujoUB);
  }

  formatNumber(value: number): string {
    if (value === 0 || value == null || value == undefined) {
      return '';
    } else {
      const formattedValue = Math.abs(value).toFixed(0);
      return value >= 0 ? formattedValue : `(${formattedValue})`;
    }
  }
  /// tab 2 de flujo
  asignarTab2A(): number {
    this.flujoService.setTab2A(this.tab2A);
    return this.tab2A;
  }
  asignarTabAImplementacion(): number {
    this.flujoService.setFlujoImplementacionEstimadaA(this.flujoImplementacionEstimadaA);
    return this.flujoImplementacionEstimadaA;
  }
  asignarImplementacionMes(): number {
    if (this.flujoImplementacionEstimadaMes == 'ENERO') {
      this.flujoImplementacionEstimadaMesValue = 1;
    } else if (this.flujoImplementacionEstimadaMes == 'FEBRERO') {
      this.flujoImplementacionEstimadaMesValue = 2;
    } else if (this.flujoImplementacionEstimadaMes == 'MARZO') {
      this.flujoImplementacionEstimadaMesValue = 3;
    } else if (this.flujoImplementacionEstimadaMes == 'ABRIL') {
      this.flujoImplementacionEstimadaMesValue = 4;
    } else if (this.flujoImplementacionEstimadaMes == 'MAYO') {
      this.flujoImplementacionEstimadaMesValue = 5;
    } else if (this.flujoImplementacionEstimadaMes == 'JUNIO') {
      this.flujoImplementacionEstimadaMesValue = 6;
    } else if (this.flujoImplementacionEstimadaMes == 'JULIO') {
      this.flujoImplementacionEstimadaMesValue = 7;
    } else if (this.flujoImplementacionEstimadaMes == 'AGOSTO') {
      this.flujoImplementacionEstimadaMesValue = 8;
    } else if (this.flujoImplementacionEstimadaMes == 'SEPTIEMBRE') {
      this.flujoImplementacionEstimadaMesValue = 9;
    } else if (this.flujoImplementacionEstimadaMes == 'OCTUBRE') {
      this.flujoImplementacionEstimadaMesValue = 10;
    } else if (this.flujoImplementacionEstimadaMes == 'NOVIEMBRE') {
      this.flujoImplementacionEstimadaMesValue = 11;
    } else if (this.flujoImplementacionEstimadaMes == 'DICIEMBRE') {
      this.flujoImplementacionEstimadaMesValue = 12;
    }
    this.flujoService.setFlujoImplementacionEstimadaMes(this.flujoImplementacionEstimadaMes);
    this.flujoService.setFlujoImplementacionEstimadaMesValue(this.flujoImplementacionEstimadaMesValue);
    return this.flujoImplementacionEstimadaMesValue;
  }
  asignarDesembolsoMes(): number {
    if (this.flujoImplementacionEstimadoMes == 'ENERO') {
      this.flujoImplementacionEstimadoMesValue = 11;
    } else if (this.flujoImplementacionEstimadoMes == 'FEBRERO') {
      this.flujoImplementacionEstimadoMesValue = 10;
    } else if (this.flujoImplementacionEstimadoMes == 'MARZO') {
      this.flujoImplementacionEstimadoMesValue = 9;
    } else if (this.flujoImplementacionEstimadoMes == 'ABRIL') {
      this.flujoImplementacionEstimadoMesValue = 8;
    } else if (this.flujoImplementacionEstimadoMes == 'MAYO') {
      this.flujoImplementacionEstimadoMesValue = 7;
    } else if (this.flujoImplementacionEstimadoMes == 'JUNIO') {
      this.flujoImplementacionEstimadoMesValue = 6;
    } else if (this.flujoImplementacionEstimadoMes == 'JULIO') {
      this.flujoImplementacionEstimadoMesValue = 5;
    } else if (this.flujoImplementacionEstimadoMes == 'AGOSTO') {
      this.flujoImplementacionEstimadoMesValue = 4;
    } else if (this.flujoImplementacionEstimadoMes == 'SEPTIEMBRE') {
      this.flujoImplementacionEstimadoMesValue = 3;
    } else if (this.flujoImplementacionEstimadoMes == 'OCTUBRE') {
      this.flujoImplementacionEstimadoMesValue = 2;
    } else if (this.flujoImplementacionEstimadoMes == 'NOVIEMBRE') {
      this.flujoImplementacionEstimadoMesValue = 1;
    } else if (this.flujoImplementacionEstimadoMes == 'DICIEMBRE') {
      this.flujoImplementacionEstimadoMesValue = 0;
    }
    this.flujoService.setFlujoImplementacionEstimadoMes(this.flujoImplementacionEstimadoMes);
    this.flujoService.setFlujoImplementacionEstimadoMesValue(this.flujoImplementacionEstimadoMesValue);
    return this.flujoImplementacionEstimadoMesValue;
  }
  calculateRedondeoMax(): number {
    this.flujoRedondeoMax = (((isNaN(this.obtenerPlazoMeses()) || this.obtenerPlazoMeses() == null || this.obtenerPlazoMeses() == undefined) ? 0 : this.obtenerPlazoMeses()) - this.asignarDesembolsoMes()) / 12;
    // if (this.flujoRedondeoMax > 0) {
    //   this.flujoRedondeoMax = Math.ceil(this.flujoRedondeoMax);
    // } else {
    //   this.flujoRedondeoMax = Math.ceil(this.flujoRedondeoMax);
    // }
    const signo = Math.sign(this.flujoRedondeoMax);
    const enteroAbsoluto = Math.ceil(Math.abs(this.flujoRedondeoMax));
    this.flujoRedondeoMax = enteroAbsoluto * signo;
    this.flujoService.setFlujoRedondeoMax(this.flujoRedondeoMax);
    return this.flujoRedondeoMax;
  }
  calculatePeriodoA(): number {
    this.flujoPeriodoA = this.asignarTab2A() + this.calculateRedondeoMax();
    this.flujoService.setFlujoPeriodoA(this.flujoPeriodoA);
    return this.flujoPeriodoA;
  }
  buscarV(): number {
    if (this.flujoFrecuencia1 == 'BIMENSUAL') {
      this.flujoBuscarV = 2;
    } else if (this.flujoFrecuencia1 == 'TRIMESTRAL') {
      this.flujoBuscarV = 3;
    } else if (this.flujoFrecuencia1 == 'CUATRIMESTRAL') {
      this.flujoBuscarV = 4;
    } else if (this.flujoFrecuencia1 == 'SEMESTRAL') {
      this.flujoBuscarV = 6;
    } else if (this.flujoFrecuencia1 == 'ANUAL') {
      this.flujoBuscarV = 12;
    } else if (this.flujoFrecuencia1 == 'MENSUAL') {
      this.flujoBuscarV = 1;
    }
    this.flujoService.setFlujoBuscarV(this.flujoBuscarV);
    return this.flujoBuscarV;
  }
  ValorFrecuenciaParaDividir(): number {
    if (this.flujoFrecuencia1 == 'BIMENSUAL') {
      this.flujoValueFrPaDv = 6;
    } else if (this.flujoFrecuencia1 == 'TRIMESTRAL') {
      this.flujoValueFrPaDv = 4;
    } else if (this.flujoFrecuencia1 == 'CUATRIMESTRAL') {
      this.flujoValueFrPaDv = 3;
    } else if (this.flujoFrecuencia1 == 'SEMESTRAL') {
      this.flujoValueFrPaDv = 2;
    } else if (this.flujoFrecuencia1 == 'ANUAL') {
      this.flujoValueFrPaDv = 1;
    } else if (this.flujoFrecuencia1 == 'MENSUAL') {
      this.flujoValueFrPaDv = 12;
    }
    this.flujoService.setFlujoValueFrPaDv(this.flujoValueFrPaDv);
    return this.flujoValueFrPaDv;
  }
  obtenerPlazoMeses(): number {
    var plazoMeses;
    if (this.flujoPlazoMeses <= 84 && this.flujoPlazoMeses >= 0 || isNaN(this.flujoPlazoMeses) || this.flujoPlazoMeses == null || this.flujoPlazoMeses == undefined) {
      this.flujoPlazoMeses = this.flujoPlazoMeses;
    } else if (this.flujoPlazoMeses < 0) {
      this.flujoPlazoMeses = this.flujoPlazoMeses * (-1);
    } else {
      this.flujoPlazoMeses = 84;
    }
    this.flujoService.setFlujoPlazoMeses(this.flujoPlazoMeses);
    return this.flujoPlazoMeses;
  }
  calculatePeriodoMes(): number {     // controlador de cantidad de Periodo Mes
    this.flujoPeriodoMes = this.obtenerPlazoMeses() / this.buscarV();
    this.flujoService.setFlujoPeriodoMes(this.flujoPeriodoMes);
    return this.flujoPeriodoMes;
  }
  calculateFlujoTotalAñoIngreso(): number {
    this.flujoTotalIngreso =
      (isNaN(this.flujoIEne) ? 0 : this.flujoIEne) +
      (isNaN(this.flujoIFeb) ? 0 : this.flujoIFeb) +
      (isNaN(this.flujoIMar) ? 0 : this.flujoIMar) +
      (isNaN(this.flujoIAbr) ? 0 : this.flujoIAbr) +
      (isNaN(this.flujoIMay) ? 0 : this.flujoIMay) +
      (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) +
      (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
      (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
      (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
      (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
      (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
      (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    return this.flujoTotalIngreso;
  }
  calculateFlujoTotalAnioCostoProduccion(): number {
    this.flujoTotalCostoProduccion =
      (isNaN(this.flujoCProdEne) ? 0 : this.flujoCProdEne) +
      (isNaN(this.flujoCPFeb) ? 0 : this.flujoCPFeb) +
      (isNaN(this.flujoCPMar) ? 0 : this.flujoCPMar) +
      (isNaN(this.flujoCPAbr) ? 0 : this.flujoCPAbr) +
      (isNaN(this.flujoCPMay) ? 0 : this.flujoCPMay) +
      (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun) +
      (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
      (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
      (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
      (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
      (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
      (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    return this.flujoTotalCostoProduccion;
  }
  calculateFlujoTotalAnioCuota(): number {
    this.flujoTotalC =
      (isNaN(this.flujoCEne) ? 0 : this.flujoCEne) +
      (isNaN(this.flujoCFeb) ? 0 : this.flujoCFeb) +
      (isNaN(this.flujoCMar) ? 0 : this.flujoCMar) +
      (isNaN(this.flujoCAbr) ? 0 : this.flujoCAbr) +
      (isNaN(this.flujoCMay) ? 0 : this.flujoCMay) +
      (isNaN(this.flujoCJun) ? 0 : this.flujoCJun) +
      (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
      (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
      (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
      (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
      (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
      (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    return this.flujoTotalC;
  }
  calculateTotalAño() {
    this.flujoTotalSaldoInicial = this.flujoADiv;
    this.calculateFlujoTotalAñoIngreso();
    this.calculateFlujoTotalAnioCostoProduccion();
    this.flujoTotalUB = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
    this.flujoTotalCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
    this.flujoTotalUNCP =
      (isNaN(this.flujoUNCdPagEne) ? 0 : this.flujoUNCdPagEne) +
      (isNaN(this.flujoUNCdPFeb) ? 0 : this.flujoUNCdPFeb) +
      (isNaN(this.flujoUNCdPMar) ? 0 : this.flujoUNCdPMar) +
      (isNaN(this.flujoUNCdPAbr) ? 0 : this.flujoUNCdPAbr) +
      (isNaN(this.flujoUNCdPMay) ? 0 : this.flujoUNCdPMay) +
      (isNaN(this.flujoUNCdPJun) ? 0 : this.flujoUNCdPJun) +
      (isNaN(this.flujoUNCdPJul) ? 0 : this.flujoUNCdPJul) +
      (isNaN(this.flujoUNCdPAgo) ? 0 : this.flujoUNCdPAgo) +
      (isNaN(this.flujoUNCdPSep) ? 0 : this.flujoUNCdPSep) +
      (isNaN(this.flujoUNCdPOct) ? 0 : this.flujoUNCdPOct) +
      (isNaN(this.flujoUNCdPNov) ? 0 : this.flujoUNCdPNov) +
      (isNaN(this.flujoUNCdPDiv) ? 0 : this.flujoUNCdPDiv);
    this.calculateFlujoTotalAnioCuota();
    this.flujoTotalFA = (isNaN(this.flujoADiv) ? 0 : this.flujoADiv);

    this.flujoService.setFlujoTotalSaldoInicial(this.flujoTotalSaldoInicial);
    this.flujoService.setFlujoTotalIngreso(this.flujoTotalIngreso);
    this.flujoService.setFlujoTotalCostoProduccion(this.flujoTotalCostoProduccion);
    this.flujoService.setFlujoTotalUB(this.flujoTotalUB);
    this.flujoService.setFlujoTotalCF(this.flujoTotalCF);
    this.flujoService.setFlujoTotalUNCP(this.flujoTotalUNCP);
    this.flujoService.setFlujoTotalC(this.flujoTotalC);
    this.flujoService.setFlujoTotalFA(this.flujoTotalFA);
  }
  calculateFlujoTotalPeriodoIngreso(): number {
    if (this.asignarImplementacionMes() == 1) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIEne) ? 0 : this.flujoIEne) +
        (isNaN(this.flujoIFeb) ? 0 : this.flujoIFeb) +
        (isNaN(this.flujoIMar) ? 0 : this.flujoIMar) +
        (isNaN(this.flujoIAbr) ? 0 : this.flujoIAbr) +
        (isNaN(this.flujoIMay) ? 0 : this.flujoIMay) +
        (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) +
        (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 2) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIFeb) ? 0 : this.flujoIFeb) +
        (isNaN(this.flujoIMar) ? 0 : this.flujoIMar) +
        (isNaN(this.flujoIAbr) ? 0 : this.flujoIAbr) +
        (isNaN(this.flujoIMay) ? 0 : this.flujoIMay) +
        (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) +
        (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 3) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIMar) ? 0 : this.flujoIMar) +
        (isNaN(this.flujoIAbr) ? 0 : this.flujoIAbr) +
        (isNaN(this.flujoIMay) ? 0 : this.flujoIMay) +
        (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) +
        (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 4) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIAbr) ? 0 : this.flujoIAbr) +
        (isNaN(this.flujoIMay) ? 0 : this.flujoIMay) +
        (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) +
        (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 5) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIMay) ? 0 : this.flujoIMay) +
        (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) +
        (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 6) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIJun) ? 0 : this.flujoIJun) +
        (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 7) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIJul) ? 0 : this.flujoIJul) +
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 8) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIAgo) ? 0 : this.flujoIAgo) +
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 9) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoISep) ? 0 : this.flujoISep) +
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 10) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoIOct) ? 0 : this.flujoIOct) +
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 11) {
      this.flujoTotalPeriodoIngreso =
        (isNaN(this.flujoINov) ? 0 : this.flujoINov) +
        (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    } else if (this.asignarImplementacionMes() == 12) {
      this.flujoTotalPeriodoIngreso = (isNaN(this.flujoIDiv) ? 0 : this.flujoIDiv);
    }
    return this.flujoTotalPeriodoIngreso;
  }
  calculateFlujoTotalPeriodoCostoProduccion(): number {
    if (this.asignarImplementacionMes() == 1) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCProdEne) ? 0 : this.flujoCProdEne) +
        (isNaN(this.flujoCPFeb) ? 0 : this.flujoCPFeb) +
        (isNaN(this.flujoCPMar) ? 0 : this.flujoCPMar) +
        (isNaN(this.flujoCPAbr) ? 0 : this.flujoCPAbr) +
        (isNaN(this.flujoCPMay) ? 0 : this.flujoCPMay) +
        (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun) +
        (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 2) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPFeb) ? 0 : this.flujoCPFeb) +
        (isNaN(this.flujoCPMar) ? 0 : this.flujoCPMar) +
        (isNaN(this.flujoCPAbr) ? 0 : this.flujoCPAbr) +
        (isNaN(this.flujoCPMay) ? 0 : this.flujoCPMay) +
        (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun) +
        (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 3) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPMar) ? 0 : this.flujoCPMar) +
        (isNaN(this.flujoCPAbr) ? 0 : this.flujoCPAbr) +
        (isNaN(this.flujoCPMay) ? 0 : this.flujoCPMay) +
        (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun) +
        (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 4) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPAbr) ? 0 : this.flujoCPAbr) +
        (isNaN(this.flujoCPMay) ? 0 : this.flujoCPMay) +
        (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun) +
        (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 5) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPMay) ? 0 : this.flujoCPMay) +
        (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun) +
        (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 6) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPJun) ? 0 : this.flujoCPJun) +
        (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 7) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPJul) ? 0 : this.flujoCPJul) +
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 8) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPAgo) ? 0 : this.flujoCPAgo) +
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 9) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPSep) ? 0 : this.flujoCPSep) +
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 10) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPOct) ? 0 : this.flujoCPOct) +
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 11) {
      this.flujoTotalPeriodoCostoProduccion =
        (isNaN(this.flujoCPNov) ? 0 : this.flujoCPNov) +
        (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    } else if (this.asignarImplementacionMes() == 12) {
      this.flujoTotalPeriodoCostoProduccion = (isNaN(this.flujoCPDiv) ? 0 : this.flujoCPDiv);
    }
    return this.flujoTotalPeriodoCostoProduccion;
  }
  calculateFlujoTotalPeriodoCF(): number {
    if (this.asignarImplementacionMes() == 1) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
    } else if (this.asignarImplementacionMes() == 2) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 11;
    } else if (this.asignarImplementacionMes() == 3) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 10;
    } else if (this.asignarImplementacionMes() == 4) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 9;
    } else if (this.asignarImplementacionMes() == 5) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 8;
    } else if (this.asignarImplementacionMes() == 6) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 7;
    } else if (this.asignarImplementacionMes() == 7) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 6;
    } else if (this.asignarImplementacionMes() == 8) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 5;
    } else if (this.asignarImplementacionMes() == 9) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 4;
    } else if (this.asignarImplementacionMes() == 10) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 3;
    } else if (this.asignarImplementacionMes() == 11) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 2;
    } else if (this.asignarImplementacionMes() == 12) {
      this.flujoTotalPeriodoCF = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 1;
    }
    return this.flujoTotalPeriodoCF;
  }
  calculateFlujoTotalPeriodoC(): number {
    if (this.asignarImplementacionMes() == 1) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCEne) ? 0 : this.flujoCEne) +
        (isNaN(this.flujoCFeb) ? 0 : this.flujoCFeb) +
        (isNaN(this.flujoCMar) ? 0 : this.flujoCMar) +
        (isNaN(this.flujoCAbr) ? 0 : this.flujoCAbr) +
        (isNaN(this.flujoCMay) ? 0 : this.flujoCMay) +
        (isNaN(this.flujoCJun) ? 0 : this.flujoCJun) +
        (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 2) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCFeb) ? 0 : this.flujoCFeb) +
        (isNaN(this.flujoCMar) ? 0 : this.flujoCMar) +
        (isNaN(this.flujoCAbr) ? 0 : this.flujoCAbr) +
        (isNaN(this.flujoCMay) ? 0 : this.flujoCMay) +
        (isNaN(this.flujoCJun) ? 0 : this.flujoCJun) +
        (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 3) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCMar) ? 0 : this.flujoCMar) +
        (isNaN(this.flujoCAbr) ? 0 : this.flujoCAbr) +
        (isNaN(this.flujoCMay) ? 0 : this.flujoCMay) +
        (isNaN(this.flujoCJun) ? 0 : this.flujoCJun) +
        (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 4) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCAbr) ? 0 : this.flujoCAbr) +
        (isNaN(this.flujoCMay) ? 0 : this.flujoCMay) +
        (isNaN(this.flujoCJun) ? 0 : this.flujoCJun) +
        (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 5) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCMay) ? 0 : this.flujoCMay) +
        (isNaN(this.flujoCJun) ? 0 : this.flujoCJun) +
        (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 6) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCJun) ? 0 : this.flujoCJun) +
        (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 7) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCJul) ? 0 : this.flujoCJul) +
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 8) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCAgo) ? 0 : this.flujoCAgo) +
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 9) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCSep) ? 0 : this.flujoCSep) +
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 10) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCOct) ? 0 : this.flujoCOct) +
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 11) {
      this.flujoTotalPeriodoC =
        (isNaN(this.flujoCNov) ? 0 : this.flujoCNov) +
        (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    } else if (this.asignarImplementacionMes() == 12) {
      this.flujoTotalPeriodoC = (isNaN(this.flujoCDiv) ? 0 : this.flujoCDiv);
    }
    return this.flujoTotalPeriodoC;
  }
  calculateTotalPeriodo() {
    this.flujoTotalPeriodoSaldoInicial = this.calculateSaldoInicial() - this.calcularTotalPI();
    this.calculateFlujoTotalPeriodoIngreso();
    // costo de producción total periodo
    this.calculateFlujoTotalPeriodoCostoProduccion();
    this.flujoTotalPeriodoUB = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
    // costo fijo total periodo
    this.calculateFlujoTotalPeriodoCF();
    this.flujoTotalPeriodoUNCP = this.flujoTotalPeriodoUB - this.calculateFlujoTotalPeriodoCF();
    // cuota total periodo
    this.calculateFlujoTotalPeriodoC();
    this.flujoTotalPeriodoFA = (this.flujoTotalPeriodoUNCP - this.calculateFlujoTotalPeriodoC()) + this.flujoTotalPeriodoSaldoInicial;

    this.flujoService.setFlujoTotalPeriodoSaldoInicial(this.flujoTotalPeriodoSaldoInicial);
    this.flujoService.setFlujoTotalPeriodoIngreso(this.flujoTotalPeriodoIngreso);
    this.flujoService.setFlujoTotalPeriodoCostoProduccion(this.flujoTotalPeriodoCostoProduccion);
    this.flujoService.setFlujoTotalPeriodoUB(this.flujoTotalPeriodoUB);
    this.flujoService.setFlujoTotalPeriodoCF(this.flujoTotalPeriodoCF);
    this.flujoService.setFlujoTotalPeriodoUNCP(this.flujoTotalPeriodoUNCP);
    this.flujoService.setFlujoTotalPeriodoC(this.flujoTotalPeriodoC);
    this.flujoService.setFlujoTotalPeriodoFA(this.flujoTotalPeriodoFA);
  }
  calculateSaldoInicial(): number {
    this.flujoSaldoInicial = this.calcularMontoFinanciar() + (isNaN(this.total) ? 0 : this.total);
    this.flujoService.setFlujoSaldoInicial(this.flujoSaldoInicial);
    return this.flujoSaldoInicial;
  }
  calculateFlujoAcumuladoInicial(): number {
    this.flujoAcIni = this.calculateSaldoInicial() - this.calcularTotalPI();
    this.flujoService.setFlujoAcIni(this.flujoAcIni);
    return this.flujoAcIni;
  }
  llenarTablaColumna0Tabla2() {
    if (this.anioActual == this.asignarTabAImplementacion()) {
      this.flujoSaldoInicial0 = this.calculateFlujoAcumuladoInicial();
      this.flujoIngreso0 = this.calculateFlujoTotalPeriodoIngreso();
      this.flujoCostoProduccion0 = this.calculateFlujoTotalPeriodoCostoProduccion();
      this.flujoUtilidadBruta0 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
      this.flujoCostosFijos0 = this.calculateFlujoTotalPeriodoCF();
      this.flujoUtilidadNetaCapPago0 = (this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion()) - (this.calculateFlujoTotalPeriodoCF());
      this.flujoCuota0 = this.calculateFlujoTotalPeriodoC();
      this.flujoAcumulado0 = (this.flujoUtilidadNetaCapPago0 - this.calculateFlujoTotalPeriodoC()) + this.flujoSaldoInicial0;
    } else {
      this.flujoSaldoInicial0 = 0;
      this.flujoIngreso0 = 0;
      this.flujoCostoProduccion0 = 0;
      this.flujoUtilidadBruta0 = 0;
      this.flujoCostosFijos0 = 0;
      this.flujoUtilidadNetaCapPago0 = 0;
      this.flujoCuota0 = 0;
      this.flujoAcumulado0 = 0;
    }
  }
  llenarTablaNro2() {
    // 0
    this.llenarTablaColumna0Tabla2();
    if (this.calcularMontoFinanciar() != 0 && (this.asignarTab2A()) <= this.calculatePeriodoA()) {
      // 1 $C$37<$C$55 = B63
      if (this.asignarTabAImplementacion() <= (this.asignarTab2A()) && (this.calculatePeriodoA()) >= (this.asignarTab2A() + 1)) { // año de implementación estimada es menor desembolso estimado año C37 < C55
        this.flujoSaldoInicial1 = ((isNaN(this.flujoAcumulado0) || this.flujoAcumulado0 == null || this.flujoAcumulado0 == undefined) ? 0 : this.flujoAcumulado0);
        this.flujoIngreso1 = this.calculateFlujoTotalAñoIngreso();
        this.flujoCostoProduccion1 = this.calculateFlujoTotalAnioCostoProduccion();
        this.flujoUtilidadBruta1 = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
        this.flujoCostosFijos1 = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
        this.flujoUtilidadNetaCapPago1 = this.flujoUtilidadBruta1 - this.flujoCostosFijos1;
        this.flujoCuota1 = this.calculateFlujoTotalAnioCuota();
        this.flujoAcumulado1 = (this.flujoUtilidadNetaCapPago1 - this.flujoCuota1) + this.flujoSaldoInicial1;
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 2)) {
          this.flujoSaldoInicial2 = this.flujoAcumulado1;
          this.flujoIngreso2 = this.calculateFlujoTotalAñoIngreso();
          this.flujoCostoProduccion2 = this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoUtilidadBruta2 = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoCostosFijos2 = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
          this.flujoUtilidadNetaCapPago2 = this.flujoUtilidadBruta2 - this.flujoCostosFijos2;
          this.flujoCuota2 = this.calculateFlujoTotalAnioCuota();
          this.flujoAcumulado2 = (this.flujoUtilidadNetaCapPago2 - this.flujoCuota2) + this.flujoSaldoInicial2;
        } else {
          this.flujoSaldoInicial2 = 0;
          this.flujoIngreso2 = 0;
          this.flujoCostoProduccion2 = 0;
          this.flujoUtilidadBruta2 = 0;
          this.flujoCostosFijos2 = 0;
          this.flujoUtilidadNetaCapPago2 = 0;
          this.flujoCuota2 = 0;
          this.flujoAcumulado2 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 3)) {
          this.flujoSaldoInicial3 = this.flujoAcumulado2;
          this.flujoIngreso3 = this.calculateFlujoTotalAñoIngreso();
          this.flujoCostoProduccion3 = this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoUtilidadBruta3 = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoCostosFijos3 = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
          this.flujoUtilidadNetaCapPago3 = this.flujoUtilidadBruta3 - this.flujoCostosFijos3;
          this.flujoCuota3 = this.calculateFlujoTotalAnioCuota();
          this.flujoAcumulado3 = (this.flujoUtilidadNetaCapPago3 - this.flujoCuota3) + this.flujoSaldoInicial3;
        } else {
          this.flujoSaldoInicial3 = 0;
          this.flujoIngreso3 = 0;
          this.flujoCostoProduccion3 = 0;
          this.flujoUtilidadBruta3 = 0;
          this.flujoCostosFijos3 = 0;
          this.flujoUtilidadNetaCapPago3 = 0;
          this.flujoCuota3 = 0;
          this.flujoAcumulado3 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 4)) {
          this.flujoSaldoInicial4 = this.flujoAcumulado3;
          this.flujoIngreso4 = this.calculateFlujoTotalAñoIngreso();
          this.flujoCostoProduccion4 = this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoUtilidadBruta4 = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoCostosFijos4 = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
          this.flujoUtilidadNetaCapPago4 = this.flujoUtilidadBruta4 - this.flujoCostosFijos4;
          this.flujoCuota4 = this.calculateFlujoTotalAnioCuota();
          this.flujoAcumulado4 = (this.flujoUtilidadNetaCapPago4 - this.flujoCuota4) + this.flujoSaldoInicial4;
        } else {
          this.flujoSaldoInicial4 = 0;
          this.flujoIngreso4 = 0;
          this.flujoCostoProduccion4 = 0;
          this.flujoUtilidadBruta4 = 0;
          this.flujoCostosFijos4 = 0;
          this.flujoUtilidadNetaCapPago4 = 0;
          this.flujoCuota4 = 0;
          this.flujoAcumulado4 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 5)) {
          this.flujoSaldoInicial5 = this.flujoAcumulado4;
          this.flujoIngreso5 = this.calculateFlujoTotalAñoIngreso();
          this.flujoCostoProduccion5 = this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoUtilidadBruta5 = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoCostosFijos5 = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
          this.flujoUtilidadNetaCapPago5 = this.flujoUtilidadBruta5 - this.flujoCostosFijos5;
          this.flujoCuota5 = this.calculateFlujoTotalAnioCuota();
          this.flujoAcumulado5 = (this.flujoUtilidadNetaCapPago5 - this.flujoCuota5) + this.flujoSaldoInicial5;
        } else {
          this.flujoSaldoInicial5 = 0;
          this.flujoIngreso5 = 0;
          this.flujoCostoProduccion5 = 0;
          this.flujoUtilidadBruta5 = 0;
          this.flujoCostosFijos5 = 0;
          this.flujoUtilidadNetaCapPago5 = 0;
          this.flujoCuota5 = 0;
          this.flujoAcumulado5 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 6)) {
          this.flujoSaldoInicial6 = this.flujoAcumulado5;
          this.flujoIngreso6 = this.calculateFlujoTotalAñoIngreso();
          this.flujoCostoProduccion6 = this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoUtilidadBruta6 = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoCostosFijos6 = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
          this.flujoUtilidadNetaCapPago6 = this.flujoUtilidadBruta6 - this.flujoCostosFijos6;
          this.flujoCuota6 = this.calculateFlujoTotalAnioCuota();
          this.flujoAcumulado6 = (this.flujoUtilidadNetaCapPago6 - this.flujoCuota6) + this.flujoSaldoInicial6;
        } else {
          this.flujoSaldoInicial6 = 0;
          this.flujoIngreso6 = 0;
          this.flujoCostoProduccion6 = 0;
          this.flujoUtilidadBruta6 = 0;
          this.flujoCostosFijos6 = 0;
          this.flujoUtilidadNetaCapPago6 = 0;
          this.flujoCuota6 = 0;
          this.flujoAcumulado6 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 7)) {
          this.flujoSaldoInicial7 = this.flujoAcumulado6;
          this.flujoIngreso7 = this.calculateFlujoTotalAñoIngreso();
          this.flujoCostoProduccion7 = this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoUtilidadBruta7 = this.calculateFlujoTotalAñoIngreso() - this.calculateFlujoTotalAnioCostoProduccion();
          this.flujoCostosFijos7 = (isNaN(this.flujoCostosFijosTb1) ? 0 : this.flujoCostosFijosTb1) * 12;
          this.flujoUtilidadNetaCapPago7 = this.flujoUtilidadBruta7 - this.flujoCostosFijos7;
          this.flujoCuota7 = this.calculateFlujoTotalAnioCuota();
          this.flujoAcumulado7 = (this.flujoUtilidadNetaCapPago7 - this.flujoCuota7) + this.flujoSaldoInicial7;
        } else {
          this.flujoSaldoInicial7 = 0;
          this.flujoIngreso7 = 0;
          this.flujoCostoProduccion7 = 0;
          this.flujoUtilidadBruta7 = 0;
          this.flujoCostosFijos7 = 0;
          this.flujoUtilidadNetaCapPago7 = 0;
          this.flujoCuota7 = 0;
          this.flujoAcumulado7 = 0;
        }
      } else if (this.asignarTabAImplementacion() == (this.asignarTab2A()) || (this.calculatePeriodoA()) >= (this.asignarTab2A() + 1)) {
        this.flujoSaldoInicial1 = this.calculateSaldoInicial() - this.calcularTotalPI();
        this.flujoIngreso1 = this.calculateFlujoTotalPeriodoIngreso();
        this.flujoCostoProduccion1 = this.calculateFlujoTotalPeriodoCostoProduccion();
        this.flujoUtilidadBruta1 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
        this.flujoCostosFijos1 = this.calculateFlujoTotalPeriodoCF();
        this.flujoUtilidadNetaCapPago1 = this.flujoUtilidadBruta1 - this.calculateFlujoTotalPeriodoCF();
        this.flujoCuota1 = this.calculateFlujoTotalPeriodoC();
        this.flujoAcumulado1 = (this.flujoUtilidadNetaCapPago1 - this.flujoCuota1) + this.flujoSaldoInicial1;
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 2)) {
          this.flujoSaldoInicial2 = this.flujoAcumulado1;
          this.flujoIngreso2 = this.calculateFlujoTotalPeriodoIngreso();
          this.flujoCostoProduccion2 = this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoUtilidadBruta2 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoCostosFijos2 = this.calculateFlujoTotalPeriodoCF();
          this.flujoUtilidadNetaCapPago2 = this.flujoUtilidadBruta2 - this.calculateFlujoTotalPeriodoCF();
          this.flujoCuota2 = this.calculateFlujoTotalPeriodoC();
          this.flujoAcumulado2 = (this.flujoUtilidadNetaCapPago2 - this.flujoCuota2) + this.flujoSaldoInicial2;
        } else {
          this.flujoSaldoInicial2 = 0;
          this.flujoIngreso2 = 0;
          this.flujoCostoProduccion2 = 0;
          this.flujoUtilidadBruta2 = 0;
          this.flujoCostosFijos2 = 0;
          this.flujoUtilidadNetaCapPago2 = 0;
          this.flujoCuota2 = 0;
          this.flujoAcumulado2 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 3)) {
          this.flujoSaldoInicial3 = this.flujoAcumulado2;
          this.flujoIngreso3 = this.calculateFlujoTotalPeriodoIngreso();
          this.flujoCostoProduccion3 = this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoUtilidadBruta3 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoCostosFijos3 = this.calculateFlujoTotalPeriodoCF();
          this.flujoUtilidadNetaCapPago3 = this.flujoUtilidadBruta3 - this.calculateFlujoTotalPeriodoCF();
          this.flujoCuota3 = this.calculateFlujoTotalPeriodoC();
          this.flujoAcumulado3 = (this.flujoUtilidadNetaCapPago3 - this.flujoCuota3) + this.flujoSaldoInicial3;
        } else {
          this.flujoSaldoInicial3 = 0;
          this.flujoIngreso3 = 0;
          this.flujoCostoProduccion3 = 0;
          this.flujoUtilidadBruta3 = 0;
          this.flujoCostosFijos3 = 0;
          this.flujoUtilidadNetaCapPago3 = 0;
          this.flujoCuota3 = 0;
          this.flujoAcumulado3 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 4)) {
          this.flujoSaldoInicial4 = this.flujoAcumulado3;
          this.flujoIngreso4 = this.calculateFlujoTotalPeriodoIngreso();
          this.flujoCostoProduccion4 = this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoUtilidadBruta4 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoCostosFijos4 = this.calculateFlujoTotalPeriodoCF();
          this.flujoUtilidadNetaCapPago4 = this.flujoUtilidadBruta4 - this.calculateFlujoTotalPeriodoCF();
          this.flujoCuota4 = this.calculateFlujoTotalPeriodoC();
          this.flujoAcumulado4 = (this.flujoUtilidadNetaCapPago4 - this.flujoCuota4) + this.flujoSaldoInicial4;
        } else {
          this.flujoSaldoInicial4 = 0;
          this.flujoIngreso4 = 0;
          this.flujoCostoProduccion4 = 0;
          this.flujoUtilidadBruta4 = 0;
          this.flujoCostosFijos4 = 0;
          this.flujoUtilidadNetaCapPago4 = 0;
          this.flujoCuota4 = 0;
          this.flujoAcumulado4 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 5)) {
          this.flujoSaldoInicial5 = this.flujoAcumulado4;
          this.flujoIngreso5 = this.calculateFlujoTotalPeriodoIngreso();
          this.flujoCostoProduccion5 = this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoUtilidadBruta5 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoCostosFijos5 = this.calculateFlujoTotalPeriodoCF();
          this.flujoUtilidadNetaCapPago5 = this.flujoUtilidadBruta5 - this.calculateFlujoTotalPeriodoCF();
          this.flujoCuota5 = this.calculateFlujoTotalPeriodoC();
          this.flujoAcumulado5 = (this.flujoUtilidadNetaCapPago5 - this.flujoCuota5) + this.flujoSaldoInicial5;
        } else {
          this.flujoSaldoInicial5 = 0;
          this.flujoIngreso5 = 0;
          this.flujoCostoProduccion5 = 0;
          this.flujoUtilidadBruta5 = 0;
          this.flujoCostosFijos5 = 0;
          this.flujoUtilidadNetaCapPago5 = 0;
          this.flujoCuota5 = 0;
          this.flujoAcumulado5 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 6)) {
          this.flujoSaldoInicial6 = this.flujoAcumulado5;
          this.flujoIngreso6 = this.calculateFlujoTotalPeriodoIngreso();
          this.flujoCostoProduccion6 = this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoUtilidadBruta6 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoCostosFijos6 = this.calculateFlujoTotalPeriodoCF();
          this.flujoUtilidadNetaCapPago6 = this.flujoUtilidadBruta6 - this.calculateFlujoTotalPeriodoCF();
          this.flujoCuota6 = this.calculateFlujoTotalPeriodoC();
          this.flujoAcumulado6 = (this.flujoUtilidadNetaCapPago6 - this.flujoCuota6) + this.flujoSaldoInicial6;
        } else {
          this.flujoSaldoInicial6 = 0;
          this.flujoIngreso6 = 0;
          this.flujoCostoProduccion6 = 0;
          this.flujoUtilidadBruta6 = 0;
          this.flujoCostosFijos6 = 0;
          this.flujoUtilidadNetaCapPago6 = 0;
          this.flujoCuota6 = 0;
          this.flujoAcumulado6 = 0;
        }
        if ((this.calculatePeriodoA()) >= (this.asignarTab2A() + 7)) {
          this.flujoSaldoInicial7 = this.flujoAcumulado6;
          this.flujoIngreso7 = this.calculateFlujoTotalPeriodoIngreso();
          this.flujoCostoProduccion7 = this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoUtilidadBruta7 = this.calculateFlujoTotalPeriodoIngreso() - this.calculateFlujoTotalPeriodoCostoProduccion();
          this.flujoCostosFijos7 = this.calculateFlujoTotalPeriodoCF();
          this.flujoUtilidadNetaCapPago7 = this.flujoUtilidadBruta7 - this.calculateFlujoTotalPeriodoCF();
          this.flujoCuota7 = this.calculateFlujoTotalPeriodoC();
          this.flujoAcumulado7 = (this.flujoUtilidadNetaCapPago7 - this.flujoCuota7) + this.flujoSaldoInicial7;
        } else {
          this.flujoSaldoInicial7 = 0;
          this.flujoIngreso7 = 0;
          this.flujoCostoProduccion7 = 0;
          this.flujoUtilidadBruta7 = 0;
          this.flujoCostosFijos7 = 0;
          this.flujoUtilidadNetaCapPago7 = 0;
          this.flujoCuota7 = 0;
          this.flujoAcumulado7 = 0;
        }
      } else {
        this.flujoSaldoInicial1 = 0;
        this.flujoIngreso1 = 0;
        this.flujoCostoProduccion1 = 0;
        this.flujoUtilidadBruta1 = 0;
        this.flujoCostosFijos1 = 0;
        this.flujoUtilidadNetaCapPago1 = 0;
        this.flujoCuota1 = 0;
        this.flujoAcumulado1 = 0;
      }
    } else {
      this.flujoSaldoInicial1 = 0;
      this.flujoSaldoInicial2 = 0;
      this.flujoSaldoInicial3 = 0;
      this.flujoSaldoInicial4 = 0;
      this.flujoSaldoInicial5 = 0;
      this.flujoSaldoInicial6 = 0;
      this.flujoSaldoInicial7 = 0;
      this.flujoIngreso1 = 0;
      this.flujoIngreso2 = 0;
      this.flujoIngreso3 = 0;
      this.flujoIngreso4 = 0;
      this.flujoIngreso5 = 0;
      this.flujoIngreso6 = 0;
      this.flujoIngreso7 = 0;
      this.flujoCostoProduccion1 = 0;
      this.flujoCostoProduccion2 = 0;
      this.flujoCostoProduccion3 = 0;
      this.flujoCostoProduccion4 = 0;
      this.flujoCostoProduccion5 = 0;
      this.flujoCostoProduccion6 = 0;
      this.flujoCostoProduccion7 = 0;
      this.flujoUtilidadBruta1 = 0;
      this.flujoUtilidadBruta2 = 0;
      this.flujoUtilidadBruta3 = 0;
      this.flujoUtilidadBruta4 = 0;
      this.flujoUtilidadBruta5 = 0;
      this.flujoUtilidadBruta6 = 0;
      this.flujoUtilidadBruta7 = 0;
      this.flujoCostosFijos1 = 0;
      this.flujoCostosFijos2 = 0;
      this.flujoCostosFijos3 = 0;
      this.flujoCostosFijos4 = 0;
      this.flujoCostosFijos5 = 0;
      this.flujoCostosFijos6 = 0;
      this.flujoCostosFijos7 = 0;
      this.flujoUtilidadNetaCapPago1 = 0;
      this.flujoUtilidadNetaCapPago2 = 0;
      this.flujoUtilidadNetaCapPago3 = 0;
      this.flujoUtilidadNetaCapPago4 = 0;
      this.flujoUtilidadNetaCapPago5 = 0;
      this.flujoUtilidadNetaCapPago6 = 0;
      this.flujoUtilidadNetaCapPago7 = 0;
      this.flujoCuota1 = 0;
      this.flujoCuota2 = 0;
      this.flujoCuota3 = 0;
      this.flujoCuota4 = 0;
      this.flujoCuota5 = 0;
      this.flujoCuota6 = 0;
      this.flujoCuota7 = 0;
      this.flujoAcumulado1 = 0;
      this.flujoAcumulado2 = 0;
      this.flujoAcumulado3 = 0;
      this.flujoAcumulado4 = 0;
      this.flujoAcumulado5 = 0;
      this.flujoAcumulado6 = 0;
      this.flujoAcumulado7 = 0;
    }
    this.llenarTablaColumna0Tabla2();
    // tabla flujo 2 pronostico
    this.flujoService.setFlujoSaldoInicial0(this.flujoSaldoInicial0);
    this.flujoService.setFlujoSaldoInicial1(this.flujoSaldoInicial1);
    this.flujoService.setFlujoSaldoInicial2(this.flujoSaldoInicial2);
    this.flujoService.setFlujoSaldoInicial3(this.flujoSaldoInicial3);
    this.flujoService.setFlujoSaldoInicial4(this.flujoSaldoInicial4);
    this.flujoService.setFlujoSaldoInicial5(this.flujoSaldoInicial5);
    this.flujoService.setFlujoSaldoInicial6(this.flujoSaldoInicial6);
    this.flujoService.setFlujoSaldoInicial7(this.flujoSaldoInicial7);
    this.flujoService.setFlujoIngreso0(this.flujoIngreso0);
    this.flujoService.setFlujoIngreso1(this.flujoIngreso1);
    this.flujoService.setFlujoIngreso2(this.flujoIngreso2);
    this.flujoService.setFlujoIngreso3(this.flujoIngreso3);
    this.flujoService.setFlujoIngreso4(this.flujoIngreso4);
    this.flujoService.setFlujoIngreso5(this.flujoIngreso5);
    this.flujoService.setFlujoIngreso6(this.flujoIngreso6);
    this.flujoService.setFlujoIngreso7(this.flujoIngreso7);
    this.flujoService.setFlujoCostoProduccion0(this.flujoCostoProduccion0);
    this.flujoService.setFlujoCostoProduccion1(this.flujoCostoProduccion1);
    this.flujoService.setFlujoCostoProduccion2(this.flujoCostoProduccion2);
    this.flujoService.setFlujoCostoProduccion3(this.flujoCostoProduccion3);
    this.flujoService.setFlujoCostoProduccion4(this.flujoCostoProduccion4);
    this.flujoService.setFlujoCostoProduccion5(this.flujoCostoProduccion5);
    this.flujoService.setFlujoCostoProduccion6(this.flujoCostoProduccion6);
    this.flujoService.setFlujoCostoProduccion7(this.flujoCostoProduccion7);
    this.flujoService.setFlujoUtilidadBruta0(this.flujoUtilidadBruta0);
    this.flujoService.setFlujoUtilidadBruta1(this.flujoUtilidadBruta1);
    this.flujoService.setFlujoUtilidadBruta2(this.flujoUtilidadBruta2);
    this.flujoService.setFlujoUtilidadBruta3(this.flujoUtilidadBruta3);
    this.flujoService.setFlujoUtilidadBruta4(this.flujoUtilidadBruta4);
    this.flujoService.setFlujoUtilidadBruta5(this.flujoUtilidadBruta5);
    this.flujoService.setFlujoUtilidadBruta6(this.flujoUtilidadBruta6);
    this.flujoService.setFlujoUtilidadBruta7(this.flujoUtilidadBruta7);
    this.flujoService.setFlujoCostosFijos0(this.flujoCostosFijos0);
    this.flujoService.setFlujoCostosFijos1(this.flujoCostosFijos1);
    this.flujoService.setFlujoCostosFijos2(this.flujoCostosFijos2);
    this.flujoService.setFlujoCostosFijos3(this.flujoCostosFijos3);
    this.flujoService.setFlujoCostosFijos4(this.flujoCostosFijos4);
    this.flujoService.setFlujoCostosFijos5(this.flujoCostosFijos5);
    this.flujoService.setFlujoCostosFijos6(this.flujoCostosFijos6);
    this.flujoService.setFlujoCostosFijos7(this.flujoCostosFijos7);
    this.flujoService.setFlujoUtilidadNetaCapPago0(this.flujoUtilidadNetaCapPago0);
    this.flujoService.setFlujoUtilidadNetaCapPago1(this.flujoUtilidadNetaCapPago1);
    this.flujoService.setFlujoUtilidadNetaCapPago2(this.flujoUtilidadNetaCapPago2);
    this.flujoService.setFlujoUtilidadNetaCapPago3(this.flujoUtilidadNetaCapPago3);
    this.flujoService.setFlujoUtilidadNetaCapPago4(this.flujoUtilidadNetaCapPago4);
    this.flujoService.setFlujoUtilidadNetaCapPago5(this.flujoUtilidadNetaCapPago5);
    this.flujoService.setFlujoUtilidadNetaCapPago6(this.flujoUtilidadNetaCapPago6);
    this.flujoService.setFlujoUtilidadNetaCapPago7(this.flujoUtilidadNetaCapPago7);
    this.flujoService.setFlujoCuota0(this.flujoCuota0);
    this.flujoService.setFlujoCuota1(this.flujoCuota1);
    this.flujoService.setFlujoCuota2(this.flujoCuota2);
    this.flujoService.setFlujoCuota3(this.flujoCuota3);
    this.flujoService.setFlujoCuota4(this.flujoCuota4);
    this.flujoService.setFlujoCuota5(this.flujoCuota5);
    this.flujoService.setFlujoCuota6(this.flujoCuota6);
    this.flujoService.setFlujoCuota7(this.flujoCuota7);
    this.flujoService.setFlujoAcumulado0(this.flujoAcumulado0);
    this.flujoService.setFlujoAcumulado1(this.flujoAcumulado1);
    this.flujoService.setFlujoAcumulado2(this.flujoAcumulado2);
    this.flujoService.setFlujoAcumulado3(this.flujoAcumulado3);
    this.flujoService.setFlujoAcumulado4(this.flujoAcumulado4);
    this.flujoService.setFlujoAcumulado5(this.flujoAcumulado5);
    this.flujoService.setFlujoAcumulado6(this.flujoAcumulado6);
    this.flujoService.setFlujoAcumulado7(this.flujoAcumulado7);
  }
  activadorProyeccion() {
    this.calculatePeriodoA();
    this.buscarV();
    this.calculatePeriodoMes();
    this.calculateRedondeoMax();
    this.calculateSaldoInicial();
    this.calculateTotalAño();
    this.calculateTotalPeriodo();
  }
  calculateVan(): number {
    this.flujoValueVan = this.calcularMontoFinanciar() * (-1);
    const periodoMes = Math.floor(this.calculatePeriodoMes());
    const valueDividioTotalFA = ((isNaN(this.flujoADiv) ? 0 : this.flujoADiv) / this.ValorFrecuenciaParaDividir()); // valor que resulta de la division del fluo acumulado total año

    if (periodoMes == 0) {
      this.flujoValueVan = this.flujoValueVan;
    } else {
      for (let index = 1; index <= periodoMes; index++) {
        const value = this.flujoValueVan;
        this.flujoValueVan = value + ((valueDividioTotalFA) / ((1 + ((this.calculateTasaInteres()) / this.ValorFrecuenciaParaDividir())) ** (index)))
      }
    }
    this.flujoService.setFlujoValueVan(this.flujoValueVan);
    return this.flujoValueVan;
  }
  resultadoVanTir: number[] = [];
  calculateVanTir(): number {
    //this.flujoValueVan = this.calcularMontoFinanciar() * (-1);
    var valorVanManager = this.calcularMontoFinanciar() * (-1);
    const periodoMes = Math.floor(this.calculatePeriodoMes());
    const valueDividioTotalFA = ((isNaN(this.flujoADiv) ? 0 : this.flujoADiv) / this.ValorFrecuenciaParaDividir()); // valor que resulta de la division del fluo acumulado total año
    var indexCounter = 1;
    var posibleTir = Number((0.01).toFixed(2));
    var variable1;
    var value1;
    var variable2;
    var value2;
    //var counterItereaciones = 0;
    if (periodoMes == 0) {
      this.flujoValueVan = valorVanManager;
    } else {
      for (let index = 1; index <= periodoMes; index++) {         // valorVanManager se cambio antes era this.flujoValueVan
        const value = valorVanManager;
        valorVanManager = value + ((valueDividioTotalFA) / ((1 + (posibleTir / this.ValorFrecuenciaParaDividir())) ** (index)))
      }
      this.resultadoVanTir[indexCounter] = valorVanManager;
      posibleTir = Number((0.02).toFixed(2));
      indexCounter = 2;

      while (this.resultadoVanTir[indexCounter - 1] > 0) {
        for (let index = 1; index <= periodoMes; index++) {
          const value = valorVanManager;
          valorVanManager = value + ((valueDividioTotalFA) / ((1 + (posibleTir / this.ValorFrecuenciaParaDividir())) ** (index)))
        }
        this.resultadoVanTir[indexCounter] = valorVanManager;
        valorVanManager = this.calcularMontoFinanciar() * (-1);
        indexCounter = indexCounter + 1;
        posibleTir = Number((posibleTir + 0.01).toFixed(2));
      }

      variable1 = posibleTir - Number((0.02).toFixed(2));
      value1 = this.resultadoVanTir[indexCounter - 2];
      variable2 = posibleTir - Number((0.01).toFixed(2));
      value2 = this.resultadoVanTir[indexCounter - 1];
      this.flujoValueTir = this.interpolacionLineal(variable1, value1, variable2, value2);
      //console.log('variable 1: '+variable1+' value 1: '+value1+ 'variable 2: '+variable2+' value 2: '+value2+' indes counter: '+indexCounter+' valor: '+this.resultadoVanTir[indexCounter-1]);
    }
    return this.flujoValueTir;
  }
  // otra opción
  // Van = -45000 - 30000/(1+i) - 1500/(1+i)^2 + {15000[1-(1+i)^-6/i] + 15000/i [(1-(1+i)^-6)/i - 6/(1+i)^6 ]} 1/(1+i)^3 = 0;
  interpolacionLineal(variable1: number, value1: number, variable2: number, value2: number): number { // A, RA, B, RB.
    var i;
    var rI = 0;
    var resultado = 0;

    i = (((variable2 - variable1) / (value1 - value2)) * (value1)) + variable1;
    resultado = i;
    console.log('resultado de la interpolación: ' + resultado)
    return resultado;
  }
  calcularTir() {
    if (this.calculateVan() <= 0) {
      this.flujoValueTir = 0;
    } else {
      this.flujoValueTir = this.calculateVanTir();
    }
    this.flujoService.setFlujoValueTir(this.flujoValueTir);
  }
  formatearNumero(numero: number): string {
    if (numero === 0) {
      return '';
    } else {
      const redondeo = Math.round(numero); // Redondea a 0 decimales
      const valorAbsoluto = Math.abs(redondeo); // Valor absoluto

      if (valorAbsoluto === 0) {
        return '';
      } else {
        const resultado = redondeo < 0 ? `(${valorAbsoluto})` : `${valorAbsoluto}`;
        const partes = resultado.split('.');
        partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const resultadoFormateado = partes[0];

        return resultadoFormateado === 'NaN' ? '' : 'Bs. ' + resultadoFormateado;
      }
    }
  }
}
