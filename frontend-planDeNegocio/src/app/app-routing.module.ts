import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'presupuesto', loadChildren: () => import('./pages/presupuesto/presupuesto.module').then(m => m.PresupuestoModule) },
  { path: 'pregunta1', loadChildren: () => import('./pages/pregunta1/pregunta1.module').then(m => m.Pregunta1Module) },
  { path: 'pregunta2', loadChildren: () => import('./pages/pregunta2/pregunta2.module').then(m => m.Pregunta2Module) },
  { path: 'complementario', loadChildren: () => import('./pages/complementario/complementario.module').then(m => m.ComplementarioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
