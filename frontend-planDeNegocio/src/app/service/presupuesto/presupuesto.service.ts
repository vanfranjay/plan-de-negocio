import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  constructor() { }
  private total!: number;
  private valorManoObra!: number;
  private totalMateriaPrima!: number;
  private totalMateriaPrima1!: number;
  private totalReqProm!: number;
  private totalReqProm1!: number;
  private totalGastosOp!: number;
  private totalInfr!: number;
  private totalInfr1!: number;
  private totalMaq!: number;
  private totalMaq1!: number;
  private totalLegal!: number;
  private totalLegal1!: number;

  inputValuesDetalle!: number;

  setInputValuesDetalle0(valor: number){
    this.inputValuesDetalle = valor;
  }
  getInputValuesDetalle0(){
    return this.inputValuesDetalle;
  }

  inputValuesDetalle1!: number;

  setInputValuesDetalle1(valor: number){
    this.inputValuesDetalle1 = valor;
  }
  getInputValuesDetalle1(){
    return this.inputValuesDetalle1;
  }

  inputValuesDetalle2!: number;

  setInputValuesDetalle2(valor: number){
    this.inputValuesDetalle2 = valor;
  }
  getInputValuesDetalle2(){
    return this.inputValuesDetalle2;
  }
////////////////////////////////////////////////
  setTotal(valor: number){
    this.total = valor;
  }
  getTotal(){
    return this.total;
  }
  setValorManoObra(valor: number){
    this.valorManoObra = valor;
  }
  getValorManoObra(){
    return this.valorManoObra
  }
  /// 8.3
  inputvaluesMateriaPrima0!: number;
  setInputValuesMateriaPrima0(valor: number){
    this.inputvaluesMateriaPrima0 = valor;
  }
  getInputValuesMateriaPrima0(){
    return this.inputvaluesMateriaPrima0;
  }
  inputvaluesMateriaPrima1!: number;
  setInputValuesMateriaPrima1(valor: number){
    this.inputvaluesMateriaPrima1 = valor;
  }
  getInputValuesMateriaPrima1(){
    return this.inputvaluesMateriaPrima1;
  }
  inputvaluesMateriaPrima2!: number;
  setInputValuesMateriaPrima2(valor: number){
    this.inputvaluesMateriaPrima2 = valor;
  }
  getInputValuesMateriaPrima2(){
    return this.inputvaluesMateriaPrima2;
  }
  //se invertira 8.3
  inputvaluesMateriaPrima10!: number;
  setInputValuesMateriaPrima10(valor: number){
    this.inputvaluesMateriaPrima10 = valor;
  }
  getInputValuesMateriaPrima10(){
    return this.inputvaluesMateriaPrima10;
  }
  inputvaluesMateriaPrima11!: number;
  setInputValuesMateriaPrima11(valor: number){
    this.inputvaluesMateriaPrima11 = valor;
  }
  getInputValuesMateriaPrima11(){
    return this.inputvaluesMateriaPrima11;
  }
  inputvaluesMateriaPrima12!: number;
  setInputValuesMateriaPrima12(valor: number){
    this.inputvaluesMateriaPrima12 = valor;
  }
  getInputValuesMateriaPrima12(){
    return this.inputvaluesMateriaPrima12;
  }

  setTotalMateriaPrima(valor: number){
    this.totalMateriaPrima = valor;
  }
  getTotalMateriaPrima(){
    return this.totalMateriaPrima;
  }
  setTotalMateriaPrima1(valor: number){
    this.totalMateriaPrima1 = valor;
  }
  getTotalMateriaPrima1(){
    return this.totalMateriaPrima1;
  }

  // 8.4 inversion propia
  inputValuesReqProm0!: number;
  setInputValuesReqProm0(valor: number){
    this.inputValuesReqProm0 = valor;
  }
  getInputValuesReqProm0(){
    return this.inputValuesReqProm0;
  }
  inputValuesReqProm1!: number;
  setInputValuesReqProm1(valor: number){
    this.inputValuesReqProm1 = valor;
  }
  getInputValuesReqProm1(){
    return this.inputValuesReqProm1;
  }
  inputValuesReqProm2!: number;
  setInputValuesReqProm2(valor: number){
    this.inputValuesReqProm2 = valor;
  }
  getInputValuesReqProm2(){
    return this.inputValuesReqProm2;
  }
  inputValuesReqProm10!: number;
  setInputValuesReqProm10(valor: number){
    this.inputValuesReqProm10 = valor;
  }
  getInputValuesReqProm10(){
    return this.inputValuesReqProm10;
  }
  inputValuesReqProm11!: number;
  setInputValuesReqProm11(valor: number){
    this.inputValuesReqProm11 = valor;
  }
  getInputValuesReqProm11(){
    return this.inputValuesReqProm11;
  }
  inputValuesReqProm12!: number;
  setInputValuesReqProm12(valor: number){
    this.inputValuesReqProm12 = valor;
  }
  getInputValuesReqProm12(){
    return this.inputValuesReqProm12;
  }
  setTotalReqProm(valor: number){
    this.totalReqProm = valor;
  }
  getTotalReqProm(){
    return this.totalReqProm;
  }
  setTotalReqProm1(valor: number){
    this.totalReqProm1 = valor;
  }
  getTotalReqProm1(){
    return this.totalReqProm1;
  }
  setTotalGastosOp(valor: number){
    this.totalGastosOp = valor;
  }
  getTotalGastosOp(){
    return this.totalGastosOp;
  }
  setTotalInfr(valor: number){
    this.totalInfr = valor;
  }
  getTotalInfr(){
    return this.totalInfr;
  }
  setTotalInfr1(valor: number){
    this.totalInfr1 = valor;
  }
  getTotalInfr1(){
    return this.totalInfr1;
  }
  setTotalMaq(valor: number){
    this.totalMaq = valor;
  }
  getTotalMaq(){
    return this.totalMaq;
  }
  setTotalMaq1(valor: number){
    this.totalMaq1 = valor;
  }
  getTotalMaq1(){
    return this.totalMaq1;
  }
  setTotalLegal(valor: number){
    this.totalLegal = valor;
  }
  getTotalLegal(){
    return this.totalLegal;
  }
  setTotalLegal1(valor: number){
    this.totalLegal1 = valor;
  }
  getTotalLegal1(){
    return this.totalLegal1;
  }
}
