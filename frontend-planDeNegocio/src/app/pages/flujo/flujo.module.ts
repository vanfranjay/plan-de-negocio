import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlujoRoutingModule } from './flujo-routing.module';
import { FlujoComponent } from './flujo.component';


@NgModule({
  declarations: [
    FlujoComponent
  ],
  imports: [
    CommonModule,
    FlujoRoutingModule
  ]
})
export class FlujoModule { }
