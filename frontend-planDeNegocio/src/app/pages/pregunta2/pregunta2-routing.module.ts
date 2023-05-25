import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pregunta2Component } from './pregunta2.component';

const routes: Routes = [{ path: '', component: Pregunta2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pregunta2RoutingModule { }
