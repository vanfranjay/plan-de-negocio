import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pregunta2RoutingModule } from './pregunta2-routing.module';
import { Pregunta2Component } from './pregunta2.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    Pregunta2Component
  ],
  imports: [
    CommonModule,
    Pregunta2RoutingModule,
    MaterialModule
  ]
})
export class Pregunta2Module { }
