import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { PresupuestoComponent } from './presupuesto.component';


@NgModule({
  declarations: [
    PresupuestoComponent
  ],
  imports: [
    CommonModule,
    PresupuestoRoutingModule
  ]
})
export class PresupuestoModule { }
