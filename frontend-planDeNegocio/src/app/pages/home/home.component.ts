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
  disableSelect = new FormControl(false);
  siControl = new FormControl(false);
  noControl = new FormControl(false);
  tiempoInicioHabilitado = false;
  miCampoNumerico = null;
  // disableSelect: boolean = true;

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
      nameDeudor: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(30)]],
      ciDeudor: ['', [Validators.required, Validators.pattern(/^[0-9]+[a-zA-Z]?$/)]],
      extensionDeudor: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(20)]],
      edadDeudor: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(2), Validators.min(21)]],
      EstadoCivilDeudor: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      telefonoDeudor: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(8)]],
      direccionDeudor: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/), Validators.maxLength(120)]],

      nameCodeudor: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(30)]],
      ciCodeudor: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      extensionCodeudor: ['', [Validators.required, , Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(20)]],
      edadCodeudor: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(2), Validators.min(21)]],
      EstadoCivilCodeudor: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      telefonoCodeudor: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(8)]],
      direccionCodeudor: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/), Validators.maxLength(120)]],

      razonSocial: ['', [Validators.required, Validators.pattern(/^[\w\s.]*$/)]],
      nit: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(30)]],
      sigla: ['', [Validators.required, Validators.pattern(/^\S*$/), Validators.maxLength(20)]],
      tipoFormaSociendadComercial: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s.]*$/), Validators.maxLength(10)]],
      representanteLegal: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(30)]],
      domicilioLegal: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s.]*$/), Validators.maxLength(120)]],

      actividad: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(100)]],
      departamento: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(20)]],
      municipio: ['', [Validators.required, Validators.pattern(/^\S*$/), Validators.maxLength(20)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(8)]],
      direccion: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/), Validators.maxLength(120)]]
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
  sendValues() {
    console.log(this.form.get('name')?.value);
    this.form.reset();
  }
  toggleCheckbox(checkbox: string) {
    if (checkbox === 'si') {
      this.noControl.setValue(false);
      this.tiempoInicioHabilitado = this.siControl.value ?? false;
      if (!this.siControl.value) {
        this.resetearCampo();
      }
    } else if (checkbox === 'no') {
      this.siControl.setValue(false);
      this.tiempoInicioHabilitado = this.siControl.value ?? false;
      if (!this.siControl.value) {
        this.resetearCampo();
      }
    }
  }
  resetearCampo() {
    this.miCampoNumerico = null;
  }
  limpiarCampos() {
    this.form.reset();
  }

}
