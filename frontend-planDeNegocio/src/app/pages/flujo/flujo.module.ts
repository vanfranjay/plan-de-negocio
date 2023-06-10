import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlujoRoutingModule } from './flujo-routing.module';
import { FlujoComponent } from './flujo.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    FlujoComponent
  ],
  imports: [
    CommonModule,
    FlujoRoutingModule,
    MaterialModule
  ]
})
export class FlujoModule { }
