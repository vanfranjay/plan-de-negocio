import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplementarioRoutingModule } from './complementario-routing.module';
import { ComplementarioComponent } from './complementario.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ComplementarioComponent
  ],
  imports: [
    CommonModule,
    ComplementarioRoutingModule,
    MaterialModule
  ]
})
export class ComplementarioModule { }
