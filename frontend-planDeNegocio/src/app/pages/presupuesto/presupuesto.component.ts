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
  }
  // 8.2 Mano de obra <input type="number" (change)="agregarTotal()" [(ngModel)]="manoObraEmprendedor">
  manoObraEmprendedor!: number;
  valorManoObra!: number;
  agregarTotal(): void {
    this.valorManoObra = this.manoObraEmprendedor;
    this.presupuestoService.setValorManoObra(this.valorManoObra);
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
  }
  // 8.4 Requerimientos Promocionales APORTE PROPIO
  inputValuesReqProm: (number | null)[] = [];
  totalReqProm: number = 0;
  input3!: number;

  calculateTotal3(index: number): void {
    this.input3 = this.inputValuesReqProm[index] ?? 0;
    this.totalReqProm = this.inputValuesReqProm
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalReqProm(this.totalReqProm);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesReqProm0(this.input3);
        break;
      case 1:
        this.presupuestoService.setInputValuesReqProm1(this.input3);
        break;
      case 2:
        this.presupuestoService.setInputValuesReqProm2(this.input3);
        break;
    }
  }
  // se INVERTIRA
  inputValuesReqProm1: (number | null)[] = [];
  totalReqProm1: number = 0;

  calculateTotal4(index: number): void {
    this.input3 = this.inputValuesReqProm1[index] ?? 0;
    this.totalReqProm1 = this.inputValuesReqProm1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    this.presupuestoService.setTotalReqProm1(this.totalReqProm1);
    switch (index) {
      case 0:
        this.presupuestoService.setInputValuesReqProm10(this.input3);
        break;
      case 1:
        this.presupuestoService.setInputValuesReqProm11(this.input3);
        break;
      case 2:
        this.presupuestoService.setInputValuesReqProm12(this.input3);
        break;
    }
  }
  // 8.5 Gastos operativos SE INVERTIRA
  inputValuesGastosOp: (number | null)[] = [];
  totalGastosOp: number = 0;

  calculateTotal5(): void {
    this.totalGastosOp = this.inputValuesGastosOp
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // 8.6 Infraestructura y/o terrenos y/o plantines APORTE PROPIO
  inputValuesInfr: (number | null)[] = [];
  totalInfr: number = 0;

  calculateTotal6(): void {
    this.totalInfr = this.inputValuesInfr
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // se INVERTIRA
  inputValuesInfr1: (number | null)[] = [];
  totalInfr1: number = 0;

  calculateTotal7(): void {
    this.totalInfr1 = this.inputValuesInfr1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // 8.7 Maquinaria, Equipos, Vehículos y/o Ganado
  inputValuesMaq: (number | null)[] = [];
  totalMaq: number = 0;

  calculateTotal8(): void {
    this.totalMaq = this.inputValuesMaq
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // se INVERTIRA
  inputValuesMaq1: (number | null)[] = [];
  totalMaq1: number = 0;

  calculateTotal9(): void {
    this.totalMaq1 = this.inputValuesMaq1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // 8.8 Requirimientos Legales APORTE PROPIO
  inputValuesLegal: (number | null)[] = [];
  totalLegal: number = 0;

  calculateTotal10(): void {
    this.totalLegal = this.inputValuesLegal
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // se INVERTIRA
  inputValuesLegal1: (number | null)[] = [];
  totalLegal1: number = 0;

  calculateTotal11(): void {
    this.totalLegal1 = this.inputValuesLegal1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
}
