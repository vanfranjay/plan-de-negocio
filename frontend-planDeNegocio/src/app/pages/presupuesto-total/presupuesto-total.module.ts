import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoTotalRoutingModule } from './presupuesto-total-routing.module';
import { PresupuestoTotalComponent } from './presupuesto-total.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PresupuestoTotalComponent
  ],
  imports: [
    CommonModule,
    PresupuestoTotalRoutingModule,
    MaterialModule
  ]
})
export class PresupuestoTotalModule { }
