import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlujoService {

  constructor() { }
  private flujoTipoCuota!: number;
  public getFlujoTipoCuota(): number {
    return this.flujoTipoCuota;
  }
  public setFlujoTipoCuota(value: number) {
    this.flujoTipoCuota = value;
  }
  private flujoTipoCuotaOpcion!: string;
  public getFlujoTipoCuotaOpcion(): string {
    return this.flujoTipoCuotaOpcion;
  }
  public setFlujoTipoCuotaOpcion(value: string) {
    this.flujoTipoCuotaOpcion = value;
  }
  private flujoPoliza1: number[] = [];
  public getFlujoPoliza1(): number[] {
    return this.flujoPoliza1;
  }
  public setFlujoPoliza1(value: number[]) {
    this.flujoPoliza1 = value;
  }
  private flujoPlazoMeses!: number;
  public getFlujoPlazoMeses(): number {
    return this.flujoPlazoMeses;
  }
  public setFlujoPlazoMeses(value: number) {
    this.flujoPlazoMeses = value;
  }
  private flujoFrecuencia1!: string;
  public getFlujoFrecuencia1(): string {
    return this.flujoFrecuencia1;
  }
  public setFlujoFrecuencia1(value: string) {
    this.flujoFrecuencia1 = value;
  }
  private flujoValorFrecuencia1!: number;
  public getFlujoValorFrecuencia1(): number {
    return this.flujoValorFrecuencia1;
  }
  public setFlujoValorFrecuencia1(value: number) {
    this.flujoValorFrecuencia1 = value;
  }
  private utilidadOperativa!: number;
  public getUtilidadOperativa(): number {
    return this.utilidadOperativa;
  }
  public setUtilidadOperativa(value: number) {
    this.utilidadOperativa = value;
  }
  private flujoUB!: number;
  public getFlujoUB(): number {
    return this.flujoUB;
  }
  public setFlujoUB(value: number) {
    this.flujoUB = value;
  }
  private flujoTV!: number;
  public getFlujoTV(): number {
    return this.flujoTV;
  }
  public setFlujoTV(value: number) {
    this.flujoTV = value;
  }
  private flujoTC!: number;
  public getFlujoTC(): number {
    return this.flujoTC;
  }
  public setFlujoTC(value: number) {
    this.flujoTC = value;
  }
  private flujoTM!: number;
  public getflujoTM(): number {
    return this.flujoTM;
  }
  public setFlujoTM(value: number) {
    this.flujoTM = value;
  }
  private flujoPoliza: number = 0.395;
  public getFlujoPoliza(): number {
    return this.flujoPoliza;
  }
  public setFlujoPoliza(value: number) {
    this.flujoPoliza = value;
  }
  private flujoCuotaProx!: number;
  public getFlujoCuotaProx(): number {
    return this.flujoCuotaProx;
  }
  public setFlujoCuotaProx(value: number) {
    this.flujoCuotaProx = value;
  }
  private flujoAcIni!: number;
  public getFlujoAcIni(): number {
    return this.flujoAcIni;
  }
  public setFlujoAcIni(value: number) {
    this.flujoAcIni = value;
  }
  private flujoSIEne!: number;
  public getFlujoSIEne(): number {
    return this.flujoSIEne;
  }
  public setFlujoSIEne(value: number) {
    this.flujoSIEne = value;
  }
  private flujoSIFeb!: number;
  public getFlujoSIFeb(): number {
    return this.flujoSIFeb;
  }
  public setFlujoSIFeb(value: number) {
    this.flujoSIFeb = value;
  }
  private flujoSIMar!: number;
  public getFlujoSIMar(): number {
    return this.flujoSIMar;
  }
  public setFlujoSIMar(value: number) {
    this.flujoSIMar = value;
  }
  private flujoSIAbr!: number;
  public getFlujoSIAbr(): number {
    return this.flujoSIAbr;
  }
  public setFlujoSIAbr(value: number) {
    this.flujoSIAbr = value;
  }
  private flujoSIMay!: number;
  public getFlujoSIMay(): number {
    return this.flujoSIMay;
  }
  public setFlujoSIMay(value: number) {
    this.flujoSIMay = value;
  }
  private flujoSIJun!: number;
  public getFlujoSIJun(): number {
    return this.flujoSIJun;
  }
  public setFlujoSIJun(value: number) {
    this.flujoSIJun = value;
  }
  private flujoSIJul!: number;
  public getFlujoSIJul(): number {
    return this.flujoSIJul;
  }
  public setFlujoSIJul(value: number) {
    this.flujoSIJul = value;
  }
  private flujoSIAgo!: number;
  public getFlujoSIAgo(): number {
    return this.flujoSIAgo;
  }
  public setFlujoSIAgo(value: number) {
    this.flujoSIAgo = value;
  }
  private flujoSISep!: number;
  public getFlujoSISep(): number {
    return this.flujoSISep;
  }
  public setFlujoSISep(value: number) {
    this.flujoSISep = value;
  }
  private flujoSIOct!: number;
  public getFlujoSIOct(): number {
    return this.flujoSIOct;
  }
  public setFlujoSIOct(value: number) {
    this.flujoSIOct = value;
  }
  private flujoSINov!: number;
  public getFlujoSINov(): number {
    return this.flujoSINov;
  }
  public setFlujoSINov(value: number) {
    this.flujoSINov = value;
  }
  private flujoSIDiv!: number;
  public getFlujoSIDiv(): number {
    return this.flujoSIDiv;
  }
  public setFlujoSIDiv(value: number) {
    this.flujoSIDiv = value;
  }
  private flujoIEne!: number;
  public getFlujoIEne(): number {
    return this.flujoIEne;
  }
  public setFlujoIEne(value: number) {
    this.flujoIEne = value;
  }
  private flujoIFeb!: number;
  public getFlujoIFeb(): number {
    return this.flujoIFeb;
  }
  public setFlujoIFeb(value: number) {
    this.flujoIFeb = value;
  }
  private flujoIMar!: number;
  public getFlujoIMar(): number {
    return this.flujoIMar;
  }
  public setFlujoIMar(value: number) {
    this.flujoIMar = value;
  }
  private flujoIAbr!: number;
  public getFlujoIAbr(): number {
    return this.flujoIAbr;
  }
  public setFlujoIAbr(value: number) {
    this.flujoIAbr = value;
  }
  private flujoIMay!: number;
  public getFlujoIMay(): number {
    return this.flujoIMay;
  }
  public setFlujoIMay(value: number) {
    this.flujoIMay = value;
  }
  private flujoIJun!: number;
  public getFlujoIJun(): number {
    return this.flujoIJun;
  }
  public setFlujoIJun(value: number) {
    this.flujoIJun = value;
  }
  private flujoIJul!: number;
  public getFlujoIJul(): number {
    return this.flujoIJul;
  }
  public setFlujoIJul(value: number) {
    this.flujoIJul = value;
  }
  private flujoIAgo!: number;
  public getFlujoIAgo(): number {
    return this.flujoIAgo;
  }
  public setFlujoIAgo(value: number) {
    this.flujoIAgo = value;
  }
  private flujoISep!: number;
  public getFlujoISep(): number {
    return this.flujoISep;
  }
  public setFlujoISep(value: number) {
    this.flujoISep = value;
  }
  private flujoIOct!: number;
  public getFlujoIOct(): number {
    return this.flujoIOct;
  }
  public setFlujoIOct(value: number) {
    this.flujoIOct = value;
  }
  private flujoINov!: number;
  public getFlujoINov(): number {
    return this.flujoINov;
  }
  public setFlujoINov(value: number) {
    this.flujoINov = value;
  }
  private flujoIDiv!: number;
  public getFlujoIDiv(): number {
    return this.flujoIDiv;
  }
  public setFlujoIDiv(value: number) {
    this.flujoIDiv = value;
  }
  private flujoCProdEne!: number;
  public getFlujoCProdEne(): number {
    return this.flujoCProdEne;
  }
  public setFlujoCProdEne(value: number) {
    this.flujoCProdEne = value;
  }
  private flujoCPFeb!: number;
  public getFlujoCPFeb(): number {
    return this.flujoCPFeb;
  }
  public setFlujoCPFeb(value: number) {
    this.flujoCPFeb = value;
  }
  private flujoCPMar!: number;
  public getFlujoCPMar(): number {
    return this.flujoCPMar;
  }
  public setFlujoCPMar(value: number) {
    this.flujoCPMar = value;
  }
  private flujoCPAbr!: number;
  public getFlujoCPAbr(): number {
    return this.flujoCPAbr;
  }
  public setFlujoCPAbr(value: number) {
    this.flujoCPAbr = value;
  }
  private flujoCPMay!: number;
  public getFlujoCPMay(): number {
    return this.flujoCPMay;
  }
  public setFlujoCPMay(value: number) {
    this.flujoCPMay = value;
  }
  private flujoCPJun!: number;
  public getFlujoCPJun(): number {
    return this.flujoCPJun;
  }
  public setFlujoCPJun(value: number) {
    this.flujoCPJun = value;
  }
  private flujoCPJul!: number;
  public getFlujoCPJul(): number {
    return this.flujoCPJul;
  }
  public setFlujoCPJul(value: number) {
    this.flujoCPJul = value;
  }
  private flujoCPAgo!: number;
  public getFlujoCPAgo(): number {
    return this.flujoCPAgo;
  }
  public setFlujoCPAgo(value: number) {
    this.flujoCPAgo = value;
  }
  private flujoCPSep!: number;
  public getFlujoCPSep(): number {
    return this.flujoCPSep;
  }
  public setFlujoCPSep(value: number) {
    this.flujoCPSep = value;
  }
  private flujoCPOct!: number;
  public getFlujoCPOct(): number {
    return this.flujoCPOct;
  }
  public setFlujoCPOct(value: number) {
    this.flujoCPOct = value;
  }
  private flujoCPNov!: number;
  public getFlujoCPNov(): number {
    return this.flujoCPNov;
  }
  public setFlujoCPNov(value: number) {
    this.flujoCPNov = value;
  }
  private flujoCPDiv!: number;
  public getFlujoCPDiv(): number {
    return this.flujoCPDiv;
  }
  public setFlujoCPDiv(value: number) {
    this.flujoCPDiv = value;
  }
  private flujoUBEne!: number;
  public getFlujoUBEne(): number {
    return this.flujoUBEne;
  }
  public setFlujoUBEne(value: number) {
    this.flujoUBEne = value;
  }
  private flujoUBFeb!: number;
  public getFlujoUBFeb(): number {
    return this.flujoUBFeb;
  }
  public setFlujoUBFeb(value: number) {
    this.flujoUBFeb = value;
  }
  private flujoUBMar!: number;
  public getFlujoUBMar(): number {
    return this.flujoUBMar;
  }
  public setFlujoUBMar(value: number) {
    this.flujoUBMar = value;
  }
  private flujoUBAbr!: number;
  public getFlujoUBAbr(): number {
    return this.flujoUBAbr;
  }
  public setFlujoUBAbr(value: number) {
    this.flujoUBAbr = value;
  }
  private flujoUBMay!: number;
  public getFlujoUBMay(): number {
    return this.flujoUBMay;
  }
  public setFlujoUBMay(value: number) {
    this.flujoUBMay = value;
  }
  private flujoUBJun!: number;
  public getFlujoUBJun(): number {
    return this.flujoUBJun;
  }
  public setFlujoUBJun(value: number) {
    this.flujoUBJun = value;
  }
  private flujoUBJul!: number;
  public getFlujoUBJul(): number {
    return this.flujoUBJul;
  }
  public setFlujoUBJul(value: number) {
    this.flujoUBJul = value;
  }
  private flujoUBAgo!: number;
  public getFlujoUBAgo(): number {
    return this.flujoUBAgo;
  }
  public setFlujoUBAgo(value: number) {
    this.flujoUBAgo = value;
  }
  private flujoUBSep!: number;
  public getFlujoUBSep(): number {
    return this.flujoUBSep;
  }
  public setFlujoUBSep(value: number) {
    this.flujoUBSep = value;
  }
  private flujoUBOct!: number;
  public getFlujoUBOct(): number {
    return this.flujoUBOct;
  }
  public setFlujoUBOct(value: number) {
    this.flujoUBOct = value;
  }
  private flujoUBNov!: number;
  public getFlujoUBNov(): number {
    return this.flujoUBNov;
  }
  public setFlujoUBNov(value: number) {
    this.flujoUBNov = value;
  }
  private flujoUBDiv!: number;
  public getFlujoUBDiv(): number {
    return this.flujoUBDiv;
  }
  public setFlujoUBDiv(value: number) {
    this.flujoUBDiv = value;
  }
  private flujoUNCdPagEne!: number;
  public getFlujoUNCdPagEne(): number {
    return this.flujoUNCdPagEne;
  }
  public setFlujoUNCdPagEne(value: number) {
    this.flujoUNCdPagEne = value;
  }
  private flujoUNCdPFeb!: number;
  public getFlujoUNCdPFeb(): number {
    return this.flujoUNCdPFeb;
  }
  public setFlujoUNCdPFeb(value: number) {
    this.flujoUNCdPFeb = value;
  }
  private flujoUNCdPMar!: number;
  public getFlujoUNCdPMar(): number {
    return this.flujoUNCdPMar;
  }
  public setFlujoUNCdPMar(value: number) {
    this.flujoUNCdPMar = value;
  }
  private flujoUNCdPAbr!: number;
  public getFlujoUNCdPAbr(): number {
    return this.flujoUNCdPAbr;
  }
  public setFlujoUNCdPAbr(value: number) {
    this.flujoUNCdPAbr = value;
  }
  private flujoUNCdPMay!: number;
  public getFlujoUNCdPMay(): number {
    return this.flujoUNCdPMay;
  }
  public setFlujoUNCdPMay(value: number) {
    this.flujoUNCdPMay = value;
  }
  private flujoUNCdPJun!: number;
  public getFlujoUNCdPJun(): number {
    return this.flujoUNCdPJun;
  }
  public setFlujoUNCdPJun(value: number) {
    this.flujoUNCdPJun = value;
  }
  private flujoUNCdPJul!: number;
  public getFlujoUNCdPJul(): number {
    return this.flujoUNCdPJul;
  }
  public setFlujoUNCdPJul(value: number) {
    this.flujoUNCdPJul = value;
  }
  private flujoUNCdPAgo!: number;
  public getFlujoUNCdPAgo(): number {
    return this.flujoUNCdPAgo;
  }
  public setFlujoUNCdPAgo(value: number) {
    this.flujoUNCdPAgo = value;
  }
  private flujoUNCdPSep!: number;
  public getFlujoUNCdPSep(): number {
    return this.flujoUNCdPSep;
  }
  public setFlujoUNCdPSep(value: number) {
    this.flujoUNCdPSep = value;
  }
  private flujoUNCdPOct!: number;
  public getFlujoUNCdPOct(): number {
    return this.flujoUNCdPOct;
  }
  public setFlujoUNCdPOct(value: number) {
    this.flujoUNCdPOct = value;
  }
  private flujoUNCdPNov!: number;
  public getFlujoUNCdPNov(): number {
    return this.flujoUNCdPNov;
  }
  public setFlujoUNCdPNov(value: number) {
    this.flujoUNCdPNov = value;
  }
  private flujoUNCdPDiv!: number;
  public getFlujoUNCdPDiv(): number {
    return this.flujoUNCdPDiv;
  }
  public setFlujoUNCdPDiv(value: number) {
    this.flujoUNCdPDiv = value;
  }
  private flujoCEne!: number;
  public getFlujoCEne(): number {
    return this.flujoCEne;
  }
  public setFlujoCEne(value: number) {
    this.flujoCEne = value;
  }
  private flujoCFeb!: number;
  public getFlujoCFeb(): number {
    return this.flujoCFeb;
  }
  public setFlujoCFeb(value: number) {
    this.flujoCFeb = value;
  }
  private flujoCMar!: number;
  public getFlujoCMar(): number {
    return this.flujoCMar;
  }
  public setFlujoCMar(value: number) {
    this.flujoCMar = value;
  }
  private flujoCAbr!: number;
  public getFlujoCAbr(): number {
    return this.flujoCAbr;
  }
  public setFlujoCAbr(value: number) {
    this.flujoCAbr = value;
  }
  private flujoCMay!: number;
  public getFlujoCMay(): number {
    return this.flujoCMay;
  }
  public setFlujoCMay(value: number) {
    this.flujoCMay = value;
  }
  private flujoCJun!: number;
  public getFlujoCJun(): number {
    return this.flujoCJun;
  }
  public setFlujoCJun(value: number) {
    this.flujoCJun = value;
  }
  private flujoCJul!: number;
  public getFlujoCJul(): number {
    return this.flujoCJul;
  }
  public setFlujoCJul(value: number) {
    this.flujoCJul = value;
  }
  private flujoCAgo!: number;
  public getFlujoCAgo(): number {
    return this.flujoCAgo;
  }
  public setFlujoCAgo(value: number) {
    this.flujoCAgo = value;
  }
  private flujoCSep!: number;
  public getFlujoCSep(): number {
    return this.flujoCSep;
  }
  public setFlujoCSep(value: number) {
    this.flujoCSep = value;
  }
  private flujoCOct!: number;
  public getFlujoCOct(): number {
    return this.flujoCOct;
  }
  public setFlujoCOct(value: number) {
    this.flujoCOct = value;
  }
  private flujoCNov!: number;
  public getFlujoCNov(): number {
    return this.flujoCNov;
  }
  public setFlujoCNov(value: number) {
    this.flujoCNov = value;
  }
  private flujoCDiv!: number;
  public getFlujoCDiv(): number {
    return this.flujoCDiv;
  }
  public setFlujoCDiv(value: number) {
    this.flujoCDiv = value;
  }
  private flujoAEne!: number;
  public getFlujoAEne(): number {
    return this.flujoAEne;
  }
  public setFlujoAEne(value: number) {
    this.flujoAEne = value;
  }
  private flujoAFeb!: number;
  public getFlujoAFeb(): number {
    return this.flujoAFeb;
  }
  public setFlujoAFeb(value: number) {
    this.flujoAFeb = value;
  }
  private flujoAMar!: number;
  public getFlujoAMar(): number {
    return this.flujoAMar;
  }
  public setFlujoAMar(value: number) {
    this.flujoAMar = value;
  }
  private flujoAAbr!: number;
  public getFlujoAAbr(): number {
    return this.flujoAAbr;
  }
  public setFlujoAAbr(value: number) {
    this.flujoAAbr = value;
  }
  private flujoAMay!: number;
  public getFlujoAMay(): number {
    return this.flujoAMay;
  }
  public setFlujoAMay(value: number) {
    this.flujoAMay = value;
  }
  private flujoAJun!: number;
  public getFlujoAJun(): number {
    return this.flujoAJun;
  }
  public setFlujoAJun(value: number) {
    this.flujoAJun = value;
  }
  private flujoAJul!: number;
  public getFlujoAJul(): number {
    return this.flujoAJul;
  }
  public setFlujoAJul(value: number) {
    this.flujoAJul = value;
  }
  private flujoAAgo!: number;
  public getFlujoAAgo(): number {
    return this.flujoAAgo;
  }
  public setFlujoAAgo(value: number) {
    this.flujoAAgo = value;
  }
  private flujoASep!: number;
  public getFlujoASep(): number {
    return this.flujoASep;
  }
  public setFlujoASep(value: number) {
    this.flujoASep = value;
  }
  private flujoAOct!: number;
  public getFlujoAOct(): number {
    return this.flujoAOct;
  }
  public setFlujoAOct(value: number) {
    this.flujoAOct = value;
  }
  private flujoANov!: number;
  public getFlujoANov(): number {
    return this.flujoANov;
  }
  public setFlujoANov(value: number) {
    this.flujoANov = value;
  }
  private flujoADiv!: number;
  public getFlujoADiv(): number {
    return this.flujoADiv;
  }
  public setFlujoADiv(value: number) {
    this.flujoADiv = value;
  }

  private flujoActividad: string = 'SERVICIOS';
  public getFlujoActividad(): string {
    return this.flujoActividad;
  }
  public setFlujoActividad(value: string) {
    this.flujoActividad = value;
  }
  private flujoTasaInteres: number = 0.115;
  public getFlujoTasaInteres(): number {
    return this.flujoTasaInteres;
  }
  public setFlujoTasaInteres(value: number) {
    this.flujoTasaInteres = value;
  }
  private flujoCostosFijosTb1!: number;
  public getFlujoCostosFijosTb1(): number {
    return this.flujoCostosFijosTb1;
  }
  public setFlujoCostosFijosTb1(value: number) {
    this.flujoCostosFijosTb1 = value;
  }
  private costoOperativo!: number;
  public getCostoOperativo(): number {
    return this.costoOperativo;
  }
  public setCostoOperativo(value: number) {
    this.costoOperativo = value;
  }
  private costoOpImpuesto!: number;
  public getCostoOpImpuesto(): number {
    return this.costoOpImpuesto;
  }
  public setCostoOpImpuesto(value: number) {
    this.costoOpImpuesto = value;
  }
  private costoOpAlimentacion!: number;
  public getCostoOpAlimentacion(): number {
    return this.costoOpAlimentacion;
  }
  public setCostoOpAlimentacion(value: number) {
    this.costoOpAlimentacion = value;
  }
  private costoOpServLuz!: number;
  public getCostoOpServLuz(): number {
    return this.costoOpServLuz;
  }
  public setCostoOpServLuz(value: number) {
    this.costoOpServLuz = value;
  }
  private costoOpServAgua!: number;
  public getCostoOpServAgua(): number {
    return this.costoOpServAgua;
  }
  public setCostoOpServAgua(value: number) {
    this.costoOpServAgua = value;
  }
  private costoOpServGas!: number;
  public getCostoOpServGas(): number {
    return this.costoOpServGas;
  }
  public setCostoOpServGas(value: number) {
    this.costoOpServGas = value;
  }
  private costoOpServTelf!: number;
  public getCostoOpServTelf(): number {
    return this.costoOpServTelf;
  }
  public setCostoOpServTelf(value: number) {
    this.costoOpServTelf = value;
  }
  private costoOpServInter!: number;
  public getCostoOpServInter(): number {
    return this.costoOpServInter;
  }
  public setCostoOpServInter(value: number) {
    this.costoOpServInter = value;
  }
  private costoOpAlquiler!: number;
  public getCostoOpAlquiler(): number {
    return this.costoOpAlquiler;
  }
  public setCostoOpAlquiler(value: number) {
    this.costoOpAlquiler = value;
  }
  private costoOpTransporte!: number;
  public getCostoOpTransporte(): number {
    return this.costoOpTransporte;
  }
  public setCostoOpTransporte(value: number) {
    this.costoOpTransporte = value;
  }
  private costoOpMaterialEscritorio!: number;
  public getCostoOpMaterialEscritorio(): number {
    return this.costoOpMaterialEscritorio;
  }
  public setCostoOpMaterialEscritorio(value: number) {
    this.costoOpMaterialEscritorio = value;
  }
  private costoOpPagoEmpl!: number;
  public getCostoOpPagoEmpl(): number {
    return this.costoOpPagoEmpl;
  }
  public setCostoOpPagoEmpl(value: number) {
    this.costoOpPagoEmpl = value;
  }
  private costoOpPromo!: number;
  public getCostoOpPromo(): number {
    return this.costoOpPromo;
  }
  public setCostoOpPromo(value: number) {
    this.costoOpPromo = value;
  }
  private costoOpTxtMant1!: string;
  public getCostoOpTxtMant1(): string {
    return this.costoOpTxtMant1;
  }
  public setCostoOpTxtMant1(value: string) {
    this.costoOpTxtMant1 = value;
  }
  private costoOpTxtMant2!: string;
  public getCostoOpTxtMant2(): string {
    return this.costoOpTxtMant2;
  }
  public setCostoOpTxtMant2(value: string) {
    this.costoOpTxtMant2 = value;
  }
  private costoOpTxtMant3!: string;
  public getCostoOpTxtMant3(): string {
    return this.costoOpTxtMant3;
  }
  public setCostoOpTxtMant3(value: string) {
    this.costoOpTxtMant3 = value;
  }
  private costoOpMant1!: number;
  public getCostoOpMant1(): number {
    return this.costoOpMant1;
  }
  public setCostoOpMant1(value: number) {
    this.costoOpMant1 = value;
  }
  private costoOpMant2!: number;
  public getCostoOpMant2(): number {
    return this.costoOpMant2;
  }
  public setCostoOpMant2(value: number) {
    this.costoOpMant2 = value;
  }
  private costoOpMant3!: number;
  public getCostoOpMant3(): number {
    return this.costoOpMant3;
  }
  public setCostoOpMant3(value: number) {
    this.costoOpMant3 = value;
  }
  private costoOpVestimenta!: number;
  public getCostoOpVestimenta(): number {
    return this.costoOpVestimenta;
  }
  public setCostoOpVestimenta(value: number) {
    this.costoOpVestimenta = value;
  }
  private costoOpSalud!: number;
  public getCostoOpSalud(): number {
    return this.costoOpSalud;
  }
  public setCostoOpSalud(value: number) {
    this.costoOpSalud = value;
  }
  private costoOpTxtOtrosImpr1!: string;
  public getCostoOpTxtOtrosImpr1(): string {
    return this.costoOpTxtOtrosImpr1;
  }
  public setCostoOpTxtOtrosImpr1(value: string) {
    this.costoOpTxtOtrosImpr1 = value;
  }
  private costoOpTxtOtrosImpr2!: string;
  public getCostoOpTxtOtrosImpr2(): string {
    return this.costoOpTxtOtrosImpr2;
  }
  public setCostoOpTxtOtrosImpr2(value: string) {
    this.costoOpTxtOtrosImpr2 = value;
  }
  private costoOpOtrosImpr1!: number;
  public getCostoOpOtrosImpr1(): number {
    return this.costoOpOtrosImpr1;
  }
  public setCostoOpOtrosImpr1(value: number) {
    this.costoOpOtrosImpr1 = value;
  }
  private costoOpOtrosImpr2!: number;
  public getCostoOpOtrosImpr2(): number {
    return this.costoOpOtrosImpr2;
  }
  public setCostoOpOtrosImpr2(value: number) {
    this.costoOpOtrosImpr2 = value;
  }
  private costoOpTotalGasto!: number;
  public getCostoOpTotalGasto(): number {
    return this.costoOpTotalGasto;
  }
  public setCostoOpTotalGasto(value: number) {
    this.costoOpTotalGasto = value;
  }
}
