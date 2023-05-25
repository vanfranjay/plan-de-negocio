import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplementarioRoutingModule } from './complementario-routing.module';
import { ComplementarioComponent } from './complementario.component';


@NgModule({
  declarations: [
    ComplementarioComponent
  ],
  imports: [
    CommonModule,
    ComplementarioRoutingModule
  ]
})
export class ComplementarioModule { }
