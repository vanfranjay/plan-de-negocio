import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplementarioService {

  constructor() { }

  private complementoDedicacionEmprendedor!: string;
  public getComplementoDedicacionEmprendedor(): string {
    return this.complementoDedicacionEmprendedor;
  }
  public setComplementoDedicacionEmprendedor(value: string) {
    this.complementoDedicacionEmprendedor = value;
  }
  private complementoEntiFinancieras!: string;
  public getComplementoEntiFinancieras(): string {
    return this.complementoEntiFinancieras;
  }
  public setComplementoEntiFinancieras(value: string) {
    this.complementoEntiFinancieras = value;
  }
  private complementoExpAct!: string;
  public getComplementoExpAct(): string {
    return this.complementoExpAct;
  }
  public setComplementoExpAct(value: string) {
    this.complementoExpAct = value;
  }
  private complementoGarantia!: string;
  public getComplementoGarantia(): string {
    return this.complementoGarantia;
  }
  public setComplementoGarantia(value: string) {
    this.complementoGarantia = value;
  }
  private complementoOtros!: string;
  public getComplementoOtros(): string {
    return this.complementoOtros;
  }
  public setComplementoOtros(value: string) {
    this.complementoOtros = value;
  }
}
