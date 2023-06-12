import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  constructor() { }

  private rangoB!: number;
  public getRangoB(): number {
    return this.rangoB;
  }
  public setRangoB(value: number) {
    this.rangoB = value;
  }
  private rangoC!: number;
  public getRangoC(): number {
    return this.rangoC;
  }
  public setRangoC(value: number) {
    this.rangoC = value;
  }
  private rangoA!: number;
  public getRangoA(): number {
    return this.rangoA;
  }
  public setRangoA(value: number) {
    this.rangoA = value;
  }
}
