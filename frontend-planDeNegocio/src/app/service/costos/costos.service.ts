import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  constructor() { }
  private costosDirEne!: string;
  public getCostosDirEne(): string {
    return this.costosDirEne;
  }
  public setCostosDirEne(value: string) {
    this.costosDirEne = value;
  }
  private costosDirFeb!: string;
  public getCostosDirFeb(): string {
    return this.costosDirFeb;
  }
  public setCostosDirFeb(value: string) {
    this.costosDirFeb = value;
  }
  private costosDirMar!: string;
  public getCostosDirMar(): string {
    return this.costosDirMar;
  }
  public setCostosDirMar(value: string) {
    this.costosDirMar = value;
  }
  private costosDirAbr!: string;
  public getCostosDirAbr(): string {
    return this.costosDirAbr;
  }
  public setCostosDirAbr(value: string) {
    this.costosDirAbr = value;
  }
  private costosDirMay!: string;
  public getCostosDirMay(): string {
    return this.costosDirMay;
  }
  public setCostosDirMay(value: string) {
    this.costosDirMay = value;
  }
  private costosDirJun!: string;
  public getCostosDirJun(): string {
    return this.costosDirJun;
  }
  public setCostosDirJun(value: string) {
    this.costosDirJun = value;
  }
  private costosDirJul!: string;
  public getCostosDirJul(): string {
    return this.costosDirJul;
  }
  public setCostosDirJul(value: string) {
    this.costosDirJul = value;
  }
  private costosDirAgo!: string;
  public getCostosDirAgo(): string {
    return this.costosDirAgo;
  }
  public setCostosDirAgo(value: string) {
    this.costosDirAgo = value;
  }
  private costosDirSep!: string;
  public getCostosDirSep(): string {
    return this.costosDirSep;
  }
  public setCostosDirSep(value: string) {
    this.costosDirSep = value;
  }
  private costosDirOct!: string;
  public getCostosDirOct(): string {
    return this.costosDirOct;
  }
  public setCostosDirOct(value: string) {
    this.costosDirOct = value;
  }
  private costosDirNov!: string;
  public getCostosDirNov(): string {
    return this.costosDirNov;
  }
  public setCostosDirNov(value: string) {
    this.costosDirNov = value;
  }
  private costosDirDic!: string;
  public getCostosDirDic(): string {
    return this.costosDirDic;
  }
  public setCostosDirDic(value: string) {
    this.costosDirDic = value;
  }

  private costosDirEneVM!: number;
  public getCostosDirEneVM(): number {
    return this.costosDirEneVM;
  }
  public setCostosDirEneVM(value: number) {
    this.costosDirEneVM = value;
  }
  private costosDirFebVM!: number;
  public getCostosDirFebVM(): number {
    return this.costosDirFebVM;
  }
  public setCostosDirFebVM(value: number) {
    this.costosDirFebVM = value;
  }
  private costosDirMarVM!: number;
  public getCostosDirMarVM(): number {
    return this.costosDirMarVM;
  }
  public setCostosDirMarVM(value: number) {
    this.costosDirMarVM = value;
  }
  private costosDirAbrVM!: number;
  public getCostosDirAbrVM(): number {
    return this.costosDirAbrVM;
  }
  public setCostosDirAbrVM(value: number) {
    this.costosDirAbrVM = value;
  }
  private costosDirMayVM!: number;
  public getCostosDirMayVM(): number {
    return this.costosDirMayVM;
  }
  public setCostosDirMayVM(value: number) {
    this.costosDirMayVM = value;
  }
  private costosDirJunVM!: number;
  public getCostosDirJunVM(): number {
    return this.costosDirJunVM;
  }
  public setCostosDirJunVM(value: number) {
    this.costosDirJunVM = value;
  }
  private costosDirJulVM!: number;
  public getCostosDirJulVM(): number {
    return this.costosDirJulVM;
  }
  public setCostosDirJulVM(value: number) {
    this.costosDirJulVM = value;
  }
  private costosDirAgoVM!: number;
  public getCostosDirAgoVM(): number {
    return this.costosDirAgoVM;
  }
  public setCostosDirAgoVM(value: number) {
    this.costosDirAgoVM = value;
  }
  private costosDirSepVM!: number;
  public getCostosDirSepVM(): number {
    return this.costosDirSepVM;
  }
  public setCostosDirSepVM(value: number) {
    this.costosDirSepVM = value;
  }
  private costosDirOctVM!: number;
  public getCostosDirOctVM(): number {
    return this.costosDirOctVM;
  }
  public setCostosDirOctVM(value: number) {
    this.costosDirOctVM = value;
  }
  private costosDirNovVM!: number;
  public getCostosDirNovVM(): number {
    return this.costosDirNovVM;
  }
  public setCostosDirNovVM(value: number) {
    this.costosDirNovVM = value;
  }
  private costosDirDicVM!: number;
  public getCostosDirDicVM(): number {
    return this.costosDirDicVM;
  }
  public setCostosDirDicVM(value: number) {
    this.costosDirDicVM = value;
  }

  private costosDirEneCPM!: number;
  public getCostosDirEneCPM(): number {
    return this.costosDirEneCPM;
  }
  public setCostosDirEneCPM(value: number) {
    this.costosDirEneCPM = value;
  }
  private costosDirFebCPM!: number;
  public getCostosDirFebCPM(): number {
    return this.costosDirFebCPM;
  }
  public setCostosDirFebCPM(value: number) {
    this.costosDirFebCPM = value;
  }
  private costosDirMarCPM!: number;
  public getCostosDirMarCPM(): number {
    return this.costosDirMarCPM;
  }
  public setCostosDirMarCPM(value: number) {
    this.costosDirMarCPM = value;
  }
  private costosDirAbrCPM!: number;
  public getCostosDirAbrCPM(): number {
    return this.costosDirAbrCPM;
  }
  public setCostosDirAbrCPM(value: number) {
    this.costosDirAbrCPM = value;
  }
  private costosDirMayCPM!: number;
  public getCostosDirMayCPM(): number {
    return this.costosDirMayCPM;
  }
  public setCostosDirMayCPM(value: number) {
    this.costosDirMayCPM = value;
  }
  private costosDirJunCPM!: number;
  public getCostosDirJunCPM(): number {
    return this.costosDirJunCPM;
  }
  public setCostosDirJunCPM(value: number) {
    this.costosDirJunCPM = value;
  }
  private costosDirJulCPM!: number;
  public getCostosDirJulCPM(): number {
    return this.costosDirJulCPM;
  }
  public setCostosDirJulCPM(value: number) {
    this.costosDirJulCPM = value;
  }
  private costosDirAgoCPM!: number;
  public getCostosDirAgoCPM(): number {
    return this.costosDirAgoCPM;
  }
  public setCostosDirAgoCPM(value: number) {
    this.costosDirAgoCPM = value;
  }
  private costosDirSepCPM!: number;
  public getCostosDirSepCPM(): number {
    return this.costosDirSepCPM;
  }
  public setCostosDirSepCPM(value: number) {
    this.costosDirSepCPM = value;
  }
  private costosDirOctCPM!: number;
  public getCostosDirOctCPM(): number {
    return this.costosDirOctCPM;
  }
  public setCostosDirOctCPM(value: number) {
    this.costosDirOctCPM = value;
  }
  private costosDirNovCPM!: number;
  public getCostosDirNovCPM(): number {
    return this.costosDirNovCPM;
  }
  public setCostosDirNovCPM(value: number) {
    this.costosDirNovCPM = value;
  }
  private costosDirDicCPM!: number;
  public getCostosDirDicCPM(): number {
    return this.costosDirDicCPM;
  }
  public setCostosDirDicCPM(value: number) {
    this.costosDirDicCPM = value;
  }

  private costosDirAnualVM!: number;
  public getCostosDirAnualVM(): number {
    return this.costosDirAnualVM;
  }
  public setCostosDirAnualVM(value: number) {
    this.costosDirAnualVM = value;
  }
  private costosDirAnualCPM!: number;
  public getCostosDirAnualCPM(): number {
    return this.costosDirAnualCPM;
  }
  public setCostosDirAnualCPM(value: number) {
    this.costosDirAnualCPM = value;
  }

  //Precio C
  private costosDirPrecioC1!: number;
  public getCostosDirPrecioC1(): number {
    return this.costosDirPrecioC1;
  }
  public setCostosDirPrecioC1(value: number) {
    this.costosDirPrecioC1 = value;
  }
  private costosDirPrecioC2!: number;
  public getCostosDirPrecioC2(): number {
    return this.costosDirPrecioC2;
  }
  public setCostosDirPrecioC2(value: number) {
    this.costosDirPrecioC2 = value;
  }
  private costosDirPrecioC3!: number;
  public getCostosDirPrecioC3(): number {
    return this.costosDirPrecioC3;
  }
  public setCostosDirPrecioC3(value: number) {
    this.costosDirPrecioC3 = value;
  }
  private costosDirPrecioC4!: number;
  public getCostosDirPrecioC4(): number {
    return this.costosDirPrecioC4;
  }
  public setCostosDirPrecioC4(value: number) {
    this.costosDirPrecioC4 = value;
  }

  //Precio V
  private costosDirPrecioV1!: number;
  public getCostosDirPrecioV1(): number {
    return this.costosDirPrecioV1;
  }
  public setCostosDirPrecioV1(value: number) {
    this.costosDirPrecioV1 = value;
  }
  private costosDirPrecioV2!: number;
  public getCostosDirPrecioV2(): number {
    return this.costosDirPrecioV2;
  }
  public setCostosDirPrecioV2(value: number) {
    this.costosDirPrecioV2 = value;
  }
  private costosDirPrecioV3!: number;
  public getCostosDirPrecioV3(): number {
    return this.costosDirPrecioV3;
  }
  public setCostosDirPrecioV3(value: number) {
    this.costosDirPrecioV3 = value;
  }
  private costosDirPrecioV4!: number;
  public getCostosDirPrecioV4(): number {
    return this.costosDirPrecioV4;
  }
  public setCostosDirPrecioV4(value: number) {
    this.costosDirPrecioV4 = value;
  }

  //Total Compra Mensual
  private costosDirTotalCM1!: number;
  public getCostosDirTotalCM1(): number {
    return this.costosDirTotalCM1;
  }
  public setCostosDirTotalCM1(value: number) {
    this.costosDirTotalCM1 = value;
  }
  private costosDirTotalCM2!: number;
  public getCostosDirTotalCM2(): number {
    return this.costosDirTotalCM2;
  }
  public setCostosDirTotalCM2(value: number) {
    this.costosDirTotalCM2 = value;
  }
  private costosDirTotalCM3!: number;
  public getCostosDirTotalCM3(): number {
    return this.costosDirTotalCM3;
  }
  public setCostosDirTotalCM3(value: number) {
    this.costosDirTotalCM3 = value;
  }
  private costosDirTotalCM4!: number;
  public getCostosDirTotalCM4(): number {
    return this.costosDirTotalCM4;
  }
  public setCostosDirTotalCM4(value: number) {
    this.costosDirTotalCM4 = value;
  }
  private costosDirTotalCMT!: number;
  public getCostosDirTotalCMT(): number {
    return this.costosDirTotalCMT;
  }
  public setCostosDirTotalCMT(value: number) {
    this.costosDirTotalCMT = value;
  }
  //Total venta mensual
  private costosDirTotalVM1!: number;
  public getCostosDirTotalVM1(): number {
    return this.costosDirTotalVM1;
  }
  public setCostosDirTotalVM1(value: number) {
    this.costosDirTotalVM1 = value;
  }
  private costosDirTotalVM2!: number;
  public getCostosDirTotalVM2(): number {
    return this.costosDirTotalVM2;
  }
  public setCostosDirTotalVM2(value: number) {
    this.costosDirTotalVM2 = value;
  }
  private costosDirTotalVM3!: number;
  public getCostosDirTotalVM3(): number {
    return this.costosDirTotalVM3;
  }
  public setCostosDirTotalVM3(value: number) {
    this.costosDirTotalVM3 = value;
  }
  private costosDirTotalVM4!: number;
  public getCostosDirTotalVM4(): number {
    return this.costosDirTotalVM4;
  }
  public setCostosDirTotalVM4(value: number) {
    this.costosDirTotalVM4 = value;
  }
  private costosDirTotalVMT!: number;
  public getCostosDirTotalVMT(): number {
    return this.costosDirTotalVMT;
  }
  public setCostosDirTotalVMT(value: number) {
    this.costosDirTotalVMT = value;
  }

  //Mub
  private costosDirMub1!: number;
  public getCostosDirMub1(): number {
    return this.costosDirMub1;
  }
  public setCostosDirMub1(value: number) {
    this.costosDirMub1 = value;
  }
  private costosDirMub2!: number;
  public getCostosDirMub2(): number {
    return this.costosDirMub2;
  }
  public setCostosDirMub2(value: number) {
    this.costosDirMub2 = value;
  }
  private costosDirMub3!: number;
  public getCostosDirMub3(): number {
    return this.costosDirMub3;
  }
  public setCostosDirMub3(value: number) {
    this.costosDirMub3 = value;
  }
  private costosDirMub4!: number;
  public getCostosDirMub4(): number {
    return this.costosDirMub4;
  }
  public setCostosDirMub4(value: number) {
    this.costosDirMub4 = value;
  }
  private costosDirMubT!: number;
  public getCostosDirMubT(): number {
    return this.costosDirMubT;
  }
  public setCostosDirMubT(value: number) {
    this.costosDirMubT = value;
  }

  //primera tabla de costos
  private costosDirProdOServ1!: string;
  public getCostosDirProdOServ1(): string {
    return this.costosDirProdOServ1;
  }
  public setCostosDirProdOServ1(value: string) {
    this.costosDirProdOServ1 = value;
  }
  private costosDirProdOServ2!: string;
  public getCostosDirProdOServ2(): string {
    return this.costosDirProdOServ2;
  }
  public setCostosDirProdOServ2(value: string) {
    this.costosDirProdOServ2 = value;
  }
  private costosDirProdOServ3!: string;
  public getCostosDirProdOServ3(): string {
    return this.costosDirProdOServ3;
  }
  public setCostosDirProdOServ3(value: string) {
    this.costosDirProdOServ3 = value;
  }
  private costosDirProdOServ4!: string;
  public getCostosDirProdOServ4(): string {
    return this.costosDirProdOServ4;
  }
  public setCostosDirProdOServ4(value: string) {
    this.costosDirProdOServ4 = value;
  }

  private costosDirUndMedida1!: string;
  public getCostosDirUndMedida1(): string {
    return this.costosDirUndMedida1;
  }
  public setCostosDirUndMedida1(value: string) {
    this.costosDirUndMedida1 = value;
  }
  private costosDirUndMedida2!: string;
  public getCostosDirUndMedida2(): string {
    return this.costosDirUndMedida2;
  }
  public setCostosDirUndMedida2(value: string) {
    this.costosDirUndMedida2 = value;
  }
  private costosDirUndMedida3!: string;
  public getCostosDirUndMedida3(): string {
    return this.costosDirUndMedida3;
  }
  public setCostosDirUndMedida3(value: string) {
    this.costosDirUndMedida3 = value;
  }
  private costosDirUndMedida4!: string;
  public getCostosDirUndMedida4(): string {
    return this.costosDirUndMedida4;
  }
  public setCostosDirUndMedida4(value: string) {
    this.costosDirUndMedida4 = value;
  }

  private costosDirInsumo11!: string;
  public getCostosDirInsumo11(): string {
    return this.costosDirInsumo11;
  }
  public setCostosDirInsumo11(value: string) {
    this.costosDirInsumo11 = value;
  }
  private costosDirInsumo12!: string;
  public getCostosDirInsumo12(): string {
    return this.costosDirInsumo12;
  }
  public setCostosDirInsumo12(value: string) {
    this.costosDirInsumo12 = value;
  }
  private costosDirInsumo13!: string;
  public getCostosDirInsumo13(): string {
    return this.costosDirInsumo13;
  }
  public setCostosDirInsumo13(value: string) {
    this.costosDirInsumo13 = value;
  }
  private costosDirInsumo14!: string;
  public getCostosDirInsumo14(): string {
    return this.costosDirInsumo14;
  }
  public setCostosDirInsumo14(value: string) {
    this.costosDirInsumo14 = value;
  }
  private costosDirInsumo15!: string;
  public getCostosDirInsumo15(): string {
    return this.costosDirInsumo15;
  }
  public setCostosDirInsumo15(value: string) {
    this.costosDirInsumo15 = value;
  }
  private costosDirInsumo16!: string;
  public getCostosDirInsumo16(): string {
    return this.costosDirInsumo16;
  }
  public setCostosDirInsumo16(value: string) {
    this.costosDirInsumo16 = value;
  }
  private costosDirInsumo17!: string;
  public getCostosDirInsumo17(): string {
    return this.costosDirInsumo17;
  }
  public setCostosDirInsumo17(value: string) {
    this.costosDirInsumo17 = value;
  }
  private costosDirInsumo18!: string;
  public getCostosDirInsumo18(): string {
    return this.costosDirInsumo18;
  }
  public setCostosDirInsumo18(value: string) {
    this.costosDirInsumo18 = value;
  }

  private costosDirInsumo21!: string;
  public getCostosDirInsumo21(): string {
    return this.costosDirInsumo21;
  }
  public setCostosDirInsumo21(value: string) {
    this.costosDirInsumo21 = value;
  }
  private costosDirInsumo22!: string;
  public getCostosDirInsumo22(): string {
    return this.costosDirInsumo22;
  }
  public setCostosDirInsumo22(value: string) {
    this.costosDirInsumo22 = value;
  }
  private costosDirInsumo23!: string;
  public getCostosDirInsumo23(): string {
    return this.costosDirInsumo23;
  }
  public setCostosDirInsumo23(value: string) {
    this.costosDirInsumo23 = value;
  }
  private costosDirInsumo24!: string;
  public getCostosDirInsumo24(): string {
    return this.costosDirInsumo24;
  }
  public setCostosDirInsumo24(value: string) {
    this.costosDirInsumo24 = value;
  }
  private costosDirInsumo25!: string;
  public getCostosDirInsumo25(): string {
    return this.costosDirInsumo25;
  }
  public setCostosDirInsumo25(value: string) {
    this.costosDirInsumo25 = value;
  }
  private costosDirInsumo26!: string;
  public getCostosDirInsumo26(): string {
    return this.costosDirInsumo26;
  }
  public setCostosDirInsumo26(value: string) {
    this.costosDirInsumo26 = value;
  }
  private costosDirInsumo27!: string;
  public getCostosDirInsumo27(): string {
    return this.costosDirInsumo27;
  }
  public setCostosDirInsumo27(value: string) {
    this.costosDirInsumo27 = value;
  }
  private costosDirInsumo28!: string;
  public getCostosDirInsumo28(): string {
    return this.costosDirInsumo28;
  }
  public setCostosDirInsumo28(value: string) {
    this.costosDirInsumo28 = value;
  }

  private costosDirInsumo31!: string;
  public getCostosDirInsumo31(): string {
    return this.costosDirInsumo31;
  }
  public setCostosDirInsumo31(value: string) {
    this.costosDirInsumo31 = value;
  }
  private costosDirInsumo32!: string;
  public getCostosDirInsumo32(): string {
    return this.costosDirInsumo32;
  }
  public setCostosDirInsumo32(value: string) {
    this.costosDirInsumo32 = value;
  }
  private costosDirInsumo33!: string;
  public getCostosDirInsumo33(): string {
    return this.costosDirInsumo33;
  }
  public setCostosDirInsumo33(value: string) {
    this.costosDirInsumo33 = value;
  }
  private costosDirInsumo34!: string;
  public getCostosDirInsumo34(): string {
    return this.costosDirInsumo34;
  }
  public setCostosDirInsumo34(value: string) {
    this.costosDirInsumo34 = value;
  }
  private costosDirInsumo35!: string;
  public getCostosDirInsumo35(): string {
    return this.costosDirInsumo35;
  }
  public setCostosDirInsumo35(value: string) {
    this.costosDirInsumo35 = value;
  }
  private costosDirInsumo36!: string;
  public getCostosDirInsumo36(): string {
    return this.costosDirInsumo36;
  }
  public setCostosDirInsumo36(value: string) {
    this.costosDirInsumo36 = value;
  }
  private costosDirInsumo37!: string;
  public getCostosDirInsumo37(): string {
    return this.costosDirInsumo37;
  }
  public setCostosDirInsumo37(value: string) {
    this.costosDirInsumo37 = value;
  }
  private costosDirInsumo38!: string;
  public getCostosDirInsumo38(): string {
    return this.costosDirInsumo38;
  }
  public setCostosDirInsumo38(value: string) {
    this.costosDirInsumo38 = value;
  }

  private costosDirInsumo41!: string;
  public getCostosDirInsumo41(): string {
    return this.costosDirInsumo41;
  }
  public setCostosDirInsumo41(value: string) {
    this.costosDirInsumo41 = value;
  }
  private costosDirInsumo42!: string;
  public getCostosDirInsumo42(): string {
    return this.costosDirInsumo42;
  }
  public setCostosDirInsumo42(value: string) {
    this.costosDirInsumo42 = value;
  }
  private costosDirInsumo43!: string;
  public getCostosDirInsumo43(): string {
    return this.costosDirInsumo43;
  }
  public setCostosDirInsumo43(value: string) {
    this.costosDirInsumo43 = value;
  }
  private costosDirInsumo44!: string;
  public getCostosDirInsumo44(): string {
    return this.costosDirInsumo44;
  }
  public setCostosDirInsumo44(value: string) {
    this.costosDirInsumo44 = value;
  }
  private costosDirInsumo45!: string;
  public getCostosDirInsumo45(): string {
    return this.costosDirInsumo45;
  }
  public setCostosDirInsumo45(value: string) {
    this.costosDirInsumo45 = value;
  }
  private costosDirInsumo46!: string;
  public getCostosDirInsumo46(): string {
    return this.costosDirInsumo46;
  }
  public setCostosDirInsumo46(value: string) {
    this.costosDirInsumo46 = value;
  }
  private costosDirInsumo47!: string;
  public getCostosDirInsumo47(): string {
    return this.costosDirInsumo47;
  }
  public setCostosDirInsumo47(value: string) {
    this.costosDirInsumo47 = value;
  }
  private costosDirInsumo48!: string;
  public getCostosDirInsumo48(): string {
    return this.costosDirInsumo48;
  }
  public setCostosDirInsumo48(value: string) {
    this.costosDirInsumo48 = value;
  }

  private costosDirCantidad11!: number;
  public getCostosDirCantidad11(): number {
    return this.costosDirCantidad11;
  }
  public setCostosDirCantidad11(value: number) {
    this.costosDirCantidad11 = value;
  }
  private costosDirCantidad12!: number;
  public getCostosDirCantidad12(): number {
    return this.costosDirCantidad12;
  }
  public setCostosDirCantidad12(value: number) {
    this.costosDirCantidad12 = value;
  }
  private costosDirCantidad13!: number;
  public getCostosDirCantidad13(): number {
    return this.costosDirCantidad13;
  }
  public setCostosDirCantidad13(value: number) {
    this.costosDirCantidad13 = value;
  }
  private costosDirCantidad14!: number;
  public getCostosDirCantidad14(): number {
    return this.costosDirCantidad14;
  }
  public setCostosDirCantidad14(value: number) {
    this.costosDirCantidad14 = value;
  }
  private costosDirCantidad15!: number;
  public getCostosDirCantidad15(): number {
    return this.costosDirCantidad15;
  }
  public setCostosDirCantidad15(value: number) {
    this.costosDirCantidad15 = value;
  }
  private costosDirCantidad16!: number;
  public getCostosDirCantidad16(): number {
    return this.costosDirCantidad16;
  }
  public setCostosDirCantidad16(value: number) {
    this.costosDirCantidad16 = value;
  }
  private costosDirCantidad17!: number;
  public getCostosDirCantidad17(): number {
    return this.costosDirCantidad17;
  }
  public setCostosDirCantidad17(value: number) {
    this.costosDirCantidad17 = value;
  }
  private costosDirCantidad18!: number;
  public getCostosDirCantidad18(): number {
    return this.costosDirCantidad18;
  }
  public setCostosDirCantidad18(value: number) {
    this.costosDirCantidad18 = value;
  }

  private costosDirCantidad21!: number;
  public getCostosDirCantidad21(): number {
    return this.costosDirCantidad21;
  }
  public setCostosDirCantidad21(value: number) {
    this.costosDirCantidad21 = value;
  }
  private costosDirCantidad22!: number;
  public getCostosDirCantidad22(): number {
    return this.costosDirCantidad22;
  }
  public setCostosDirCantidad22(value: number) {
    this.costosDirCantidad22 = value;
  }
  private costosDirCantidad23!: number;
  public getCostosDirCantidad23(): number {
    return this.costosDirCantidad23;
  }
  public setCostosDirCantidad23(value: number) {
    this.costosDirCantidad23 = value;
  }
  private costosDirCantidad24!: number;
  public getCostosDirCantidad24(): number {
    return this.costosDirCantidad24;
  }
  public setCostosDirCantidad24(value: number) {
    this.costosDirCantidad24 = value;
  }
  private costosDirCantidad25!: number;
  public getCostosDirCantidad25(): number {
    return this.costosDirCantidad25;
  }
  public setCostosDirCantidad25(value: number) {
    this.costosDirCantidad25 = value;
  }
  private costosDirCantidad26!: number;
  public getCostosDirCantidad26(): number {
    return this.costosDirCantidad26;
  }
  public setCostosDirCantidad26(value: number) {
    this.costosDirCantidad26 = value;
  }
  private costosDirCantidad27!: number;
  public getCostosDirCantidad27(): number {
    return this.costosDirCantidad27;
  }
  public setCostosDirCantidad27(value: number) {
    this.costosDirCantidad27 = value;
  }
  private costosDirCantidad28!: number;
  public getCostosDirCantidad28(): number {
    return this.costosDirCantidad28;
  }
  public setCostosDirCantidad28(value: number) {
    this.costosDirCantidad28 = value;
  }

  private costosDirCantidad31!: number;
  public getCostosDirCantidad31(): number {
    return this.costosDirCantidad31;
  }
  public setCostosDirCantidad31(value: number) {
    this.costosDirCantidad31 = value;
  }
  private costosDirCantidad32!: number;
  public getCostosDirCantidad32(): number {
    return this.costosDirCantidad32;
  }
  public setCostosDirCantidad32(value: number) {
    this.costosDirCantidad32 = value;
  }
  private costosDirCantidad33!: number;
  public getCostosDirCantidad33(): number {
    return this.costosDirCantidad33;
  }
  public setCostosDirCantidad33(value: number) {
    this.costosDirCantidad33 = value;
  }
  private costosDirCantidad34!: number;
  public getCostosDirCantidad34(): number {
    return this.costosDirCantidad34;
  }
  public setCostosDirCantidad34(value: number) {
    this.costosDirCantidad34 = value;
  }
  private costosDirCantidad35!: number;
  public getCostosDirCantidad35(): number {
    return this.costosDirCantidad35;
  }
  public setCostosDirCantidad35(value: number) {
    this.costosDirCantidad35 = value;
  }
  private costosDirCantidad36!: number;
  public getCostosDirCantidad36(): number {
    return this.costosDirCantidad36;
  }
  public setCostosDirCantidad36(value: number) {
    this.costosDirCantidad36 = value;
  }
  private costosDirCantidad37!: number;
  public getCostosDirCantidad37(): number {
    return this.costosDirCantidad37;
  }
  public setCostosDirCantidad37(value: number) {
    this.costosDirCantidad37 = value;
  }
  private costosDirCantidad38!: number;
  public getCostosDirCantidad38(): number {
    return this.costosDirCantidad38;
  }
  public setCostosDirCantidad38(value: number) {
    this.costosDirCantidad38 = value;
  }

  private costosDirCantidad41!: number;
  public getCostosDirCantidad41(): number {
    return this.costosDirCantidad41;
  }
  public setCostosDirCantidad41(value: number) {
    this.costosDirCantidad41 = value;
  }
  private costosDirCantidad42!: number;
  public getCostosDirCantidad42(): number {
    return this.costosDirCantidad42;
  }
  public setCostosDirCantidad42(value: number) {
    this.costosDirCantidad42 = value;
  }
  private costosDirCantidad43!: number;
  public getCostosDirCantidad43(): number {
    return this.costosDirCantidad43;
  }
  public setCostosDirCantidad43(value: number) {
    this.costosDirCantidad43 = value;
  }
  private costosDirCantidad44!: number;
  public getCostosDirCantidad44(): number {
    return this.costosDirCantidad44;
  }
  public setCostosDirCantidad44(value: number) {
    this.costosDirCantidad44 = value;
  }
  private costosDirCantidad45!: number;
  public getCostosDirCantidad45(): number {
    return this.costosDirCantidad45;
  }
  public setCostosDirCantidad45(value: number) {
    this.costosDirCantidad45 = value;
  }
  private costosDirCantidad46!: number;
  public getCostosDirCantidad46(): number {
    return this.costosDirCantidad46;
  }
  public setCostosDirCantidad46(value: number) {
    this.costosDirCantidad46 = value;
  }
  private costosDirCantidad47!: number;
  public getCostosDirCantidad47(): number {
    return this.costosDirCantidad47;
  }
  public seTCostosDirCantidad47(value: number) {
    this.costosDirCantidad47 = value;
  }
  private costosDirCantidad48!: number;
  public getCostosDirCantidad48(): number {
    return this.costosDirCantidad48;
  }
  public setCostosDirCantidad48(value: number) {
    this.costosDirCantidad48 = value;
  }

  private costosDirUnidad11!: string;
  public getCostosDirUnidad11(): string {
    return this.costosDirUnidad11;
  }
  public setCostosDirUnidad11(value: string) {
    this.costosDirUnidad11 = value;
  }
  private costosDirUnidad12!: string;
  public getCostosDirUnidad12(): string {
    return this.costosDirUnidad12;
  }
  public setCostosDirUnidad12(value: string) {
    this.costosDirUnidad12 = value;
  }
  private costosDirUnidad13!: string;
  public getCostosDirUnidad13(): string {
    return this.costosDirUnidad13;
  }
  public setCostosDirUnidad13(value: string) {
    this.costosDirUnidad13 = value;
  }
  private costosDirUnidad14!: string;
  public getCostosDirUnidad14(): string {
    return this.costosDirUnidad14;
  }
  public setCostosDirUnidad14(value: string) {
    this.costosDirUnidad14 = value;
  }
  private costosDirUnidad15!: string;
  public getCostosDirUnidad15(): string {
    return this.costosDirUnidad15;
  }
  public setCostosDirUnidad15(value: string) {
    this.costosDirUnidad15 = value;
  }
  private costosDirUnidad16!: string;
  public getCostosDirUnidad16(): string {
    return this.costosDirUnidad16;
  }
  public setCostosDirUnidad16(value: string) {
    this.costosDirUnidad16 = value;
  }
  private costosDirUnidad17!: string;
  public getCostosDirUnidad17(): string {
    return this.costosDirUnidad17;
  }
  public setCostosDirUnidad17(value: string) {
    this.costosDirUnidad17 = value;
  }
  private costosDirUnidad18!: string;
  public getCostosDirUnidad18(): string {
    return this.costosDirUnidad18;
  }
  public setCostosDirUnidad18(value: string) {
    this.costosDirUnidad18 = value;
  }

  private costosDirUnidad21!: string;
  public getCostosDirUnidad21(): string {
    return this.costosDirUnidad21;
  }
  public setCostosDirUnidad21(value: string) {
    this.costosDirUnidad21 = value;
  }
  private costosDirUnidad22!: string;
  public getCostosDirUnidad22(): string {
    return this.costosDirUnidad22;
  }
  public setCostosDirUnidad22(value: string) {
    this.costosDirUnidad22 = value;
  }
  private costosDirUnidad23!: string;
  public getCostosDirUnidad23(): string {
    return this.costosDirUnidad23;
  }
  public setCostosDirUnidad23(value: string) {
    this.costosDirUnidad23 = value;
  }
  private costosDirUnidad24!: string;
  public getCostosDirUnidad24(): string {
    return this.costosDirUnidad24;
  }
  public setCostosDirUnidad24(value: string) {
    this.costosDirUnidad24 = value;
  }
  private costosDirUnidad25!: string;
  public getCostosDirUnidad25(): string {
    return this.costosDirUnidad25;
  }
  public setCostosDirUnidad25(value: string) {
    this.costosDirUnidad25 = value;
  }
  private costosDirUnidad26!: string;
  public getCostosDirUnidad26(): string {
    return this.costosDirUnidad26;
  }
  public setCostosDirUnidad26(value: string) {
    this.costosDirUnidad26 = value;
  }
  private costosDirUnidad27!: string;
  public getCostosDirUnidad27(): string {
    return this.costosDirUnidad27;
  }
  public setCostosDirUnidad27(value: string) {
    this.costosDirUnidad27 = value;
  }
  private costosDirUnidad28!: string;
  public getCostosDirUnidad28(): string {
    return this.costosDirUnidad28;
  }
  public setCostosDirUnidad28(value: string) {
    this.costosDirUnidad28 = value;
  }

  private costosDirUnidad31!: string;
  public getCostosDirUnidad31(): string {
    return this.costosDirUnidad31;
  }
  public setCostosDirUnidad31(value: string) {
    this.costosDirUnidad31 = value;
  }
  private costosDirUnidad32!: string;
  public getCostosDirUnidad32(): string {
    return this.costosDirUnidad32;
  }
  public setCostosDirUnidad32(value: string) {
    this.costosDirUnidad32 = value;
  }
  private costosDirUnidad33!: string;
  public getCostosDirUnidad33(): string {
    return this.costosDirUnidad33;
  }
  public setCostosDirUnidad33(value: string) {
    this.costosDirUnidad33 = value;
  }
  private costosDirUnidad34!: string;
  public getCostosDirUnidad34(): string {
    return this.costosDirUnidad34;
  }
  public setCostosDirUnidad34(value: string) {
    this.costosDirUnidad34 = value;
  }
  private costosDirUnidad35!: string;
  public getCostosDirUnidad35(): string {
    return this.costosDirUnidad35;
  }
  public setCostosDirUnidad35(value: string) {
    this.costosDirUnidad35 = value;
  }
  private costosDirUnidad36!: string;
  public getCostosDirUnidad36(): string {
    return this.costosDirUnidad36;
  }
  public setCostosDirUnidad36(value: string) {
    this.costosDirUnidad36 = value;
  }
  private costosDirUnidad37!: string;
  public getCostosDirUnidad37(): string {
    return this.costosDirUnidad37;
  }
  public setCostosDirUnidad37(value: string) {
    this.costosDirUnidad37 = value;
  }
  private costosDirUnidad38!: string;
  public getCostosDirUnidad38(): string {
    return this.costosDirUnidad38;
  }
  public setCostosDirUnidad38(value: string) {
    this.costosDirUnidad38 = value;
  }

  private costosDirUnidad41!: string;
  public getCostosDirUnidad41(): string {
    return this.costosDirUnidad41;
  }
  public setCostosDirUnidad41(value: string) {
    this.costosDirUnidad41 = value;
  }
  private costosDirUnidad42!: string;
  public getCostosDirUnidad42(): string {
    return this.costosDirUnidad42;
  }
  public setCostosDirUnidad42(value: string) {
    this.costosDirUnidad42 = value;
  }
  private costosDirUnidad43!: string;
  public getCostosDirUnidad43(): string {
    return this.costosDirUnidad43;
  }
  public setCostosDirUnidad43(value: string) {
    this.costosDirUnidad43 = value;
  }
  private costosDirUnidad44!: string;
  public getCostosDirUnidad44(): string {
    return this.costosDirUnidad44;
  }
  public setCostosDirUnidad44(value: string) {
    this.costosDirUnidad44 = value;
  }
  private costosDirUnidad45!: string;
  public getCostosDirUnidad45(): string {
    return this.costosDirUnidad45;
  }
  public setCostosDirUnidad45(value: string) {
    this.costosDirUnidad45 = value;
  }
  private costosDirUnidad46!: string;
  public getCostosDirUnidad46(): string {
    return this.costosDirUnidad46;
  }
  public setCostosDirUnidad46(value: string) {
    this.costosDirUnidad46 = value;
  }
  private costosDirUnidad47!: string;
  public getCostosDirUnidad47(): string {
    return this.costosDirUnidad47;
  }
  public setCostosDirUnidad47(value: string) {
    this.costosDirUnidad47 = value;
  }
  private costosDirUnidad48!: string;
  public getCostosDirUnidad48(): string {
    return this.costosDirUnidad48;
  }
  public setCostosDirUnidad48(value: string) {
    this.costosDirUnidad48 = value;
  }

  private costosDirUnPS11!: number;
  public getCostosDirUnPS11(): number {
    return this.costosDirUnPS11;
  }
  public setCostosDirUnPS11(value: number) {
    this.costosDirUnPS11 = value;
  }
  private costosDirUnPS12!: number;
  public getCostosDirUnPS12(): number {
    return this.costosDirUnPS12;
  }
  public setCostosDirUnPS12(value: number) {
    this.costosDirUnPS12 = value;
  }
  private costosDirUnPS13!: number;
  public getCostosDirUnPS13(): number {
    return this.costosDirUnPS13;
  }
  public setCostosDirUnPS13(value: number) {
    this.costosDirUnPS13 = value;
  }
  private costosDirUnPS14!: number;
  public getCostosDirUnPS14(): number {
    return this.costosDirUnPS14;
  }
  public setCostosDirUnPS14(value: number) {
    this.costosDirUnPS14 = value;
  }
  private costosDirUnPS15!: number;
  public getCostosDirUnPS15(): number {
    return this.costosDirUnPS15;
  }
  public setCostosDirUnPS15(value: number) {
    this.costosDirUnPS15 = value;
  }
  private costosDirUnPS16!: number;
  public getCostosDirUnPS16(): number {
    return this.costosDirUnPS16;
  }
  public setCostosDirUnPS16(value: number) {
    this.costosDirUnPS16 = value;
  }
  private costosDirUnPS17!: number;
  public getCostosDirUnPS17(): number {
    return this.costosDirUnPS17;
  }
  public setCostosDirUnPS17(value: number) {
    this.costosDirUnPS17 = value;
  }
  private costosDirUnPS18!: number;
  public getCostosDirUnPS18(): number {
    return this.costosDirUnPS18;
  }
  public setCostosDirUnPS18(value: number) {
    this.costosDirUnPS18 = value;
  }

  private costosDirUnPS21!: number;
  public getCostosDirUnPS21(): number {
    return this.costosDirUnPS21;
  }
  public setCostosDirUnPS21(value: number) {
    this.costosDirUnPS21 = value;
  }
  private costosDirUnPS22!: number;
  public getCostosDirUnPS22(): number {
    return this.costosDirUnPS22;
  }
  public setCostosDirUnPS22(value: number) {
    this.costosDirUnPS22 = value;
  }
  private costosDirUnPS23!: number;
  public getCostosDirUnPS23(): number {
    return this.costosDirUnPS23;
  }
  public setCostosDirUnPS23(value: number) {
    this.costosDirUnPS23 = value;
  }
  private costosDirUnPS24!: number;
  public getCostosDirUnPS24(): number {
    return this.costosDirUnPS24;
  }
  public setCostosDirUnPS24(value: number) {
    this.costosDirUnPS24 = value;
  }
  private costosDirUnPS25!: number;
  public getCostosDirUnPS25(): number {
    return this.costosDirUnPS25;
  }
  public setCostosDirUnPS25(value: number) {
    this.costosDirUnPS25 = value;
  }
  private costosDirUnPS26!: number;
  public getCostosDirUnPS26(): number {
    return this.costosDirUnPS26;
  }
  public setCostosDirUnPS26(value: number) {
    this.costosDirUnPS26 = value;
  }
  private costosDirUnPS27!: number;
  public getCostosDirUnPS27(): number {
    return this.costosDirUnPS27;
  }
  public setCostosDirUnPS27(value: number) {
    this.costosDirUnPS27 = value;
  }
  private costosDirUnPS28!: number;
  public getCostosDirUnPS28(): number {
    return this.costosDirUnPS28;
  }
  public setCostosDirUnPS28(value: number) {
    this.costosDirUnPS28 = value;
  }

  private costosDirUnPS31!: number;
  public getCostosDirUnPS31(): number {
    return this.costosDirUnPS31;
  }
  public setCostosDirUnPS31(value: number) {
    this.costosDirUnPS31 = value;
  }
  private costosDirUnPS32!: number;
  public getCostosDirUnPS32(): number {
    return this.costosDirUnPS32;
  }
  public setCostosDirUnPS32(value: number) {
    this.costosDirUnPS32 = value;
  }
  private costosDirUnPS33!: number;
  public getCostosDirUnPS33(): number {
    return this.costosDirUnPS33;
  }
  public setCostosDirUnPS33(value: number) {
    this.costosDirUnPS33 = value;
  }
  private costosDirUnPS34!: number;
  public getCostosDirUnPS34(): number {
    return this.costosDirUnPS34;
  }
  public setCostosDirUnPS34(value: number) {
    this.costosDirUnPS34 = value;
  }
  private costosDirUnPS35!: number;
  public getCostosDirUnPS35(): number {
    return this.costosDirUnPS35;
  }
  public setCostosDirUnPS35(value: number) {
    this.costosDirUnPS35 = value;
  }
  private costosDirUnPS36!: number;
  public getCostosDirUnPS36(): number {
    return this.costosDirUnPS36;
  }
  public setCostosDirUnPS36(value: number) {
    this.costosDirUnPS36 = value;
  }
  private costosDirUnPS37!: number;
  public getCostosDirUnPS37(): number {
    return this.costosDirUnPS37;
  }
  public setCostosDirUnPS37(value: number) {
    this.costosDirUnPS37 = value;
  }
  private costosDirUnPS38!: number;
  public getCostosDirUnPS38(): number {
    return this.costosDirUnPS38;
  }
  public setCostosDirUnPS38(value: number) {
    this.costosDirUnPS38 = value;
  }

  private costosDirUnPS41!: number;
  public getCostosDirUnPS41(): number {
    return this.costosDirUnPS41;
  }
  public setCostosDirUnPS41(value: number) {
    this.costosDirUnPS41 = value;
  }
  private costosDirUnPS42!: number;
  public getCostosDirUnPS42(): number {
    return this.costosDirUnPS42;
  }
  public setCostosDirUnPS42(value: number) {
    this.costosDirUnPS42 = value;
  }
  private costosDirUnPS43!: number;
  public getCostosDirUnPS43(): number {
    return this.costosDirUnPS43;
  }
  public setCostosDirUnPS43(value: number) {
    this.costosDirUnPS43 = value;
  }
  private costosDirUnPS44!: number;
  public getCostosDirUnPS44(): number {
    return this.costosDirUnPS44;
  }
  public setCostosDirUnPS44(value: number) {
    this.costosDirUnPS44 = value;
  }
  private costosDirUnPS45!: number;
  public getCostosDirUnPS45(): number {
    return this.costosDirUnPS45;
  }
  public setCostosDirUnPS45(value: number) {
    this.costosDirUnPS45 = value;
  }
  private costosDirUnPS46!: number;
  public getCostosDirUnPS46(): number {
    return this.costosDirUnPS46;
  }
  public setCostosDirUnPS46(value: number) {
    this.costosDirUnPS46 = value;
  }
  private costosDirUnPS47!: number;
  public getCostosDirUnPS47(): number {
    return this.costosDirUnPS47;
  }
  public setCostosDirUnPS47(value: number) {
    this.costosDirUnPS47 = value;
  }
  private costosDirUnPS48!: number;
  public getCostosDirUnPS48(): number {
    return this.costosDirUnPS48;
  }
  public setCostosDirUnPS48(value: number) {
    this.costosDirUnPS48 = value;
  }

  private costosDirPrecioU12!: number;
  public getCostosDirPrecioU12(): number {
    return this.costosDirPrecioU12;
  }
  public setCostosDirPrecioU12(value: number) {
    this.costosDirPrecioU12 = value;
  }
  private costosDirPrecioU13!: number;
  public getCostosDirPrecioU13(): number {
    return this.costosDirPrecioU13;
  }
  public setCostosDirPrecioU13(value: number) {
    this.costosDirPrecioU13 = value;
  }
  private costosDirPrecioU14!: number;
  public getCostosDirPrecioU14(): number {
    return this.costosDirPrecioU14;
  }
  public setCostosDirPrecioU14(value: number) {
    this.costosDirPrecioU14 = value;
  }
  private costosDirPrecioU15!: number;
  public getCostosDirPrecioU15(): number {
    return this.costosDirPrecioU15;
  }
  public setCostosDirPrecioU15(value: number) {
    this.costosDirPrecioU15 = value;
  }
  private costosDirPrecioU16!: number;
  public getCostosDirPrecioU16(): number {
    return this.costosDirPrecioU16;
  }
  public setCostosDirPrecioU16(value: number) {
    this.costosDirPrecioU16 = value;
  }
  private costosDirPrecioU17!: number;
  public getCostosDirPrecioU17(): number {
    return this.costosDirPrecioU17;
  }
  public setCostosDirPrecioU17(value: number) {
    this.costosDirPrecioU17 = value;
  }
  private costosDirPrecioU18!: number;
  public getCostosDirPrecioU18(): number {
    return this.costosDirPrecioU18;
  }
  public setCostosDirPrecioU18(value: number) {
    this.costosDirPrecioU18 = value;
  }
  private costosDirPrecioU19!: number;
  public getCostosDirPrecioU19(): number {
    return this.costosDirPrecioU19;
  }
  public setCostosDirPrecioU19(value: number) {
    this.costosDirPrecioU19 = value;
  }

  private costosDirPrecioU21!: number;
  public getCostosDirPrecioU21(): number {
    return this.costosDirPrecioU21;
  }
  public setCostosDirPrecioU21(value: number) {
    this.costosDirPrecioU21 = value;
  }
  private costosDirPrecioU22!: number;
  public getCostosDirPrecioU22(): number {
    return this.costosDirPrecioU22;
  }
  public setCostosDirPrecioU22(value: number) {
    this.costosDirPrecioU22 = value;
  }
  private costosDirPrecioU23!: number;
  public getCostosDirPrecioU23(): number {
    return this.costosDirPrecioU23;
  }
  public setCostosDirPrecioU23(value: number) {
    this.costosDirPrecioU23 = value;
  }
  private costosDirPrecioU24!: number;
  public getCostosDirPrecioU24(): number {
    return this.costosDirPrecioU24;
  }
  public setCostosDirPrecioU24(value: number) {
    this.costosDirPrecioU24 = value;
  }
  private costosDirPrecioU25!: number;
  public getCostosDirPrecioU25(): number {
    return this.costosDirPrecioU25;
  }
  public setCostosDirPrecioU25(value: number) {
    this.costosDirPrecioU25 = value;
  }
  private costosDirPrecioU26!: number;
  public getCostosDirPrecioU26(): number {
    return this.costosDirPrecioU26;
  }
  public setCostosDirPrecioU26(value: number) {
    this.costosDirPrecioU26 = value;
  }
  private costosDirPrecioU27!: number;
  public getCostosDirPrecioU27(): number {
    return this.costosDirPrecioU27;
  }
  public setCostosDirPrecioU27(value: number) {
    this.costosDirPrecioU27 = value;
  }
  private costosDirPrecioU28!: number;
  public getCostosDirPrecioU28(): number {
    return this.costosDirPrecioU28;
  }
  public setCostosDirPrecioU28(value: number) {
    this.costosDirPrecioU28 = value;
  }

  private costosDirPrecioU31!: number;
  public getCostosDirPrecioU31(): number {
    return this.costosDirPrecioU31;
  }
  public setCostosDirPrecioU31(value: number) {
    this.costosDirPrecioU31 = value;
  }
  private costosDirPrecioU32!: number;
  public getCostosDirPrecioU32(): number {
    return this.costosDirPrecioU32;
  }
  public setCostosDirPrecioU32(value: number) {
    this.costosDirPrecioU32 = value;
  }
  private costosDirPrecioU33!: number;
  public getCostosDirPrecioU33(): number {
    return this.costosDirPrecioU33;
  }
  public setCostosDirPrecioU33(value: number) {
    this.costosDirPrecioU33 = value;
  }
  private costosDirPrecioU34!: number;
  public getCostosDirPrecioU34(): number {
    return this.costosDirPrecioU34;
  }
  public setCostosDirPrecioU34(value: number) {
    this.costosDirPrecioU34 = value;
  }
  private costosDirPrecioU35!: number;
  public getCostosDirPrecioU35(): number {
    return this.costosDirPrecioU35;
  }
  public setCostosDirPrecioU35(value: number) {
    this.costosDirPrecioU35 = value;
  }
  private costosDirPrecioU36!: number;
  public getCostosDirPrecioU36(): number {
    return this.costosDirPrecioU36;
  }
  public setCostosDirPrecioU36(value: number) {
    this.costosDirPrecioU36 = value;
  }
  private costosDirPrecioU37!: number;
  public getCostosDirPrecioU37(): number {
    return this.costosDirPrecioU37;
  }
  public setCostosDirPrecioU37(value: number) {
    this.costosDirPrecioU37 = value;
  }
  private costosDirPrecioU38!: number;
  public getCostosDirPrecioU38(): number {
    return this.costosDirPrecioU38;
  }
  public setCostosDirPrecioU38(value: number) {
    this.costosDirPrecioU38 = value;
  }

  private costosDirPrecioU41!: number;
  public getCostosDirPrecioU41(): number {
    return this.costosDirPrecioU41;
  }
  public setCostosDirPrecioU41(value: number) {
    this.costosDirPrecioU41 = value;
  }
  private costosDirPrecioU42!: number;
  public getCostosDirPrecioU42(): number {
    return this.costosDirPrecioU42;
  }
  public setCostosDirPrecioU42(value: number) {
    this.costosDirPrecioU42 = value;
  }
  private costosDirPrecioU43!: number;
  public getCostosDirPrecioU43(): number {
    return this.costosDirPrecioU43;
  }
  public setCostosDirPrecioU43(value: number) {
    this.costosDirPrecioU43 = value;
  }
  private costosDirPrecioU44!: number;
  public getCostosDirPrecioU44(): number {
    return this.costosDirPrecioU44;
  }
  public setCostosDirPrecioU44(value: number) {
    this.costosDirPrecioU44 = value;
  }
  private costosDirPrecioU45!: number;
  public getCostosDirPrecioU45(): number {
    return this.costosDirPrecioU45;
  }
  public setCostosDirPrecioU45(value: number) {
    this.costosDirPrecioU45 = value;
  }
  private costosDirPrecioU46!: number;
  public getCostosDirPrecioU46(): number {
    return this.costosDirPrecioU46;
  }
  public setCostosDirPrecioU46(value: number) {
    this.costosDirPrecioU46 = value;
  }
  private costosDirPrecioU47!: number;
  public getCostosDirPrecioU47(): number {
    return this.costosDirPrecioU47;
  }
  public setCostosDirPrecioU47(value: number) {
    this.costosDirPrecioU47 = value;
  }
  private costosDirPrecioU48!: number;
  public getCostosDirPrecioU48(): number {
    return this.costosDirPrecioU48;
  }
  public setCostosDirPrecioU48(value: number) {
    this.costosDirPrecioU48 = value;
  }

  private costosDirTotalABC11!: number;
  public getCostosDirTotalABC11(): number {
    return this.costosDirTotalABC11;
  }
  public setCostosDirTotalABC11(value: number) {
    this.costosDirTotalABC11 = value;
  }
  private costosDirTotalABC12!: number;
  public getCostosDirTotalABC12(): number {
    return this.costosDirTotalABC12;
  }
  public setCostosDirTotalABC12(value: number) {
    this.costosDirTotalABC12 = value;
  }
  private costosDirTotalABC13!: number;
  public getCostosDirTotalABC13(): number {
    return this.costosDirTotalABC13;
  }
  public setCostosDirTotalABC13(value: number) {
    this.costosDirTotalABC13 = value;
  }
  private costosDirTotalABC14!: number;
  public getCostosDirTotalABC14(): number {
    return this.costosDirTotalABC14;
  }
  public setCostosDirTotalABC14(value: number) {
    this.costosDirTotalABC14 = value;
  }
  private costosDirTotalABC15!: number;
  public getCostosDirTotalABC15(): number {
    return this.costosDirTotalABC15;
  }
  public setCostosDirTotalABC15(value: number) {
    this.costosDirTotalABC15 = value;
  }
  private costosDirTotalABC16!: number;
  public getCostosDirTotalABC16(): number {
    return this.costosDirTotalABC16;
  }
  public setCostosDirTotalABC16(value: number) {
    this.costosDirTotalABC16 = value;
  }
  private costosDirTotalABC17!: number;
  public getCostosDirTotalABC17(): number {
    return this.costosDirTotalABC17;
  }
  public setCostosDirTotalABC17(value: number) {
    this.costosDirTotalABC17 = value;
  }
  private costosDirTotalABC18!: number;
  public getCostosDirTotalABC18(): number {
    return this.costosDirTotalABC18;
  }
  public setCostosDirTotalABC18(value: number) {
    this.costosDirTotalABC18 = value;
  }

  private costosDirTotalABC21!: number;
  public getCostosDirTotalABC21(): number {
    return this.costosDirTotalABC21;
  }
  public setCostosDirTotalABC21(value: number) {
    this.costosDirTotalABC21 = value;
  }
  private costosDirTotalABC22!: number;
  public getCostosDirTotalABC22(): number {
    return this.costosDirTotalABC22;
  }
  public setCostosDirTotalABC22(value: number) {
    this.costosDirTotalABC22 = value;
  }
  private costosDirTotalABC23!: number;
  public getCostosDirTotalABC23(): number {
    return this.costosDirTotalABC23;
  }
  public setCostosDirTotalABC23(value: number) {
    this.costosDirTotalABC23 = value;
  }
  private costosDirTotalABC24!: number;
  public getCostosDirTotalABC24(): number {
    return this.costosDirTotalABC24;
  }
  public setCostosDirTotalABC24(value: number) {
    this.costosDirTotalABC24 = value;
  }
  private costosDirTotalABC25!: number;
  public getCostosDirTotalABC25(): number {
    return this.costosDirTotalABC25;
  }
  public setCostosDirTotalABC25(value: number) {
    this.costosDirTotalABC25 = value;
  }
  private costosDirTotalABC26!: number;
  public getCostosDirTotalABC26(): number {
    return this.costosDirTotalABC26;
  }
  public setCostosDirTotalABC26(value: number) {
    this.costosDirTotalABC26 = value;
  }
  private costosDirTotalABC27!: number;
  public getCostosDirTotalABC27(): number {
    return this.costosDirTotalABC27;
  }
  public setCostosDirTotalABC27(value: number) {
    this.costosDirTotalABC27 = value;
  }
  private costosDirTotalABC28!: number;
  public getCostosDirTotalABC28(): number {
    return this.costosDirTotalABC28;
  }
  public setCostosDirTotalABC28(value: number) {
    this.costosDirTotalABC28 = value;
  }

  private costosDirTotalABC31!: number;
  public getCostosDirTotalABC31(): number {
    return this.costosDirTotalABC31;
  }
  public setCostosDirTotalABC31(value: number) {
    this.costosDirTotalABC31 = value;
  }
  private costosDirTotalABC32!: number;
  public getCostosDirTotalABC32(): number {
    return this.costosDirTotalABC32;
  }
  public setCostosDirTotalABC32(value: number) {
    this.costosDirTotalABC32 = value;
  }
  private costosDirTotalABC33!: number;
  public getCostosDirTotalABC33(): number {
    return this.costosDirTotalABC33;
  }
  public setCostosDirTotalABC33(value: number) {
    this.costosDirTotalABC33 = value;
  }
  private costosDirTotalABC34!: number;
  public getCostosDirTotalABC34(): number {
    return this.costosDirTotalABC34;
  }
  public setCostosDirTotalABC34(value: number) {
    this.costosDirTotalABC34 = value;
  }
  private costosDirTotalABC35!: number;
  public getCostosDirTotalABC35(): number {
    return this.costosDirTotalABC35;
  }
  public setCostosDirTotalABC35(value: number) {
    this.costosDirTotalABC35 = value;
  }
  private costosDirTotalABC36!: number;
  public getCostosDirTotalABC36(): number {
    return this.costosDirTotalABC36;
  }
  public setCostosDirTotalABC36(value: number) {
    this.costosDirTotalABC36 = value;
  }
  private costosDirTotalABC37!: number;
  public getCostosDirTotalABC37(): number {
    return this.costosDirTotalABC37;
  }
  public setCostosDirTotalABC37(value: number) {
    this.costosDirTotalABC37 = value;
  }
  private costosDirTotalABC38!: number;
  public getCostosDirTotalABC38(): number {
    return this.costosDirTotalABC38;
  }
  public setCostosDirTotalABC38(value: number) {
    this.costosDirTotalABC38 = value;
  }

  private costosDirTotalABC41!: number;
  public getCostosDirTotalABC41(): number {
    return this.costosDirTotalABC41;
  }
  public setCostosDirTotalABC41(value: number) {
    this.costosDirTotalABC41 = value;
  }
  private costosDirTotalABC42!: number;
  public getCostosDirTotalABC42(): number {
    return this.costosDirTotalABC42;
  }
  public setCostosDirTotalABC42(value: number) {
    this.costosDirTotalABC42 = value;
  }
  private costosDirTotalABC43!: number;
  public getCostosDirTotalABC43(): number {
    return this.costosDirTotalABC43;
  }
  public setCostosDirTotalABC43(value: number) {
    this.costosDirTotalABC43 = value;
  }
  private costosDirTotalABC44!: number;
  public getCostosDirTotalABC44(): number {
    return this.costosDirTotalABC44;
  }
  public setCostosDirTotalABC44(value: number) {
    this.costosDirTotalABC44 = value;
  }
  private costosDirTotalABC45!: number;
  public getCostosDirTotalABC45(): number {
    return this.costosDirTotalABC45;
  }
  public setCostosDirTotalABC45(value: number) {
    this.costosDirTotalABC45 = value;
  }
  private costosDirTotalABC46!: number;
  public getCostosDirTotalABC46(): number {
    return this.costosDirTotalABC46;
  }
  public setCostosDirTotalABC46(value: number) {
    this.costosDirTotalABC46 = value;
  }
  private costosDirTotalABC47!: number;
  public getCostosDirTotalABC47(): number {
    return this.costosDirTotalABC47;
  }
  public setCostosDirTotalABC47(value: number) {
    this.costosDirTotalABC47 = value;
  }
  private costosDirTotalABC48!: number;
  public getCostosDirTotalABC48(): number {
    return this.costosDirTotalABC48;
  }
  public setCostosDirTotalABC48(value: number) {
    this.costosDirTotalABC48 = value;
  }

  private costosDirTotaCD1!: number;
  public getCostosDirTotaCD1(): number {
    return this.costosDirTotaCD1;
  }
  public setCostosDirTotaCD1(value: number) {
    this.costosDirTotaCD1 = value;
  }
  private costosDirTotaCD2!: number;
  public getCostosDirTotaCD2(): number {
    return this.costosDirTotaCD2;
  }
  public setCostosDirTotaCD2(value: number) {
    this.costosDirTotaCD2 = value;
  }
  private costosDirTotaCD3!: number;
  public getCostosDirTotaCD3(): number {
    return this.costosDirTotaCD3;
  }
  public setCostosDirTotaCD3(value: number) {
    this.costosDirTotaCD3 = value;
  }
  private costosDirTotaCD4!: number;
  public getCostosDirTotaCD4(): number {
    return this.costosDirTotaCD4;
  }
  public setCostosDirTotaCD4(value: number) {
    this.costosDirTotaCD4 = value;
  }

  private costosDirTotalPV1!: number;
  public getCostosDirTotalPV1(): number {
    return this.costosDirTotalPV1;
  }
  public setCostosDirTotalPV1(value: number) {
    this.costosDirTotalPV1 = value;
  }
  private costosDirTotalPV2!: number;
  public getCostosDirTotalPV2(): number {
    return this.costosDirTotalPV2;
  }
  public setCostosDirTotalPV2(value: number) {
    this.costosDirTotalPV2 = value;
  }
  private costosDirTotalPV3!: number;
  public getCostosDirTotalPV3(): number {
    return this.costosDirTotalPV3;
  }
  public setCostosDirTotalPV3(value: number) {
    this.costosDirTotalPV3 = value;
  }
  private costosDirTotalPV4!: number;
  public getCostosDirTotalPV4(): number {
    return this.costosDirTotalPV4;
  }
  public setCostosDirTotalPV4(value: number) {
    this.costosDirTotalPV4 = value;
  }
  private costosDirRangoA!: number;

  public getCostosDirRangoA(): number {
    return this.costosDirRangoA;
  }

  public setCostosDirRangoA(value: number) {
    this.costosDirRangoA = value;
  }

  private costosDirRangoB!: number;

  public getCostosDirRangoB(): number {
    return this.costosDirRangoB;
  }

  public setCostosDirRangoB(value: number) {
    this.costosDirRangoB = value;
  }

  private costosDirRangoC!: number;

  public getCostosDirRangoC(): number {
    return this.costosDirRangoC;
  }

  public setCostosDirRangoC(value: number) {
    this.costosDirRangoC = value;
  }

  // Producto Servicio 1

  private costosDirProdServ1!: string;

  public getCostosDirProdServ1(): string {
    return this.costosDirProdServ1;
  }

  public setCostosDirProdServ1(value: string) {
    this.costosDirProdServ1 = value;
  }

  private costosDirProdTipo1!: string;

  public getCostosDirProdTipo1(): string {
    return this.costosDirProdTipo1;
  }

  public setCostosDirProdTipo1(value: string) {
    this.costosDirProdTipo1 = value;
  }

  private costosDirProdCantidad1!: number;

  public getCostosDirProdCantidad1(): number {
    return this.costosDirProdCantidad1;
  }

  public setCostosDirProdCantidad1(value: number) {
    this.costosDirProdCantidad1 = value;
  }

  private costosDirProdUniVenta1!: string;

  public getCostosDirProdUniVenta1(): string {
    return this.costosDirProdUniVenta1;
  }

  public setCostosDirProdUniVenta1(value: string) {
    this.costosDirProdUniVenta1 = value;
  }

  private costosDirProdFrecuencia1!: string;

  public getCostosDirProdFrecuencia1(): string {
    return this.costosDirProdFrecuencia1;
  }

  public setCostosDirProdFrecuencia1(value: string) {
    this.costosDirProdFrecuencia1 = value;
  }

   // Producto Servicio 2

   private costosDirProdServ2!: string;

   public getCostosDirProdServ2(): string {
     return this.costosDirProdServ2;
   }

   public setCostosDirProdServ2(value: string) {
     this.costosDirProdServ2 = value;
   }

   private costosDirProdTipo2!: string;

   public getCostosDirProdTipo2(): string {
     return this.costosDirProdTipo2;
   }

   public setCostosDirProdTipo2(value: string) {
     this.costosDirProdTipo2 = value;
   }

   private costosDirProdCantidad2!: number;

   public getCostosDirProdCantidad2(): number {
     return this.costosDirProdCantidad2;
   }

   public setCostosDirProdCantidad2(value: number) {
     this.costosDirProdCantidad2 = value;
   }

   private costosDirProdUniVenta2!: string;

   public getCostosDirProdUniVenta2(): string {
     return this.costosDirProdUniVenta2;
   }

   public setCostosDirProdUniVenta2(value: string) {
     this.costosDirProdUniVenta2 = value;
   }

   private costosDirProdFrecuencia2!: string;

   public getCostosDirProdFrecuencia2(): string {
     return this.costosDirProdFrecuencia2;
   }

   public setCostosDirProdFrecuencia2(value: string) {
     this.costosDirProdFrecuencia2 = value;
   }

    // Producto Servicio 3

  private costosDirProdServ3!: string;

  public getCostosDirProdServ3(): string {
    return this.costosDirProdServ3;
  }

  public setCostosDirProdServ3(value: string) {
    this.costosDirProdServ3 = value;
  }

  private costosDirProdTipo3!: string;

  public getCostosDirProdTipo3(): string {
    return this.costosDirProdTipo3;
  }

  public setCostosDirProdTipo3(value: string) {
    this.costosDirProdTipo3 = value;
  }

  private costosDirProdCantidad3!: number;

  public getCostosDirProdCantidad3(): number {
    return this.costosDirProdCantidad3;
  }

  public setCostosDirProdCantidad3(value: number) {
    this.costosDirProdCantidad3 = value;
  }

  private costosDirProdUniVenta3!: string;

  public getCostosDirProdUniVenta3(): string {
    return this.costosDirProdUniVenta3;
  }

  public setCostosDirProdUniVenta3(value: string) {
    this.costosDirProdUniVenta3 = value;
  }

  private costosDirProdFrecuencia3!: string;

  public getCostosDirProdFrecuencia3(): string {
    return this.costosDirProdFrecuencia3;
  }

  public setCostosDirProdFrecuencia3(value: string) {
    this.costosDirProdFrecuencia3 = value;
  }

   // Producto Servicio 4

   private costosDirProdServ4!: string;

   public getCostosDirProdServ4(): string {
     return this.costosDirProdServ4;
   }

   public setCostosDirProdServ4(value: string) {
     this.costosDirProdServ4 = value;
   }

   private costosDirProdTipo4!: string;

   public getCostosDirProdTipo4(): string {
     return this.costosDirProdTipo4;
   }

   public setCostosDirProdTipo4(value: string) {
     this.costosDirProdTipo4 = value;
   }

   private costosDirProdCantidad4!: number;

   public getCostosDirProdCantidad4(): number {
     return this.costosDirProdCantidad4;
   }

   public setCostosDirProdCantidad4(value: number) {
     this.costosDirProdCantidad4 = value;
   }

   private costosDirProdUniVenta4!: string;

   public getCostosDirProdUniVenta4(): string {
     return this.costosDirProdUniVenta4;
   }

   public setCostosDirProdUniVenta4(value: string) {
     this.costosDirProdUniVenta4 = value;
   }

   private costosDirProdFrecuencia4!: string;

   public getCostosDirProdFrecuencia4(): string {
     return this.costosDirProdFrecuencia4;
   }

   public setCostosDirProdFrecuencia4(value: string) {
     this.costosDirProdFrecuencia4 = value;
   }

}
