import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplementarioComponent } from './complementario.component';

const routes: Routes = [{ path: '', component: ComplementarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplementarioRoutingModule { }
