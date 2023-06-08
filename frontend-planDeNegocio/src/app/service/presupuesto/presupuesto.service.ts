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

  setInputValuesDetalle0(valor: number) {
    this.inputValuesDetalle = valor;
  }
  getInputValuesDetalle0() {
    return this.inputValuesDetalle;
  }

  inputValuesDetalle1!: number;

  setInputValuesDetalle1(valor: number) {
    this.inputValuesDetalle1 = valor;
  }
  getInputValuesDetalle1() {
    return this.inputValuesDetalle1;
  }

  inputValuesDetalle2!: number;

  setInputValuesDetalle2(valor: number) {
    this.inputValuesDetalle2 = valor;
  }
  getInputValuesDetalle2() {
    return this.inputValuesDetalle2;
  }
  ////////////////////////////////////////////////
  setTotal(valor: number) {
    this.total = valor;
  }
  getTotal() {
    return this.total;
  }
  setValorManoObra(valor: number) {
    this.valorManoObra = valor;
  }
  getValorManoObra() {
    return this.valorManoObra;
  }
  /// 8.3
  inputvaluesMateriaPrima0!: number;
  setInputValuesMateriaPrima0(valor: number) {
    this.inputvaluesMateriaPrima0 = valor;
  }
  getInputValuesMateriaPrima0() {
    return this.inputvaluesMateriaPrima0;
  }
  inputvaluesMateriaPrima1!: number;
  setInputValuesMateriaPrima1(valor: number) {
    this.inputvaluesMateriaPrima1 = valor;
  }
  getInputValuesMateriaPrima1() {
    return this.inputvaluesMateriaPrima1;
  }
  inputvaluesMateriaPrima2!: number;
  setInputValuesMateriaPrima2(valor: number) {
    this.inputvaluesMateriaPrima2 = valor;
  }
  getInputValuesMateriaPrima2() {
    return this.inputvaluesMateriaPrima2;
  }
  //se invertira 8.3
  inputvaluesMateriaPrima10!: number;
  setInputValuesMateriaPrima10(valor: number) {
    this.inputvaluesMateriaPrima10 = valor;
  }
  getInputValuesMateriaPrima10() {
    return this.inputvaluesMateriaPrima10;
  }
  inputvaluesMateriaPrima11!: number;
  setInputValuesMateriaPrima11(valor: number) {
    this.inputvaluesMateriaPrima11 = valor;
  }
  getInputValuesMateriaPrima11() {
    return this.inputvaluesMateriaPrima11;
  }
  inputvaluesMateriaPrima12!: number;
  setInputValuesMateriaPrima12(valor: number) {
    this.inputvaluesMateriaPrima12 = valor;
  }
  getInputValuesMateriaPrima12() {
    return this.inputvaluesMateriaPrima12;
  }

  setTotalMateriaPrima(valor: number) {
    this.totalMateriaPrima = valor;
  }
  getTotalMateriaPrima() {
    return this.totalMateriaPrima;
  }
  setTotalMateriaPrima1(valor: number) {
    this.totalMateriaPrima1 = valor;
  }
  getTotalMateriaPrima1() {
    return this.totalMateriaPrima1;
  }

  // 8.4 inversion propia
  inputValuesReqProm0!: number;
  setInputValuesReqProm0(valor: number) {
    this.inputValuesReqProm0 = valor;
  }
  getInputValuesReqProm0() {
    return this.inputValuesReqProm0;
  }
  inputValuesReqProm1!: number;
  setInputValuesReqProm1(valor: number) {
    this.inputValuesReqProm1 = valor;
  }
  getInputValuesReqProm1() {
    return this.inputValuesReqProm1;
  }
  inputValuesReqProm2!: number;
  setInputValuesReqProm2(valor: number) {
    this.inputValuesReqProm2 = valor;
  }
  getInputValuesReqProm2() {
    return this.inputValuesReqProm2;
  }
  inputValuesReqProm10!: number;
  setInputValuesReqProm10(valor: number) {
    this.inputValuesReqProm10 = valor;
  }
  getInputValuesReqProm10() {
    return this.inputValuesReqProm10;
  }
  inputValuesReqProm11!: number;
  setInputValuesReqProm11(valor: number) {
    this.inputValuesReqProm11 = valor;
  }
  getInputValuesReqProm11() {
    return this.inputValuesReqProm11;
  }
  inputValuesReqProm12!: number;
  setInputValuesReqProm12(valor: number) {
    this.inputValuesReqProm12 = valor;
  }
  getInputValuesReqProm12() {
    return this.inputValuesReqProm12;
  }
  setTotalReqProm(valor: number) {
    this.totalReqProm = valor;
  }
  getTotalReqProm() {
    return this.totalReqProm;
  }
  setTotalReqProm1(valor: number) {
    this.totalReqProm1 = valor;
  }
  getTotalReqProm1() {
    return this.totalReqProm1;
  }
  // 8.5
  inputValuesGastosOp0!: number;
  setInputValuesGastosOp0(valor: number) {
    this.inputValuesGastosOp0 = valor;
  }
  getInputValuesGastosOp0() {
    return this.inputValuesGastosOp0;
  }
  inputValuesGastosOp1!: number;
  setInputValuesGastosOp1(valor: number) {
    this.inputValuesGastosOp1 = valor;
  }
  getInputValuesGastosOp1() {
    return this.inputValuesGastosOp1;
  }
  inputValuesGastosOp2!: number;
  setInputValuesGastosOp2(valor: number) {
    this.inputValuesGastosOp2 = valor;
  }
  getInputValuesGastosOp2() {
    return this.inputValuesGastosOp2;
  }
  setTotalGastosOp(valor: number) {
    this.totalGastosOp = valor;
  }
  getTotalGastosOp() {
    return this.totalGastosOp;
  }
  // 8.6
  inputValuesInfr0!: number;
  setInputValuesInfr0(valor: number) {
    this.inputValuesInfr0 = valor;
  }
  getInputValuesInfr0() {
    return this.inputValuesInfr0;
  }
  inputValuesInfr1!: number;
  setInputValuesInfr1(valor: number) {
    this.inputValuesInfr1 = valor;
  }
  getInputValuesInfr1() {
    return this.inputValuesInfr1;
  }
  inputValuesInfr2!: number;
  setInputValuesInfr2(valor: number) {
    this.inputValuesInfr2 = valor;
  }
  getInputValuesInfr2() {
    return this.inputValuesInfr2;
  }
  //8.6 se invertira
  inputValuesInfr10!: number;
  setInputValuesInfr10(valor: number) {
    this.inputValuesInfr10 = valor;
  }
  getInputValuesInfr10() {
    return this.inputValuesInfr10;
  }
  inputValuesInfr11!: number;
  setInputValuesInfr11(valor: number) {
    this.inputValuesInfr11 = valor;
  }
  getInputValuesInfr11() {
    return this.inputValuesInfr11;
  }
  inputValuesInfr12!: number;
  setInputValuesInfr12(valor: number) {
    this.inputValuesInfr12 = valor;
  }
  getInputValuesInfr12() {
    return this.inputValuesInfr12;
  }
  setTotalInfr(valor: number) {
    this.totalInfr = valor;
  }
  getTotalInfr() {
    return this.totalInfr;
  }
  setTotalInfr1(valor: number) {
    this.totalInfr1 = valor;
  }
  getTotalInfr1() {
    return this.totalInfr1;
  }

  // 8.7 inversión propia
  inputValuesMaq0!: number;
  setInputValuesMaq0(valor: number) {
    this.inputValuesMaq0 = valor;
  }
  getInputValuesMaq0() {
    return this.inputValuesMaq0;
  }
  inputValuesMaq1!: number;
  setInputValuesMaq1(valor: number) {
    this.inputValuesMaq1 = valor;
  }
  getInputValuesMaq1() {
    return this.inputValuesMaq1;
  }
  inputValuesMaq2!: number;
  setInputValuesMaq2(valor: number) {
    this.inputValuesMaq2 = valor;
  }
  getInputValuesMaq2() {
    return this.inputValuesMaq2;
  }
  setTotalMaq(valor: number) {
    this.totalMaq = valor;
  }
  getTotalMaq() {
    return this.totalMaq;
  }
  //8.7 inversion
  inputValuesMaq10!: number;
  setInputValuesMaq10(valor: number) {
    this.inputValuesMaq10 = valor;
  }
  getInputValuesMaq10() {
    return this.inputValuesMaq10;
  }
  inputValuesMaq11!: number;
  setInputValuesMaq11(valor: number) {
    this.inputValuesMaq11 = valor;
  }
  getInputValuesMaq11() {
    return this.inputValuesMaq11;
  }
  inputValuesMaq12!: number;
  setInputValuesMaq12(valor: number) {
    this.inputValuesMaq12 = valor;
  }
  getInputValuesMaq12() {
    return this.inputValuesMaq12;
  }
  setTotalMaq1(valor: number) {
    this.totalMaq1 = valor;
  }
  getTotalMaq1() {
    return this.totalMaq1;
  }
  // 8.8 inversión propia
  inputValuesLegal0!: number;
  setInputValuesLegal0(valor: number) {
    this.inputValuesLegal0 = valor;
  }
  getInputValuesLegal0() {
    return this.inputValuesLegal0;
  }
  inputValuesLegal1!: number;
  setInputValuesLegal1(valor: number) {
    this.inputValuesLegal1 = valor;
  }
  getInputValuesLegal1() {
    return this.inputValuesLegal1;
  }
  inputValuesLegal2!: number;
  setInputValuesLegal2(valor: number) {
    this.inputValuesLegal2 = valor;
  }
  getInputValuesLegal2() {
    return this.inputValuesLegal2;
  }
  setTotalLegal(valor: number) {
    this.totalLegal = valor;
  }
  getTotalLegal() {
    return this.totalLegal;
  }
  // 8.8 inversion
  inputValuesLegal10!: number;
  setInputValuesLegal10(valor: number) {
    this.inputValuesLegal10 = valor;
  }
  getInputValuesLegal10() {
    return this.inputValuesLegal10;
  }
  inputValuesLegal11!: number;
  setInputValuesLegal11(valor: number) {
    this.inputValuesLegal11 = valor;
  }
  getInputValuesLegal11() {
    return this.inputValuesLegal11;
  }
  inputValuesLegal12!: number;
  setInputValuesLegal12(valor: number) {
    this.inputValuesLegal12 = valor;
  }
  getInputValuesLegal12() {
    return this.inputValuesLegal12;
  }
  setTotalLegal1(valor: number) {
    this.totalLegal1 = valor;
  }
  getTotalLegal1() {
    return this.totalLegal1;
  }

  // Total capital operaciones
  totalCapitalOpApPro!: number;
  setTotalCapitalOpApPro(valor: number) {
    this.totalCapitalOpApPro = valor;
  }
  getTotalCapitalOpApPro() {
    return this.totalCapitalOpApPro;
  }
  totalCapitalOpInvertira!: number;
  setTotalCapitalOpInvertira(valor: number) {
    this.totalCapitalOpInvertira = valor;
  }
  getTotalCapitalOpInvertira() {
    return this.totalCapitalOpInvertira;
  }
  // Total capital inversión
  totalCapitalInversionApPo!: number;
  setTotalCapitalInversionApPo(valor: number){
    this.totalCapitalInversionApPo = valor;
  }
  getTotalCapitalInversionApPo(){
    return this.totalCapitalInversionApPo;
  }
  totalCapitalInversionSeInvertira!: number;
  setTotalCapitalInversionSeInvertira(valor: number){
    this.totalCapitalInversionSeInvertira = valor;
  }
  getTotalCapitalInversionSeInvertira(){
    return this.totalCapitalInversionSeInvertira;
  }
}
