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
