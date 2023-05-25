import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pregunta1RoutingModule } from './pregunta1-routing.module';
import { Pregunta1Component } from './pregunta1.component';


@NgModule({
  declarations: [
    Pregunta1Component
  ],
  imports: [
    CommonModule,
    Pregunta1RoutingModule
  ]
})
export class Pregunta1Module { }
