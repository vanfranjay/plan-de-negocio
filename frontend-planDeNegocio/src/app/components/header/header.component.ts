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
  ngOnInit() {
    // Recuperar el estado seleccionado del almacenamiento local
    const selectedTab = localStorage.getItem('selectedTab');
    if (selectedTab === 'presupuesto') {
      this.isHomeSelected = false;
      this.isPresupuestoSelected = true;
    } else {
      // Por defecto, seleccionar la pestaña "Home"
      this.isHomeSelected = true;
      this.isPresupuestoSelected = false;
    }
  }

  redirectToHome() {
    this.router.navigate(['/home']);
    this.isHomeSelected = true;
    this.isPresupuestoSelected = false;
    localStorage.setItem('selectedTab', 'home');
  }
  redirectToPresupuesto() {
    this.router.navigate(['/presupuesto']);
    this.isPresupuestoSelected = true;
    this.isHomeSelected = false;
    localStorage.setItem('selectedTab', 'presupuesto');
  }
}
