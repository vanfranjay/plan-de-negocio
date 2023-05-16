import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  isHomeSelected: boolean = true;
  isPresupuestoSelected: boolean = false;
  redirectToHome() {
    this.router.navigate(['/home']);
    this.isHomeSelected = true;
    this.isPresupuestoSelected = false;
  }
  redirectToPresupuesto() {
    this.router.navigate(['/presupuesto']);
    this.isPresupuestoSelected = true;
    this.isHomeSelected = false;
  }
}
