import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostosComponent } from './costos.component';

const routes: Routes = [{ path: '', component: CostosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostosRoutingModule { }
