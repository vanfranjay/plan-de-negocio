import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlujoRoutingModule } from './flujo-routing.module';
import { FlujoComponent } from './flujo.component';
import { MaterialModule } from 'src/app/material.module';
import { PdfContentComponent } from 'src/app/components/pdf-content/pdf-content.component';

@NgModule({
  declarations: [
    FlujoComponent,
    PdfContentComponent
  ],
  imports: [
    CommonModule,
    FlujoRoutingModule,
    MaterialModule
  ]
})
export class FlujoModule { }
