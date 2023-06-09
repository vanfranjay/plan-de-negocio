import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlujoComponent } from './flujo.component';

const routes: Routes = [{ path: '', component: FlujoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlujoRoutingModule { }
