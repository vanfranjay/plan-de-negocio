import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pregunta1Component } from './pregunta1.component';

const routes: Routes = [{ path: '', component: Pregunta1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pregunta1RoutingModule { }
