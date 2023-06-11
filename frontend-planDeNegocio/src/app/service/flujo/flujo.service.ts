import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlujoService {

  constructor() { }
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
