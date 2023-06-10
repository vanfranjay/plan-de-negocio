import { Component } from '@angular/core';
import { ComplementarioService } from 'src/app/service/complementario/complementario.service';

@Component({
  selector: 'app-complementario',
  templateUrl: './complementario.component.html',
  styleUrls: ['./complementario.component.scss']
})
export class ComplementarioComponent {

  complementoDedicacionEmprendedor!: string;
  complementoEntiFinancieras!: string;
  complementoExpAct!: string;
  complementoGarantia!: string;
  complementoOtros!: string;

  complementario: string = 'setComplemento';
  constructor(
    private complementarioService: ComplementarioService,
  ) {
    this.complementoDedicacionEmprendedor = this.complementarioService.getComplementoDedicacionEmprendedor();
    this.complementoEntiFinancieras = this.complementarioService.getComplementoEntiFinancieras();
    this.complementoExpAct = this.complementarioService.getComplementoExpAct();
    this.complementoGarantia = this.complementarioService.getComplementoGarantia();
    this.complementoOtros = this.complementarioService.getComplementoOtros();
  }
  asignarValor(value: string, valor: any) {
    const valueM: string = this.complementario + value;      //setHome${NombreDeudor}
    (this.complementarioService as any)[valueM](valor);
  }

}
