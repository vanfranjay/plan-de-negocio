import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoTotalService {
  private totalAportePropio!: number;
  private totalPlanInversion!: number;
  private primerDesembolso!: number;
  private segundoDesembolso!: number;
  private inputValues5!: number;
  private messageDesembolso!: string;
  public getMessageDesembolso(): string {
    return this.messageDesembolso;
  }
  public setMessageDesembolso(value: string) {
    this.messageDesembolso = value;
  }
  private messageApEfectivo!: string;
  public getMessageApEfectivo(): string {
    return this.messageApEfectivo;
  }
  public setMessageApEfectivo(value: string) {
    this.messageApEfectivo = value;
  }
  private showErrorMessage!: boolean;
  public getShowErrorMessage(): boolean {
    return this.showErrorMessage;
  }
  public setShowErrorMessage(value: boolean) {
    this.showErrorMessage = value;
  }
  private totalApPropioEfectivo!: number;
  public getTotalApPropioEfectivo(): number {
    return this.totalApPropioEfectivo;
  }
  public setTotalApPropioEfectivo(value: number) {
    this.totalApPropioEfectivo = value;
  }
  private inputValues0!: number;
  public getInputValues0(): number {
    return this.inputValues0;
  }
  public setInputValues0(value: number) {
    this.inputValues0 = value;
  }
  private inputValues1!: number;
  public getInputValues1(): number {
    return this.inputValues1;
  }
  public setInputValues1(value: number) {
    this.inputValues1 = value;
  }
  private inputValues2!: number;
  public getInputValues2(): number {
    return this.inputValues2;
  }
  public setInputValues2(value: number) {
    this.inputValues2 = value;
  }
  private inputValues3!: number;
  public getInputValues3(): number {
    return this.inputValues3;
  }
  public setInputValues3(value: number) {
    this.inputValues3 = value;
  }
  private inputValues4!: number;
  public getInputValues4(): number {
    return this.inputValues4;
  }
  public setInputValues4(value: number) {
    this.inputValues4 = value;
  }

  public getInputValues5(): number {
    return this.inputValues5;
  }
  public setInputValues5(value: number) {
    this.inputValues5 = value;
  }

  public getSegundoDesembolso(): number {
    return this.segundoDesembolso;
  }
  public setSegundoDesembolso(value: number) {
    this.segundoDesembolso = value;
  }

  setPrimerDesembolso(valor: number){
    this.primerDesembolso = valor;
  }
  getPrimerDesembolso(){
    return this.primerDesembolso;
  }

  setTotalPlanInversion(valor: number){
    this.totalPlanInversion = valor;
  }
  getTotalPlanInversion(){
    return this.totalPlanInversion;
  }

  setTotalAportePropio(valor: number){
    this.totalAportePropio = valor;
  }
  getTotalAportePropio(){
    return this.totalAportePropio;
  }
}
