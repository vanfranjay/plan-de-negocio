import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public colSize!: number;
  form: FormGroup;

  // name: FormControl = new FormControl('', [Validators.required]);
  // ci: FormControl = new FormControl('', [Validators.required]);
  // extension: FormControl= new FormControl('');
  // edad: FormControl= new FormControl('');
  // EstadoCivil: FormControl= new FormControl('');
  // telefono: FormControl= new FormControl('');
  // direccion: FormControl= new FormControl('');

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        nameDeudor: ['', Validators.required],
        ciDeudor: ['', Validators.required],
        extensionDeudor: ['', Validators.required],
        edadDeudor: ['', Validators.required],
        EstadoCivilDeudor: ['', Validators.required],
        telefonoDeudor: ['', Validators.required],
        direccionDeudor: ['', Validators.required]
      });
    }
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(result => {
        if (result.matches) {
          this.colSize = this.calculateColSize(result.breakpoints);
        } else {
          this.colSize = 4; // Pantallas más grandes, 4 columnas
        }
      });
  }
  calculateColSize(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 1; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 2; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 3; // Pantallas medianas, 3 columnas
    } else {
      return 4; // Por defecto, 4 columnas
    }
  }
  sendValues(){
    console.log(this.form.get('name')?.value);
    this.form.reset();
  }

}
