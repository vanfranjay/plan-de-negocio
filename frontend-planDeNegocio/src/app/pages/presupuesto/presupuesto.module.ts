import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { PresupuestoComponent } from './presupuesto.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PresupuestoComponent
  ],
  imports: [
    CommonModule,
    PresupuestoRoutingModule,
    MaterialModule
  ]
})
export class PresupuestoModule { }
