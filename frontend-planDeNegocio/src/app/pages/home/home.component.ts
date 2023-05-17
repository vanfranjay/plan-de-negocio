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
  miCampoNumerico =null;
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
        nameDeudor: ['', Validators.required],
        ciDeudor: ['', Validators.required],
        extensionDeudor: ['', Validators.required],
        edadDeudor: ['', Validators.required],
        EstadoCivilDeudor: ['', Validators.required],
        telefonoDeudor: ['', Validators.required],
        direccionDeudor: ['', Validators.required],

        nameCodeudor: ['', Validators.required],
        ciCodeudor: ['', Validators.required],
        extensionCodeudor: ['', Validators.required],
        edadCodeudor: ['', Validators.required],
        EstadoCivilCodeudor: ['', Validators.required],
        telefonoCodeudor: ['', Validators.required],
        direccionCodeudor: ['', Validators.required],

        razonSocial: ['', Validators.required],
        nit: ['', Validators.required],
        sigla: ['', Validators.required],
        tipoFormaSociendadComercial: ['', Validators.required],
        representanteLegal: ['', Validators.required],
        domicilioLegal: ['', Validators.required],

        actividad: ['', Validators.required],
        departamento: ['', Validators.required],
        municipio: ['', Validators.required],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required]
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

}
