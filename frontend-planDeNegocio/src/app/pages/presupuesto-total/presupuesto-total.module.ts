import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoTotalRoutingModule } from './presupuesto-total-routing.module';
import { PresupuestoTotalComponent } from './presupuesto-total.component';


@NgModule({
  declarations: [
    PresupuestoTotalComponent
  ],
  imports: [
    CommonModule,
    PresupuestoTotalRoutingModule
  ]
})
export class PresupuestoTotalModule { }
