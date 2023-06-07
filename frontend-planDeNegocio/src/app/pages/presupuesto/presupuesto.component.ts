import { Component } from '@angular/core';
import { PresupuestoTotalService } from '../../service/presupuestoTotal/presupuesto-total.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent {
  constructor(
    private presupuestoTotalService: PresupuestoTotalService
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
    this.presupuestoTotalService.setTotal(this.total);
    switch (index) {
      case 0:
        this.presupuestoTotalService.setInputValuesDetalle0(this.input1);
        break;
      case 1:
        this.presupuestoTotalService.setInputValuesDetalle1(this.input1);
        break;
      case 2:
        this.presupuestoTotalService.setInputValuesDetalle2(this.input1);
        break;
    }
  }
  ngOnInit() {
    this.inputValuesDetalle[0] = this.presupuestoTotalService.getInputValuesDetalle0();
    this.inputValuesDetalle[1] = this.presupuestoTotalService.getInputValuesDetalle1();
    this.inputValuesDetalle[2] = this.presupuestoTotalService.getInputValuesDetalle2();
    this.total = this.presupuestoTotalService.getTotal();
  }
  // 8.2 Mano de obra <input type="number" (change)="agregarTotal()" [(ngModel)]="manoObraEmprendedor">
  manoObraEmprendedor!: number;
  valorManoObra!: number;
  agregarTotal(): void {
    this.valorManoObra = this.manoObraEmprendedor;
  }
  // 8.3 Materia prima, insumos y/o animales de engorde APORTE PROPIO
  inputValuesMateriaPrima: (number | null)[] = [];
  totalMateriaPrima: number = 0;

  calculateTotal1(): void {
    this.totalMateriaPrima = this.inputValuesMateriaPrima
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // se INVERTIRA
  inputValuesMateriaPrima1: (number | null)[] = [];
  totalMateriaPrima1: number = 0;

  calculateTotal2(): void {
    this.totalMateriaPrima1 = this.inputValuesMateriaPrima1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // 8.4 Requerimientos Promocionales APORTE PROPIO
  inputValuesReqProm: (number | null)[] = [];
  totalReqProm: number = 0;

  calculateTotal3(): void {
    this.totalReqProm = this.inputValuesReqProm
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  // se INVERTIRA
  inputValuesReqProm1: (number | null)[] = [];
  totalReqProm1: number = 0;

  calculateTotal4(): void {
    this.totalReqProm1 = this.inputValuesReqProm1
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
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
