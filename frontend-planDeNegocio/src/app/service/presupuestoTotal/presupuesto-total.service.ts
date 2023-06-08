import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoTotalService {
  private totalAportePropio!: number;
  private totalPlanInversion!: number;

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
