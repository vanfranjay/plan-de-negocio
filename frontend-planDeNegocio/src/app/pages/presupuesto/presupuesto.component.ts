import { Component } from '@angular/core';
import { PresupuestoService } from '../../service/presupuesto/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent {
  constructor(
    private presupuestoService: PresupuestoService
  ) { }

  totalCapitalOpApPro: number = 0;
  totalCapitalOpInvertira: number = 0;

  totalCapitalInversionApPo!: number;
  totalCapitalInversionSeInvertira!: number;

  calcularTotalOperaciones() {
    this.totalCapitalOpApPro =
      (this.presupuestoService.getTotalMateriaPrima() ?? 0) +
      (this.presupuestoService.getTotalReqProm() ?? 0) +
      (this.presupuestoService.getValorManoObra() ?? 0);

    this.presupuestoService.setTotalCapitalOpApPro(this.totalCapitalOpApPro);
  }
  calcularTotalOperacionesInvertira() {
    this.totalCapitalOpInvertira = (this.presupuestoService.getTotalMateriaPrima1() ?? 0) +
      (this.presupuestoService.getTotalReqProm1() ?? 0) +
      (this.presupuestoService.getTotalGastosOp() ?? 0);

    this.presupuestoService.setTotalCapitalOpInvertira(this.totalCapitalOpInvertira);
  }
  calcularCapitalInversionApPro(){
    this.totalCapitalInversionApPo =
      (this.presupuestoService.getTotalInfr() ?? 0) +
      (this.presupuestoService.getTotalMaq() ?? 0) +
      (this.presupuestoService.getTotalLegal() ?? 0);
      this.presupuestoService.setTotalCapitalInversionApPo(this.totalCapitalInversionApPo);
  }
  calcularCapitalInversionSeInvertira(){
    this.totalCapitalInversionSeInvertira =
      (this.presupuestoService.getTotalInfr1() ?? 0) +
      (this.presupuestoService.getTotalMaq1() ?? 0) +
      (this.presupuestoService.getTotalLegal1() ?? 0);
      this.presupuestoService.setTotalCapitalInversionSeInvertira(this.totalCapitalInversionSeInvertira);
  }

  //<input type="number" class="no-margin right-align" (change)="calculateTotal()" [(ngModel)]="inputValues[2]"/>
  // 8.1 detalle
  inputValuesDetalle: (number | null)[] = [];
  total!: number;
  input1!: number;

  calculateTotal(index: number): void {
    this.input1 = this.inputValuesDetalle[index] ?? 0;
    this.total = this.inputValuesDetalle
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotal(this.total);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesDetalle0(this.input1);
        break;
      case 1:
        this.presupuestoService.setInputValuesDetalle1(this.input1);
        break;
      case 2:
        this.presupuestoService.setInputValuesDetalle2(this.input1);
        break;
    }
    this.calcularTotalOperaciones();
  }
  ngOnInit() {
    this.inputValuesDetalle[0] = this.presupuestoService.getInputValuesDetalle0();
    this.inputValuesDetalle[1] = this.presupuestoService.getInputValuesDetalle1();
    this.inputValuesDetalle[2] = this.presupuestoService.getInputValuesDetalle2();
    this.total = this.presupuestoService.getTotal();
    this.valorManoObra = this.presupuestoService.getValorManoObra();
    this.manoObraEmprendedor = this.presupuestoService.getValorManoObra();
    this.inputValuesMateriaPrima[0] = this.presupuestoService.getInputValuesMateriaPrima0();
    this.inputValuesMateriaPrima[1] = this.presupuestoService.getInputValuesMateriaPrima1();
    this.inputValuesMateriaPrima[2] = this.presupuestoService.getInputValuesMateriaPrima2();
    this.totalMateriaPrima = this.presupuestoService.getTotalMateriaPrima();

    this.inputValuesMateriaPrima1[0] = this.presupuestoService.getInputValuesMateriaPrima10();
    this.inputValuesMateriaPrima1[1] = this.presupuestoService.getInputValuesMateriaPrima11();
    this.inputValuesMateriaPrima1[2] = this.presupuestoService.getInputValuesMateriaPrima12();
    this.totalMateriaPrima1 = this.presupuestoService.getTotalMateriaPrima1();

    this.inputValuesReqProm[0] = this.presupuestoService.getInputValuesReqProm0();
    this.inputValuesReqProm[1] = this.presupuestoService.getInputValuesReqProm1();
    this.inputValuesReqProm[2] = this.presupuestoService.getInputValuesReqProm2();
    this.totalReqProm = this.presupuestoService.getTotalReqProm();

    this.inputValuesReqProm1[0] = this.presupuestoService.getInputValuesReqProm10();
    this.inputValuesReqProm1[1] = this.presupuestoService.getInputValuesReqProm11();
    this.inputValuesReqProm1[2] = this.presupuestoService.getInputValuesReqProm12();
    this.totalReqProm1 = this.presupuestoService.getTotalReqProm1();

    this.inputValuesGastosOp[0] = this.presupuestoService.getInputValuesGastosOp0();
    this.inputValuesGastosOp[1] = this.presupuestoService.getInputValuesGastosOp1();
    this.inputValuesGastosOp[2] = this.presupuestoService.getInputValuesGastosOp2();
    this.totalGastosOp = this.presupuestoService.getTotalGastosOp();

    this.inputValuesInfr[0] = this.presupuestoService.getInputValuesInfr0();
    this.inputValuesInfr[1] = this.presupuestoService.getInputValuesInfr1();
    this.inputValuesInfr[2] = this.presupuestoService.getInputValuesInfr2();
    this.totalInfr = this.presupuestoService.getTotalInfr();

    this.inputValuesInfr1[0] = this.presupuestoService.getInputValuesInfr10();
    this.inputValuesInfr1[1] = this.presupuestoService.getInputValuesInfr11();
    this.inputValuesInfr1[2] = this.presupuestoService.getInputValuesInfr12();
    this.totalInfr1 = this.presupuestoService.getTotalInfr1();

    this.inputValuesMaq[0] = this.presupuestoService.getInputValuesMaq0();
    this.inputValuesMaq[1] = this.presupuestoService.getInputValuesMaq1();
    this.inputValuesMaq[2] = this.presupuestoService.getInputValuesMaq2();
    this.totalMaq = this.presupuestoService.getTotalMaq();

    this.inputValuesMaq1[0] = this.presupuestoService.getInputValuesMaq10();
    this.inputValuesMaq1[1] = this.presupuestoService.getInputValuesMaq11();
    this.inputValuesMaq1[2] = this.presupuestoService.getInputValuesMaq12();
    this.totalMaq1 = this.presupuestoService.getTotalMaq1();

    this.inputValuesLegal[0] = this.presupuestoService.getInputValuesLegal0();
    this.inputValuesLegal[1] = this.presupuestoService.getInputValuesLegal1();
    this.inputValuesLegal[2] = this.presupuestoService.getInputValuesLegal2();
    this.totalLegal = this.presupuestoService.getTotalLegal();

    this.inputValuesLegal1[0] = this.presupuestoService.getInputValuesLegal10();
    this.inputValuesLegal1[1] = this.presupuestoService.getInputValuesLegal11();
    this.inputValuesLegal1[2] = this.presupuestoService.getInputValuesLegal12();
    this.totalLegal1 = this.presupuestoService.getTotalLegal1();

    this.totalCapitalOpApPro = this.presupuestoService.getTotalCapitalOpApPro();
    this.totalCapitalOpInvertira = this.presupuestoService.getTotalCapitalOpInvertira();
    this.totalCapitalInversionApPo = this.presupuestoService.getTotalCapitalInversionApPo();
    this.totalCapitalInversionSeInvertira = this.presupuestoService.getTotalCapitalInversionSeInvertira();
  }
  // 8.2 Mano de obra <input type="number" (change)="agregarTotal()" [(ngModel)]="manoObraEmprendedor">
  manoObraEmprendedor!: number;
  valorManoObra!: number;
  agregarTotal(): void {
    this.valorManoObra = this.manoObraEmprendedor;
    this.presupuestoService.setValorManoObra(this.valorManoObra);
    this.calcularTotalOperaciones();
  }
  // 8.3 Materia prima, insumos y/o animales de engorde APORTE PROPIO
  inputValuesMateriaPrima: (number | null)[] = [];
  totalMateriaPrima: number = 0;
  input2!: number;

  calculateTotal1(index: number): void {
    this.input2 = this.inputValuesMateriaPrima[index] ?? 0;
    this.totalMateriaPrima = this.inputValuesMateriaPrima
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalMateriaPrima(this.totalMateriaPrima);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesMateriaPrima0(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesMateriaPrima1(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesMateriaPrima2(this.input2);
        break;
    }
    this.calcularTotalOperaciones();
  }
  // se INVERTIRA
  inputValuesMateriaPrima1: (number | null)[] = [];
  totalMateriaPrima1: number = 0;

  calculateTotal2(index: number): void {
    this.input2 = this.inputValuesMateriaPrima1[index] ?? 0;
    this.totalMateriaPrima1 = this.inputValuesMateriaPrima1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalMateriaPrima1(this.totalMateriaPrima1);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesMateriaPrima10(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesMateriaPrima11(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesMateriaPrima12(this.input2);
        break;
    }
    this.calcularTotalOperacionesInvertira();
  }
  // 8.4 Requerimientos Promocionales APORTE PROPIO
  inputValuesReqProm: (number | null)[] = [];
  totalReqProm: number = 0;
  // input3!: number;

  calculateTotal3(index: number): void {
    this.input2 = this.inputValuesReqProm[index] ?? 0;
    this.totalReqProm = this.inputValuesReqProm
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalReqProm(this.totalReqProm);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesReqProm0(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesReqProm1(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesReqProm2(this.input2);
        break;
    }
    this.calcularTotalOperaciones();
  }
  // se INVERTIRA
  inputValuesReqProm1: (number | null)[] = [];
  totalReqProm1: number = 0;

  calculateTotal4(index: number): void {
    this.input2 = this.inputValuesReqProm1[index] ?? 0;
    this.totalReqProm1 = this.inputValuesReqProm1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalReqProm1(this.totalReqProm1);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesReqProm10(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesReqProm11(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesReqProm12(this.input2);
        break;
    }
    this.calcularTotalOperacionesInvertira();
  }
  // 8.5 Gastos operativos SE INVERTIRA
  inputValuesGastosOp: (number | null)[] = [];
  totalGastosOp: number = 0;

  calculateTotal5(index: number): void {
    this.input2 = this.inputValuesGastosOp[index] ?? 0;
    this.totalGastosOp = this.inputValuesGastosOp
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalGastosOp(this.totalGastosOp);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesGastosOp0(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesGastosOp1(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesGastosOp2(this.input2);
        break;
    }
    this.calcularTotalOperacionesInvertira();
  }
  // 8.6 Infraestructura y/o terrenos y/o plantines APORTE PROPIO
  inputValuesInfr: (number | null)[] = [];
  totalInfr: number = 0;

  calculateTotal6(index: number): void {
    this.input2 = this.inputValuesInfr[index] ?? 0;
    this.totalInfr = this.inputValuesInfr
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalInfr(this.totalInfr);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesInfr0(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesInfr1(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesInfr2(this.input2);
        break;
    }
    this.calcularCapitalInversionApPro();
  }
  // se INVERTIRA
  inputValuesInfr1: (number | null)[] = [];
  totalInfr1: number = 0;

  calculateTotal7(index: number): void {
    this.input2 = this.inputValuesInfr1[index] ?? 0;
    this.totalInfr1 = this.inputValuesInfr1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalInfr1(this.totalInfr1);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesInfr10(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesInfr11(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesInfr12(this.input2);
        break;
    }
    this.calcularCapitalInversionSeInvertira();
  }
  // 8.7 Maquinaria, Equipos, Vehículos y/o Ganado
  inputValuesMaq: (number | null)[] = [];
  totalMaq: number = 0;

  calculateTotal8(index: number): void {
    this.input2 = this.inputValuesMaq[index] ?? 0;
    this.totalMaq = this.inputValuesMaq
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalMaq(this.totalMaq);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesMaq0(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesMaq1(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesMaq2(this.input2);
        break;
    }
    this.calcularCapitalInversionApPro();
  }
  // se INVERTIRA
  inputValuesMaq1: (number | null)[] = [];
  totalMaq1: number = 0;

  calculateTotal9(index: number): void {
    this.input2 = this.inputValuesMaq1[index] ?? 0;
    this.totalMaq1 = this.inputValuesMaq1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalMaq1(this.totalMaq1);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesMaq10(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesMaq11(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesMaq12(this.input2);
        break;
    }
    this.calcularCapitalInversionSeInvertira();
  }
  // 8.8 Requirimientos Legales APORTE PROPIO
  inputValuesLegal: (number | null)[] = [];
  totalLegal: number = 0;

  calculateTotal10(index: number): void {
    this.input2 = this.inputValuesLegal[index] ?? 0;
    this.totalLegal = this.inputValuesLegal
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalLegal(this.totalLegal);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesLegal0(this.input2);
        break;
      case 1:
        this.presupuestoService.setInputValuesLegal1(this.input2);
        break;
      case 2:
        this.presupuestoService.setInputValuesLegal2(this.input2);
        break;
    }
    this.calcularCapitalInversionApPro();
  }
  // se INVERTIRA
  inputValuesLegal1: (number | null)[] = [];
  totalLegal1: number = 0;

  calculateTotal11(index: number): void {
    this.input2 = this.inputValuesLegal1[index] ?? 0;
    this.totalLegal1 = this.inputValuesLegal1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
      this.presupuestoService.setTotalLegal1(this.totalLegal1);
      switch (index) {
        case 0:
          this.presupuestoService.setInputValuesLegal10(this.input2);
          break;
        case 1:
          this.presupuestoService.setInputValuesLegal11(this.input2);
          break;
        case 2:
          this.presupuestoService.setInputValuesLegal12(this.input2);
          break;
      }
      this.calcularCapitalInversionSeInvertira();
  }
}
