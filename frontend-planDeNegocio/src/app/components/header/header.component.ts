import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

enum Tab {
  Home = 'home',
  Presupuesto = 'presupuesto',
  Complementario = 'complementario',
  Pregunta1 = 'pregunta1',
  Pregunta2 = 'pregunta2'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedTab: Tab = Tab.Home;
  Tab = Tab;

  constructor(private router: Router) {}

  ngOnInit() {
    // Recuperar el estado seleccionado del almacenamiento local
    const storedTab = localStorage.getItem('selectedTab');
    if (Object.values(Tab).includes(storedTab as Tab)) {
      this.selectedTab = storedTab as Tab;
    }
  }

  navigateTo(tab: Tab) {
    this.selectedTab = tab;
    this.router.navigate(['/', tab]);
    localStorage.setItem('selectedTab', tab);
  }

  isSelected(tab: Tab): boolean {
    return this.selectedTab === tab;
  }
}
