import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      const segment = urlSegments[0].path;
      if (Object.values(Tab).includes(segment as Tab)) {
        this.selectedTab = segment as Tab;
      }
    });
  }

  isSelected(tab: Tab): boolean {
    return this.selectedTab === tab;
  }

  isMenuOpen = false;

  selectOption(option: string) {
    // Lógica para manejar la selección de opciones del menú
    console.log('Opción seleccionada:', option);
  }

  onMenuClosed() {
    this.isMenuOpen = false;
  }
}
