import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostosRoutingModule } from './costos-routing.module';
import { CostosComponent } from './costos.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CostosComponent
  ],
  imports: [
    CommonModule,
    CostosRoutingModule,
    MaterialModule
  ]
})
export class CostosModule { }
