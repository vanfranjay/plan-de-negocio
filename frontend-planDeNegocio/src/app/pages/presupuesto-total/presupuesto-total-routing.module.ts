import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoTotalComponent } from './presupuesto-total.component';

const routes: Routes = [{ path: '', component: PresupuestoTotalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoTotalRoutingModule { }
