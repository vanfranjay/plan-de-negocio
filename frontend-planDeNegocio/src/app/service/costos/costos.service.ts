import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  constructor() { }

  private rangoA!: number;
  public getRangoA(): number {
    return this.rangoA;
  }
  public setRangoA(value: number) {
    this.rangoA = value;
  }
}
