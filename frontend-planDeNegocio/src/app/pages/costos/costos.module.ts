import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostosRoutingModule } from './costos-routing.module';
import { CostosComponent } from './costos.component';


@NgModule({
  declarations: [
    CostosComponent
  ],
  imports: [
    CommonModule,
    CostosRoutingModule
  ]
})
export class CostosModule { }
