import { Component } from '@angular/core';
import { PresupuestoService } from '../../service/presupuesto/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent {

  //presupuesto del emprendedor
  presupuestoCaOpDetalle1!: string;
  presupuestoCaOpDetalle2!: string;
  presupuestoCaOpDetalle3!: string;
  presupuestoCaOpProcedencia1!: string;
  presupuestoCaOpProcedencia2!: string;
  presupuestoCaOpProcedencia3!: string;
  //8.2 mano de obra del emprendedor
  presupuestoCaOpEmprendedor!: string;
  //8.3 Materia prima
  presupuestoCaOpMatPrimaCant1!: string;
  presupuestoCaOpMatPrimaCant2!: string;
  presupuestoCaOpMatPrimaCant3!: string;
  presupuestoCaOpMatPrimaCant4!: string;
  presupuestoCaOpMatPrimaCant5!: string;
  presupuestoCaOpMatPrimaCant6!: string;
  presupuestoCaOpMatPrimaCant7!: string;
  presupuestoCaOpMatPrimaCant8!: string;
  presupuestoCaOpMatPrimaUnidad1!: string;
  presupuestoCaOpMatPrimaUnidad2!: string;
  presupuestoCaOpMatPrimaUnidad3!: string;
  presupuestoCaOpMatPrimaUnidad4!: string;
  presupuestoCaOpMatPrimaUnidad5!: string;
  presupuestoCaOpMatPrimaUnidad6!: string;
  presupuestoCaOpMatPrimaUnidad7!: string;
  presupuestoCaOpMatPrimaUnidad8!: string;
  presupuestoCaOpMatPrimaDetalle1!: string;
  presupuestoCaOpMatPrimaDetalle2!: string;
  presupuestoCaOpMatPrimaDetalle3!: string;
  presupuestoCaOpMatPrimaDetalle4!: string;
  presupuestoCaOpMatPrimaDetalle5!: string;
  presupuestoCaOpMatPrimaDetalle6!: string;
  presupuestoCaOpMatPrimaDetalle7!: string;
  presupuestoCaOpMatPrimaDetalle8!: string;
  //8.4 requerimientos promocionales
  presupuestoCaOpRequCant1!: string;
  presupuestoCaOpRequCant2!: string;
  presupuestoCaOpRequCant3!: string;
  presupuestoCaOpRequUni1!: string;
  presupuestoCaOpRequUni2!: string;
  presupuestoCaOpRequUni3!: string;
  presupuestoCaOpRequDet1!: string;
  presupuestoCaOpRequDet2!: string;
  presupuestoCaOpRequDet3!: string;
  //8.5 gastos operativos
  presupuestoCaOpGastosCant1!: string;
  presupuestoCaOpGastosCant2!: string;
  presupuestoCaOpGastosCant3!: string;
  presupuestoCaOpGastosUn1!: string;
  presupuestoCaOpGastosUn2!: string;
  presupuestoCaOpGastosUn3!: string;
  presupuestoCaOpGastosDet1!: string;
  presupuestoCaOpGastosDet2!: string;
  presupuestoCaOpGastosDet3!: string;
  //8.6
  //capital de inversión
  presupuestoCapInInfrCan1!: string;
  presupuestoCapInInfrCan2!: string;
  presupuestoCapInInfrCan3!: string;
  presupuestoCapInInfrCan4!: string;
  presupuestoCapInInfrCan5!: string;
  presupuestoCapInInfrUn1!: string;
  presupuestoCapInInfrUn2!: string;
  presupuestoCapInInfrUn3!: string;
  presupuestoCapInInfrUn4!: string;
  presupuestoCapInInfrUn5!: string;
  presupuestoCapInInfrDet1!: string;
  presupuestoCapInInfrDet2!: string;
  presupuestoCapInInfrDet3!: string;
  presupuestoCapInInfrDet4!: string;
  presupuestoCapInInfrDet5!: string;
  //8.7
  presupuestoCapInMaqCan1!: string;
  presupuestoCapInMaqCan2!: string;
  presupuestoCapInMaqCan3!: string;
  presupuestoCapInMaqCan4!: string;
  presupuestoCapInMaqCan5!: string;
  presupuestoCapInMaqCan6!: string;
  presupuestoCapInMaqCan7!: string;
  presupuestoCapInMaqCan8!: string;
  presupuestoCapInMaqCan9!: string;
  presupuestoCapInMaqCan10!: string;
  presupuestoCapInMaqUn1!: string;
  presupuestoCapInMaqUn2!: string;
  presupuestoCapInMaqUn3!: string;
  presupuestoCapInMaqUn4!: string;
  presupuestoCapInMaqUn5!: string;
  presupuestoCapInMaqUn6!: string;
  presupuestoCapInMaqUn7!: string;
  presupuestoCapInMaqUn8!: string;
  presupuestoCapInMaqUn9!: string;
  presupuestoCapInMaqUn10!: string;
  presupuestoCapInMaqDet1!: string;
  presupuestoCapInMaqDet2!: string;
  presupuestoCapInMaqDet3!: string;
  presupuestoCapInMaqDet4!: string;
  presupuestoCapInMaqDet5!: string;
  presupuestoCapInMaqDet6!: string;
  presupuestoCapInMaqDet7!: string;
  presupuestoCapInMaqDet8!: string;
  presupuestoCapInMaqDet9!: string;
  presupuestoCapInMaqDet10!: string;
  //8.8
  presupuestoCapInReqCan1!: string;
  presupuestoCapInReqCan2!: string;
  presupuestoCapInReqCan3!: string;
  presupuestoCapInReqUn1!: string;
  presupuestoCapInReqUn2!: string;
  presupuestoCapInReqUn3!: string;
  presupuestoCapInReqDet1!: string;
  presupuestoCapInReqDet2!: string;
  presupuestoCapInReqDet3!: string;

  presupuesto: string = 'setPresupuesto'

  constructor(
    private presupuestoService: PresupuestoService
  ) {
    this.presupuestoCaOpDetalle1 = this.presupuestoService.getPresupuestoCaOpDetalle1();
    this.presupuestoCaOpDetalle2 = this.presupuestoService.getPresupuestoCaOpDetalle2();
    this.presupuestoCaOpDetalle3 = this.presupuestoService.getPresupuestoCaOpDetalle3();
    this.presupuestoCaOpProcedencia1 = this.presupuestoService.getPresupuestoCaOpProcedencia1();
    this.presupuestoCaOpProcedencia2 = this.presupuestoService.getPresupuestoCaOpProcedencia2();
    this.presupuestoCaOpProcedencia3 = this.presupuestoService.getPresupuestoCaOpProcedencia3();
    this.presupuestoCaOpEmprendedor = this.presupuestoService.getPresupuestoCaOpEmprendedor();
    this.presupuestoCaOpMatPrimaCant1 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant1();
    this.presupuestoCaOpMatPrimaCant2 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant2();
    this.presupuestoCaOpMatPrimaCant3 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant3();
    this.presupuestoCaOpMatPrimaCant4 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant4();
    this.presupuestoCaOpMatPrimaCant5 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant5();
    this.presupuestoCaOpMatPrimaCant6 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant6();
    this.presupuestoCaOpMatPrimaCant7 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant7();
    this.presupuestoCaOpMatPrimaCant8 = this.presupuestoService.getPresupuestoCaOpMatPrimaCant8();
    this.presupuestoCaOpMatPrimaUnidad1 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad1();
    this.presupuestoCaOpMatPrimaUnidad2 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad2();
    this.presupuestoCaOpMatPrimaUnidad3 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad3();
    this.presupuestoCaOpMatPrimaUnidad4 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad4();
    this.presupuestoCaOpMatPrimaUnidad5 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad5();
    this.presupuestoCaOpMatPrimaUnidad6 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad6();
    this.presupuestoCaOpMatPrimaUnidad7 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad7();
    this.presupuestoCaOpMatPrimaUnidad8 = this.presupuestoService.getPresupuestoCaOpMatPrimaUnidad8();
    this.presupuestoCaOpMatPrimaDetalle1 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle1();
    this.presupuestoCaOpMatPrimaDetalle2 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle2();
    this.presupuestoCaOpMatPrimaDetalle3 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle3();
    this.presupuestoCaOpMatPrimaDetalle4 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle4();
    this.presupuestoCaOpMatPrimaDetalle5 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle5();
    this.presupuestoCaOpMatPrimaDetalle6 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle6();
    this.presupuestoCaOpMatPrimaDetalle7 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle7();
    this.presupuestoCaOpMatPrimaDetalle8 = this.presupuestoService.getPresupuestoCaOpMatPrimaDetalle8();
    this.presupuestoCaOpRequCant1 = this.presupuestoService.getPresupuestoCaOpRequCant1();
    this.presupuestoCaOpRequCant2 = this.presupuestoService.getPresupuestoCaOpRequCant2();
    this.presupuestoCaOpRequCant3 = this.presupuestoService.getPresupuestoCaOpRequCant3();
    this.presupuestoCaOpRequUni1 = this.presupuestoService.getPresupuestoCaOpRequUni1();
    this.presupuestoCaOpRequUni2 = this.presupuestoService.getPresupuestoCaOpRequUni2();
    this.presupuestoCaOpRequUni3 = this.presupuestoService.getPresupuestoCaOpRequUni3();
    this.presupuestoCaOpRequDet1 = this.presupuestoService.getPresupuestoCaOpRequDet1();
    this.presupuestoCaOpRequDet2 = this.presupuestoService.getPresupuestoCaOpRequDet2();
    this.presupuestoCaOpRequDet3 = this.presupuestoService.getPresupuestoCaOpRequDet3();
    this.presupuestoCaOpGastosCant1 = this.presupuestoService.getPresupuestoCaOpGastosCant1();
    this.presupuestoCaOpGastosCant2 = this.presupuestoService.getPresupuestoCaOpGastosCant2();
    this.presupuestoCaOpGastosCant3 = this.presupuestoService.getPresupuestoCaOpGastosCant3();
    this.presupuestoCaOpGastosUn1 = this.presupuestoService.getPresupuestoCaOpGastosUn1();
    this.presupuestoCaOpGastosUn2 = this.presupuestoService.getPresupuestoCaOpGastosUn2();
    this.presupuestoCaOpGastosUn3 = this.presupuestoService.getPresupuestoCaOpGastosUn3();
    this.presupuestoCaOpGastosDet1 = this.presupuestoService.getPresupuestoCaOpGastosDet1();
    this.presupuestoCaOpGastosDet2 = this.presupuestoService.getPresupuestoCaOpGastosDet2();
    this.presupuestoCaOpGastosDet3 = this.presupuestoService.getPresupuestoCaOpGastosDet3();
    //capital de inversión
    this.presupuestoCapInInfrCan1 = this.presupuestoService.getPresupuestoCapInInfrCan1();
    this.presupuestoCapInInfrCan2 = this.presupuestoService.getPresupuestoCapInInfrCan2();
    this.presupuestoCapInInfrCan3 = this.presupuestoService.getPresupuestoCapInInfrCan3();
    this.presupuestoCapInInfrCan4 = this.presupuestoService.getPresupuestoCapInInfrCan4();
    this.presupuestoCapInInfrCan5 = this.presupuestoService.getPresupuestoCapInInfrCan5();
    this.presupuestoCapInInfrUn1 = this.presupuestoService.getPresupuestoCapInInfrUn1();
    this.presupuestoCapInInfrUn2 = this.presupuestoService.getPresupuestoCapInInfrUn2();
    this.presupuestoCapInInfrUn3 = this.presupuestoService.getPresupuestoCapInInfrUn3();
    this.presupuestoCapInInfrUn4 = this.presupuestoService.getPresupuestoCapInInfrUn4();
    this.presupuestoCapInInfrUn5 = this.presupuestoService.getPresupuestoCapInInfrUn5();
    this.presupuestoCapInInfrDet1 = this.presupuestoService.getPresupuestoCapInInfrDet1();
    this.presupuestoCapInInfrDet2 = this.presupuestoService.getPresupuestoCapInInfrDet2();
    this.presupuestoCapInInfrDet3 = this.presupuestoService.getPresupuestoCapInInfrDet3();
    this.presupuestoCapInInfrDet4 = this.presupuestoService.getPresupuestoCapInInfrDet4();
    this.presupuestoCapInInfrDet5 = this.presupuestoService.getPresupuestoCapInInfrDet5();
    this.presupuestoCapInMaqCan1 = this.presupuestoService.getPresupuestoCapInMaqCan1();
    this.presupuestoCapInMaqCan2 = this.presupuestoService.getPresupuestoCapInMaqCan2();
    this.presupuestoCapInMaqCan3 = this.presupuestoService.getPresupuestoCapInMaqCan3();
    this.presupuestoCapInMaqCan4 = this.presupuestoService.getPresupuestoCapInMaqCan4();
    this.presupuestoCapInMaqCan5 = this.presupuestoService.getPresupuestoCapInMaqCan5();
    this.presupuestoCapInMaqCan6 = this.presupuestoService.getPresupuestoCapInMaqCan6();
    this.presupuestoCapInMaqCan7 = this.presupuestoService.getPresupuestoCapInMaqCan7();
    this.presupuestoCapInMaqCan8 = this.presupuestoService.getPresupuestoCapInMaqCan8();
    this.presupuestoCapInMaqCan9 = this.presupuestoService.getPresupuestoCapInMaqCan9();
    this.presupuestoCapInMaqCan10 = this.presupuestoService.getPresupuestoCapInMaqCan10();
    this.presupuestoCapInMaqUn1 = this.presupuestoService.getPresupuestoCapInMaqUn1();
    this.presupuestoCapInMaqUn2 = this.presupuestoService.getPresupuestoCapInMaqUn2();
    this.presupuestoCapInMaqUn3 = this.presupuestoService.getPresupuestoCapInMaqUn3();
    this.presupuestoCapInMaqUn4 = this.presupuestoService.getPresupuestoCapInMaqUn4();
    this.presupuestoCapInMaqUn5 = this.presupuestoService.getPresupuestoCapInMaqUn5();
    this.presupuestoCapInMaqUn6 = this.presupuestoService.getPresupuestoCapInMaqUn6();
    this.presupuestoCapInMaqUn7 = this.presupuestoService.getPresupuestoCapInMaqUn7();
    this.presupuestoCapInMaqUn8 = this.presupuestoService.getPresupuestoCapInMaqUn8();
    this.presupuestoCapInMaqUn9 = this.presupuestoService.getPresupuestoCapInMaqUn9();
    this.presupuestoCapInMaqUn10 = this.presupuestoService.getPresupuestoCapInMaqUn10();
    this.presupuestoCapInMaqDet1 = this.presupuestoService.getPresupuestoCapInMaqDet1();
    this.presupuestoCapInMaqDet2 = this.presupuestoService.getPresupuestoCapInMaqDet2();
    this.presupuestoCapInMaqDet3 = this.presupuestoService.getPresupuestoCapInMaqDet3();
    this.presupuestoCapInMaqDet4 = this.presupuestoService.getPresupuestoCapInMaqDet4();
    this.presupuestoCapInMaqDet5 = this.presupuestoService.getPresupuestoCapInMaqDet5();
    this.presupuestoCapInMaqDet6 = this.presupuestoService.getPresupuestoCapInMaqDet6();
    this.presupuestoCapInMaqDet7 = this.presupuestoService.getPresupuestoCapInMaqDet7();
    this.presupuestoCapInMaqDet8 = this.presupuestoService.getPresupuestoCapInMaqDet8();
    this.presupuestoCapInMaqDet9 = this.presupuestoService.getPresupuestoCapInMaqDet9();
    this.presupuestoCapInMaqDet10 = this.presupuestoService.getPresupuestoCapInMaqDet10();
    this.presupuestoCapInReqCan1 = this.presupuestoService.getPresupuestoCapInReqCan1();
    this.presupuestoCapInReqCan2 = this.presupuestoService.getPresupuestoCapInReqCan2();
    this.presupuestoCapInReqCan3 = this.presupuestoService.getPresupuestoCapInReqCan3();
    this.presupuestoCapInReqUn1 = this.presupuestoService.getPresupuestoCapInReqUn1();
    this.presupuestoCapInReqUn2 = this.presupuestoService.getPresupuestoCapInReqUn2();
    this.presupuestoCapInReqUn3 = this.presupuestoService.getPresupuestoCapInReqUn3();
    this.presupuestoCapInReqDet1 = this.presupuestoService.getPresupuestoCapInReqDet1();
    this.presupuestoCapInReqDet2 = this.presupuestoService.getPresupuestoCapInReqDet2();
    this.presupuestoCapInReqDet3 = this.presupuestoService.getPresupuestoCapInReqDet3();
  }

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
  calcularCapitalInversionApPro() {
    this.totalCapitalInversionApPo =
      (this.presupuestoService.getTotalInfr() ?? 0) +
      (this.presupuestoService.getTotalMaq() ?? 0) +
      (this.presupuestoService.getTotalLegal() ?? 0);
    this.presupuestoService.setTotalCapitalInversionApPo(this.totalCapitalInversionApPo);
  }
  calcularCapitalInversionSeInvertira() {
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
    if (this.input1 < 0) {
      this.input1 = this.input1 * (-1);
      this.inputValuesDetalle[index] = this.input1;
    } else {
      this.input1 = this.input1;
    }
    this.total = this.inputValuesDetalle
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
    this.inputValuesMateriaPrima[3] = this.presupuestoService.getInputValuesMateriaPrima3();
    this.inputValuesMateriaPrima[4] = this.presupuestoService.getInputValuesMateriaPrima4();
    this.inputValuesMateriaPrima[5] = this.presupuestoService.getInputValuesMateriaPrima5();
    this.inputValuesMateriaPrima[6] = this.presupuestoService.getInputValuesMateriaPrima6();
    this.inputValuesMateriaPrima[7] = this.presupuestoService.getInputValuesMateriaPrima7();
    this.totalMateriaPrima = this.presupuestoService.getTotalMateriaPrima();

    this.inputValuesMateriaPrima1[0] = this.presupuestoService.getInputValuesMateriaPrima10();
    this.inputValuesMateriaPrima1[1] = this.presupuestoService.getInputValuesMateriaPrima11();
    this.inputValuesMateriaPrima1[2] = this.presupuestoService.getInputValuesMateriaPrima12();
    this.inputValuesMateriaPrima1[3] = this.presupuestoService.getInputValuesMateriaPrima13();
    this.inputValuesMateriaPrima1[4] = this.presupuestoService.getInputValuesMateriaPrima14();
    this.inputValuesMateriaPrima1[5] = this.presupuestoService.getInputValuesMateriaPrima15();
    this.inputValuesMateriaPrima1[6] = this.presupuestoService.getInputValuesMateriaPrima16();
    this.inputValuesMateriaPrima1[7] = this.presupuestoService.getInputValuesMateriaPrima17();
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
    this.inputValuesInfr[3] = this.presupuestoService.getInputValuesInfr3();
    this.inputValuesInfr[4] = this.presupuestoService.getInputValuesInfr4();
    this.totalInfr = this.presupuestoService.getTotalInfr();

    this.inputValuesInfr1[0] = this.presupuestoService.getInputValuesInfr10();
    this.inputValuesInfr1[1] = this.presupuestoService.getInputValuesInfr11();
    this.inputValuesInfr1[2] = this.presupuestoService.getInputValuesInfr12();
    this.inputValuesInfr1[3] = this.presupuestoService.getInputValuesInfr13();
    this.inputValuesInfr1[4] = this.presupuestoService.getInputValuesInfr14();
    this.totalInfr1 = this.presupuestoService.getTotalInfr1();

    this.inputValuesMaq[0] = this.presupuestoService.getInputValuesMaq0();
    this.inputValuesMaq[1] = this.presupuestoService.getInputValuesMaq1();
    this.inputValuesMaq[2] = this.presupuestoService.getInputValuesMaq2();
    this.inputValuesMaq[3] = this.presupuestoService.getInputValuesMaq3();
    this.inputValuesMaq[4] = this.presupuestoService.getInputValuesMaq4();
    this.inputValuesMaq[5] = this.presupuestoService.getInputValuesMaq5();
    this.inputValuesMaq[6] = this.presupuestoService.getInputValuesMaq6();
    this.inputValuesMaq[7] = this.presupuestoService.getInputValuesMaq7();
    this.inputValuesMaq[8] = this.presupuestoService.getInputValuesMaq8();
    this.inputValuesMaq[9] = this.presupuestoService.getInputValuesMaq9();
    this.totalMaq = this.presupuestoService.getTotalMaq();

    this.inputValuesMaq1[0] = this.presupuestoService.getInputValuesMaq10();
    this.inputValuesMaq1[1] = this.presupuestoService.getInputValuesMaq11();
    this.inputValuesMaq1[2] = this.presupuestoService.getInputValuesMaq12();
    this.inputValuesMaq1[3] = this.presupuestoService.getInputValuesMaq13();
    this.inputValuesMaq1[4] = this.presupuestoService.getInputValuesMaq14();
    this.inputValuesMaq1[5] = this.presupuestoService.getInputValuesMaq15();
    this.inputValuesMaq1[6] = this.presupuestoService.getInputValuesMaq16();
    this.inputValuesMaq1[7] = this.presupuestoService.getInputValuesMaq17();
    this.inputValuesMaq1[8] = this.presupuestoService.getInputValuesMaq18();
    this.inputValuesMaq1[9] = this.presupuestoService.getInputValuesMaq19();
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

  asignarValor(value: string, valor: any) {
    const valueM: string = this.presupuesto + value;      //setHome${NombreDeudor}
    (this.presupuestoService as any)[valueM](valor);
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
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesMateriaPrima[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalMateriaPrima = this.inputValuesMateriaPrima
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
      case 3:
        this.presupuestoService.setInputValuesMateriaPrima3(this.input2);
        break;
      case 4:
        this.presupuestoService.setInputValuesMateriaPrima4(this.input2);
        break;
      case 5:
        this.presupuestoService.setInputValuesMateriaPrima5(this.input2);
        break;
      case 6:
        this.presupuestoService.setInputValuesMateriaPrima6(this.input2);
        break;
      case 7:
        this.presupuestoService.setInputValuesMateriaPrima7(this.input2);
        break;
    }
    this.calcularTotalOperaciones();
  }
  // se INVERTIRA
  inputValuesMateriaPrima1: (number | null)[] = [];
  totalMateriaPrima1: number = 0;

  calculateTotal2(index: number): void {
    this.input2 = this.inputValuesMateriaPrima1[index] ?? 0;
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesMateriaPrima1[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalMateriaPrima1 = this.inputValuesMateriaPrima1
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
      case 3:
        this.presupuestoService.setInputValuesMateriaPrima13(this.input2);
        break;
      case 4:
        this.presupuestoService.setInputValuesMateriaPrima14(this.input2);
        break;
      case 5:
        this.presupuestoService.setInputValuesMateriaPrima15(this.input2);
        break;
      case 6:
        this.presupuestoService.setInputValuesMateriaPrima16(this.input2);
        break;
      case 7:
        this.presupuestoService.setInputValuesMateriaPrima17(this.input2);
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
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesReqProm[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalReqProm = this.inputValuesReqProm
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesReqProm1[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalReqProm1 = this.inputValuesReqProm1
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesGastosOp[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalGastosOp = this.inputValuesGastosOp
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesInfr[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalInfr = this.inputValuesInfr
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
      case 3:
        this.presupuestoService.setInputValuesInfr3(this.input2);
        break;
      case 4:
        this.presupuestoService.setInputValuesInfr4(this.input2);
        break;
    }
    this.calcularCapitalInversionApPro();
  }
  // se INVERTIRA
  inputValuesInfr1: (number | null)[] = [];
  totalInfr1: number = 0;

  calculateTotal7(index: number): void {
    this.input2 = this.inputValuesInfr1[index] ?? 0;
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesInfr1[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalInfr1 = this.inputValuesInfr1
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
      case 3:
        this.presupuestoService.setInputValuesInfr13(this.input2);
        break;
      case 4:
        this.presupuestoService.setInputValuesInfr14(this.input2);
        break;
    }
    this.calcularCapitalInversionSeInvertira();
  }
  // 8.7 Maquinaria, Equipos, Vehículos y/o Ganado
  inputValuesMaq: (number | null)[] = [];
  totalMaq: number = 0;

  calculateTotal8(index: number): void {
    this.input2 = this.inputValuesMaq[index] ?? 0;
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesMaq[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalMaq = this.inputValuesMaq
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
      case 3:
        this.presupuestoService.setInputValuesMaq3(this.input2);
        break;
      case 4:
        this.presupuestoService.setInputValuesMaq4(this.input2);
        break;
      case 5:
        this.presupuestoService.setInputValuesMaq5(this.input2);
        break;
      case 6:
        this.presupuestoService.setInputValuesMaq6(this.input2);
        break;
      case 7:
        this.presupuestoService.setInputValuesMaq7(this.input2);
        break;
      case 8:
        this.presupuestoService.setInputValuesMaq8(this.input2);
        break;
      case 9:
        this.presupuestoService.setInputValuesMaq9(this.input2);
        break;
    }
    this.calcularCapitalInversionApPro();
  }
  // se INVERTIRA
  inputValuesMaq1: (number | null)[] = [];
  totalMaq1: number = 0;

  calculateTotal9(index: number): void {
    this.input2 = this.inputValuesMaq1[index] ?? 0;
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesMaq1[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalMaq1 = this.inputValuesMaq1
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
      case 3:
        this.presupuestoService.setInputValuesMaq13(this.input2);
        break;
      case 4:
        this.presupuestoService.setInputValuesMaq14(this.input2);
        break;
      case 5:
        this.presupuestoService.setInputValuesMaq15(this.input2);
        break;
      case 6:
        this.presupuestoService.setInputValuesMaq16(this.input2);
        break;
      case 7:
        this.presupuestoService.setInputValuesMaq17(this.input2);
        break;
      case 8:
        this.presupuestoService.setInputValuesMaq18(this.input2);
        break;
      case 9:
        this.presupuestoService.setInputValuesMaq19(this.input2);
        break;
    }
    this.calcularCapitalInversionSeInvertira();
  }
  // 8.8 Requirimientos Legales APORTE PROPIO
  inputValuesLegal: (number | null)[] = [];
  totalLegal: number = 0;

  calculateTotal10(index: number): void {
    this.input2 = this.inputValuesLegal[index] ?? 0;
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesLegal[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalLegal = this.inputValuesLegal
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
    if (this.input2 < 0) {
      this.input2 = this.input2 * (-1);
      this.inputValuesLegal1[index] = this.input2;
    } else {
      this.input2 = this.input2;
    }
    this.totalLegal1 = this.inputValuesLegal1
      .map(value => parseFloat(value?.toString() || '0') || 0)
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
  formatearNumero(numero: number): string {
    if (numero === 0) {
      return '';
    } else {
      const redondeo = Math.round(numero * 100) / 100; // Redondea a 0 decimales
      const valorAbsoluto = Math.abs(redondeo); // Valor absoluto

      if (valorAbsoluto === 0) {
        return '';
      } else {
        const resultado = redondeo < 0 ? `${valorAbsoluto}` : `${valorAbsoluto}`;
        const partes = resultado.split('.');
        partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const resultadoFormateado = partes.join(',');

        return resultadoFormateado === 'NaN' ? '' : 'Bs. ' + resultadoFormateado;
      }
    }
  }
}
