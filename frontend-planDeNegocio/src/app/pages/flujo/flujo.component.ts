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
  flujoFrecuencia1!: number;
  datosCreditoMonto!: number;
  flujoTipoCuota!: number;
  flujoActividad: string = 'SERVICIOS';
  flujoTasaInteres: number = 0.115;
  flujoDatosCredito!: number;
  flujoPlazoMeses!: number;


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
    this.flujoIAbr = (isNaN(this.costosService.getCostosDirMarVM()) ? 0 : this.costosService.getCostosDirMarVM());
    this.flujoIMay = (isNaN(this.costosService.getCostosDirAbrVM()) ? 0 : this.costosService.getCostosDirAbrVM());
    this.flujoIJun = (isNaN(this.costosService.getCostosDirMayVM()) ? 0 : this.costosService.getCostosDirMayVM());
    this.flujoIJul = (isNaN(this.costosService.getCostosDirJunVM()) ? 0 : this.costosService.getCostosDirJunVM());
    this.flujoIAgo = (isNaN(this.costosService.getCostosDirJulVM()) ? 0 : this.costosService.getCostosDirJulVM());
    this.flujoISep = (isNaN(this.costosService.getCostosDirAgoVM()) ? 0 : this.costosService.getCostosDirAgoVM());
    this.flujoIOct = (isNaN(this.costosService.getCostosDirSepVM()) ? 0 : this.costosService.getCostosDirSepVM());
    this.flujoINov = (isNaN(this.costosService.getCostosDirOctVM()) ? 0 : this.costosService.getCostosDirOctVM());
    this.flujoIDiv = (isNaN(this.costosService.getCostosDirNovVM()) ? 0 : this.costosService.getCostosDirNovVM());

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

    //tabla flujo


    this.flujoCostosFijosTb1 = this.flujoService.getFlujoCostosFijosTb1();
    this.calcularTotalAP();
    this.calcularTotalPI();
    this.calcularTotalProyecto();
    this.calcularAportePropio();
    this.calcularMontoFinanciar();
    if (this.datosCreditoMonto) {
      this.calculateDatosCredito();
    }
    this.llenarTabla1Flujo();
    this.calculateTV();
    this.calculateTC();
    this.calculateTM();
    this.calculateUB();
    this.calculateUtilidadOperativa();

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
  }
  CalculateCostosFijosFlujoTab1() {
    this.flujoCostosFijosTb1 = (this.costoOpTotalGasto ?? 0)
    this.flujoService.setFlujoCostosFijosTb1(this.flujoCostosFijosTb1);
  }
  /////////////////// tabla de flujo
  asignarValorFlujoCEne(): number {
    //return this.flujoCEne = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCEne = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCEne = 0;
    }
  }
  asignarValorFlujoCFeb(): number {
    //return this.flujoCFeb = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCFeb = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCFeb = 0;
    }
  }
  asignarValorFlujoCMar(): number {
    //return this.flujoCMar = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCMar = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCMar = 0;
    }
  }
  asignarValorFlujoCAbr(): number {
    //return this.flujoCAbr = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCAbr = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCAbr = 0;
    }
  }
  asignarValorFlujoCMay(): number {
    //return this.flujoCMay = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCMay = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCMay = 0;
    }
  }
  asignarValorFlujoCJun(): number {
    //return this.flujoCJun = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCJun = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCJun = 0;
    }
  }
  asignarValorFlujoCJul(): number {
    //return this.flujoCJul = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCJul = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCJul = 0;
    }
  }
  asignarValorFlujoCAgo(): number {
    //return this.flujoCAgo = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCAgo = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCAgo = 0;
    }
  }
  asignarValorFlujoCSep(): number {
    //return this.flujoCSep = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCSep = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCSep = 0;
    }
  }
  asignarValorFlujoCOct(): number {
    //return this.flujoCOct = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCOct = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCOct = 0;
    }
  }
  asignarValorFlujoCNov(): number {
    //return this.flujoCNov = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCNov = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCNov = 0;
    }
  }
  asignarValorFlujoCDiv(): number {
    //return this.flujoCDiv = this.flujoService.getFlujoCuotaProx() +this.calculatePoliza();
    if (this.flujoService.getFlujoCuotaProx() != null) {
      return this.flujoCDiv = this.flujoService.getFlujoCuotaProx() + this.calculatePoliza();
    } else {
      return this.flujoCDiv = 0;
    }
  }

  llenarTabla1Flujo() {
    this.flujoUBEne = (this.flujoIEne ?? 0) - (this.flujoCProdEne ?? 0);
    this.flujoUNCdPagEne = (this.flujoUBEne ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAEne = (this.flujoUNCdPagEne ?? 0) - (this.asignarValorFlujoCEne() ?? 0);
    this.flujoSIFeb = (isNaN(this.flujoAEne) ? 0 : this.flujoAEne);
    this.flujoService.setFlujoUBEne(this.flujoUBEne);
    this.flujoService.setFlujoUNCdPagEne(this.flujoUNCdPagEne);
    this.flujoService.setFlujoAEne(this.flujoAEne);
    this.flujoService.setFlujoSIFeb(this.flujoSIFeb);

    this.flujoUBFeb = (this.flujoIFeb ?? 0) - (this.flujoCPFeb ?? 0);
    this.flujoUNCdPFeb = (this.flujoUBFeb ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAFeb = (this.flujoUNCdPFeb ?? 0) - (this.asignarValorFlujoCFeb() ?? 0) + this.flujoSIFeb;
    this.flujoSIMar = this.flujoAFeb;
    this.flujoService.setFlujoUBFeb(this.flujoUBFeb);
    this.flujoService.setFlujoUNCdPFeb(this.flujoUNCdPFeb);
    this.flujoService.setFlujoAFeb(this.flujoAFeb);
    this.flujoService.setFlujoSIMar(this.flujoSIMar);

    this.flujoUBMar = (this.flujoIMar ?? 0) - (this.flujoCPMar ?? 0);
    this.flujoUNCdPMar = (this.flujoUBMar ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAMar = (this.flujoUNCdPMar ?? 0) - (this.asignarValorFlujoCMar() ?? 0) + this.flujoSIMar;
    this.flujoSIAbr = this.flujoAMar;
    this.flujoService.setFlujoUBMar(this.flujoUBMar);
    this.flujoService.setFlujoUNCdPMar(this.flujoUNCdPMar);
    this.flujoService.setFlujoAMar(this.flujoAMar);
    this.flujoService.setFlujoSIAbr(this.flujoSIAbr);

    this.flujoUBAbr = (this.flujoIAbr ?? 0) - (this.flujoCPAbr ?? 0);
    this.flujoUNCdPAbr = (this.flujoUBAbr ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAAbr = (this.flujoUNCdPAbr ?? 0) - (this.asignarValorFlujoCAbr() ?? 0) + this.flujoSIAbr;
    this.flujoSIMay = this.flujoAAbr;
    this.flujoService.setFlujoUBAbr(this.flujoUBAbr);
    this.flujoService.setFlujoUNCdPAbr(this.flujoUNCdPAbr);
    this.flujoService.setFlujoAAbr(this.flujoAAbr);
    this.flujoService.setFlujoSIMay(this.flujoSIMay);

    this.flujoUBMay = (this.flujoIMay ?? 0) - (this.flujoCPMay ?? 0);
    this.flujoUNCdPMay = (this.flujoUBMay ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAMay = (this.flujoUNCdPMay ?? 0) - (this.asignarValorFlujoCMay() ?? 0) + this.flujoSIMay;
    this.flujoSIJun = this.flujoAMay;
    this.flujoService.setFlujoUBMay(this.flujoUBMay);
    this.flujoService.setFlujoUNCdPMay(this.flujoUNCdPMay);
    this.flujoService.setFlujoAMay(this.flujoAMay);
    this.flujoService.setFlujoSIJun(this.flujoSIJun);

    this.flujoUBJun = (this.flujoIJun ?? 0) - (this.flujoCPJun ?? 0);
    this.flujoUNCdPJun = (this.flujoUBJun ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAJun = (this.flujoUNCdPJun ?? 0) - (this.asignarValorFlujoCJun() ?? 0) + this.flujoSIJun;
    this.flujoSIJul = this.flujoAJun;
    this.flujoService.setFlujoUBJun(this.flujoUBJun);
    this.flujoService.setFlujoUNCdPJun(this.flujoUNCdPJun);
    this.flujoService.setFlujoAJun(this.flujoAJun);
    this.flujoService.setFlujoSIJul(this.flujoSIJul);

    this.flujoUBJul = (this.flujoIJul ?? 0) - (this.flujoCPJul ?? 0);
    this.flujoUNCdPJul = (this.flujoUBJul ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAJul = (this.flujoUNCdPJul ?? 0) - (this.asignarValorFlujoCJul() ?? 0) + this.flujoSIJul;
    this.flujoSIAgo = this.flujoAJul;
    this.flujoService.setFlujoUBJul(this.flujoUBJul);
    this.flujoService.setFlujoUNCdPJul(this.flujoUNCdPJul);
    this.flujoService.setFlujoAJul(this.flujoAJul);
    this.flujoService.setFlujoSIAgo(this.flujoSIAgo);

    this.flujoUBAgo = (this.flujoIAgo ?? 0) - (this.flujoCPAgo ?? 0);
    this.flujoUNCdPAgo = (this.flujoUBAgo ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAAgo = (this.flujoUNCdPAgo ?? 0) - (this.asignarValorFlujoCAgo() ?? 0) + this.flujoSIAgo;
    this.flujoSISep = this.flujoAAgo;
    this.flujoService.setFlujoUBAgo(this.flujoUBAgo);
    this.flujoService.setFlujoUNCdPAgo(this.flujoUNCdPAgo);
    this.flujoService.setFlujoAAgo(this.flujoAAgo);
    this.flujoService.setFlujoSISep(this.flujoSISep);

    this.flujoUBSep = (this.flujoISep ?? 0) - (this.flujoCPSep ?? 0);
    this.flujoUNCdPSep = (this.flujoUBSep ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoASep = (this.flujoUNCdPSep ?? 0) - (this.asignarValorFlujoCSep() ?? 0) + this.flujoSISep;
    this.flujoSIOct = this.flujoASep;
    this.flujoService.setFlujoUBSep(this.flujoUBSep);
    this.flujoService.setFlujoUNCdPSep(this.flujoUNCdPSep);
    this.flujoService.setFlujoASep(this.flujoASep);
    this.flujoService.setFlujoSIOct(this.flujoSIOct);

    this.flujoUBOct = (this.flujoIOct ?? 0) - (this.flujoCPOct ?? 0);
    this.flujoUNCdPOct = (this.flujoUBOct ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoAOct = (this.flujoUNCdPOct ?? 0) - (this.asignarValorFlujoCOct() ?? 0) + this.flujoSIOct;
    this.flujoSINov = this.flujoAOct;
    this.flujoService.setFlujoUBOct(this.flujoUBOct);
    this.flujoService.setFlujoUNCdPOct(this.flujoUNCdPOct);
    this.flujoService.setFlujoAOct(this.flujoAOct);
    this.flujoService.setFlujoSINov(this.flujoSINov);

    this.flujoUBNov = (this.flujoINov ?? 0) - (this.flujoCPNov ?? 0);
    this.flujoUNCdPNov = (this.flujoUBNov ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoANov = (this.flujoUNCdPNov ?? 0) - (this.asignarValorFlujoCNov() ?? 0) + this.flujoSINov;
    this.flujoSIDiv = this.flujoANov;
    this.flujoService.setFlujoUBNov(this.flujoUBNov);
    this.flujoService.setFlujoUNCdPNov(this.flujoUNCdPNov);
    this.flujoService.setFlujoANov(this.flujoANov);
    this.flujoService.setFlujoSIDiv(this.flujoSIDiv);

    this.flujoUBDiv = (this.flujoIDiv ?? 0) - (this.flujoCPDiv ?? 0);
    this.flujoUNCdPDiv = (this.flujoUBDiv ?? 0) - (this.flujoCostosFijosTb1 ?? 0);
    this.flujoADiv = (this.flujoUNCdPDiv ?? 0) - (this.asignarValorFlujoCDiv() ?? 0) + this.flujoSIDiv;
    //this.flujoSIFeb = this.flujoADiv;
    this.flujoService.setFlujoUBDiv(this.flujoUBDiv);
    this.flujoService.setFlujoUNCdPDiv(this.flujoUNCdPDiv);
    this.flujoService.setFlujoADiv(this.flujoADiv);
    //this.flujoService.setFlujoSIFeb(this.flujoSIFeb);

  }


  /////////////////// Datos del credito
  calculateDatosCredito() {
    if (this.flujoPlazoMeses == null || this.flujoPlazoMeses == undefined) {
      this.flujoCuotaProx = ((this.datosCreditoMonto * (this.calculateTasaInteres() / 12)) / (1 - (1 + (this.calculateTasaInteres() / 12)) ** -(this.flujoPlazoMeses ?? 1))) - this.datosCreditoMonto;
      this.flujoService.setFlujoCuotaProx(this.flujoCuotaProx);
      this.flujoService.setFlujoPoliza(this.flujoPoliza);
      this.llenarTabla1Flujo();
    } else {
      this.flujoCuotaProx = ((this.datosCreditoMonto * (this.calculateTasaInteres() / 12)) / (1 - (1 + (this.calculateTasaInteres() / 12)) ** -(this.flujoPlazoMeses ?? 1)));
      this.flujoService.setFlujoCuotaProx(this.flujoCuotaProx);
      this.flujoService.setFlujoPoliza(this.flujoPoliza);
      this.llenarTabla1Flujo();
    }
    //this.flujoCuotaProx = (this.datosCreditoMonto * (this.calculateTasaInteres() / 12)) / (1 - Math.pow(1 + (this.calculateTasaInteres() / 12), -1));
    //this.flujoDatosCredito = this.flujoCuotaProx + this.calculatePoliza(+this.flujoPoliza); ** ((-this.flujoPlazoMeses) ?? 1)

  }
  calculatePoliza(): number {
    return this.flujoPoliza * 100;
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
}
