import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HomesService } from 'src/app/service/homes/homes.service';

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


  //variables deudor
  homeNombreDeudor!: string;
  homebreCiDeudor!: number;
  homeExtensionDeudor!: string;
  homeEdadDeudor!: number;
  homeEstadoCivilDeudor!: string;
  homeTelefonoDeudor!: number;
  homeDireccionDeudor!: string;

  //variables Codeudor
  homeNombreCodeudor!: string;
  homebreCiCodeudor!: number;
  homeExtensionCodeudor!: string;
  homeEdadCodeudor!: number;
  homeEstadoCivilCodeudor!: string;
  homeTelefonoCodeudor!: number;
  homeDireccionCodeudor!: string;

  //variable persona jurídica
  homeRazonSocilJuridica!: string;
  homeNitJuridica!: string;
  homeSiglaJuridica!: string;
  homeSociedadJuridica!: string;
  homeRepresentanteLegalJuridica!: string;
  homeDomicilioJuridica!: string;

  //variable emprendimiento
  homeActividadEmpre!: string;
  homeDeptEmpre!: string;
  homeMunicipioEmpre!: string;
  homeTelefonoEmpre!: number;
  homeDireccionEmpre!: string;

  //variables descripción plan de negocio
  homeDescripPlanNeg!: string;
  homeSiNoPlanNeg!: string;
  homeMesPlanNeg!: number;
  homeInversionPlanNeg!: string;
  homeRentablePlanNeg!: string;

  //variable descripción del producto o servicio
  homeNombreProd1!: string;
  homeNombreProd2!: string;
  homeNombreProd3!: string;
  homeNombreProd4!: string;
  homeProcElabProd1!: string;
  homeProcElabProd2!: string;
  homeProcElabProd3!: string;
  homeProcElabProd4!: string;
  homeCaractProd1!: string;
  homeCaractProd2!: string;
  homeCaractProd3!: string;
  homeCaractProd4!: string;

  home: string = 'home';
  home1: string = 'setHome';

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
    private fb: FormBuilder,
    private homesService: HomesService,
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

    //variables deudor
    this.homeNombreDeudor = this.homesService.getHomeNombreDeudor();
    this.homebreCiDeudor = this.homesService.getHomebreCiDeudor();
    this.homeExtensionDeudor = this.homesService.getHomeExtensionDeudor();
    this.homeEdadDeudor = this.homesService.getHomeEdadDeudor();
    this.homeEstadoCivilDeudor = this.homesService.getHomeEstadoCivilDeudor();
    this.homeTelefonoDeudor = this.homesService.getHomeTelefonoDeudor();
    this.homeDireccionDeudor = this.homesService.getHomeDireccionDeudor();

    //variables Codeudor
    this.homeNombreCodeudor = this.homesService.getHomeNombreCodeudor();
    this.homebreCiCodeudor = this.homesService.getHomebreCiCodeudor();
    this.homeExtensionCodeudor = this.homesService.getHomeExtensionCodeudor();
    this.homeEdadCodeudor = this.homesService.getHomeEdadCodeudor();
    this.homeEstadoCivilCodeudor = this.homesService.getHomeEstadoCivilCodeudor();
    this.homeTelefonoCodeudor = this.homesService.getHomeTelefonoCodeudor();
    this.homeDireccionCodeudor = this.homesService.getHomeDireccionCodeudor();

    //variable persona jurídica
    this.homeRazonSocilJuridica = this.homesService.getHomeRazonSocilJuridica();
    this.homeNitJuridica = this.homesService.getHomeNitJuridica();
    this.homeSiglaJuridica = this.homesService.getHomeSiglaJuridica();
    this.homeSociedadJuridica = this.homesService.getHomeSociedadJuridica();
    this.homeRepresentanteLegalJuridica = this.homesService.getHomeRepresentanteLegalJuridica();
    this.homeDomicilioJuridica = this.homesService.getHomeDomicilioJuridica();

    //variable emprendimiento
    this.homeActividadEmpre = this.homesService.getHomeActividadEmpre();
    this.homeDeptEmpre = this.homesService.getHomeDeptEmpre();
    this.homeMunicipioEmpre = this.homesService.getHomeMunicipioEmpre();
    this.homeTelefonoEmpre = this.homesService.getHomeTelefonoEmpre();
    this.homeDireccionEmpre = this.homesService.getHomeDireccionEmpre();

    //variables descripción plan de negocio
    this.homeDescripPlanNeg = this.homesService.getHomeDescripPlanNeg();
    this.homeSiNoPlanNeg = this.homesService.getHomeSiNoPlanNeg();
    this.homeMesPlanNeg = this.homesService.getHomeMesPlanNeg();
    this.homeInversionPlanNeg = this.homesService.getHomeInversionPlanNeg();
    this.homeRentablePlanNeg = this.homesService.getHomeRentablePlanNeg();

    //variable descripción del producto o servicio
    this.homeNombreProd1 = this.homesService.getHomeNombreProd1();
    this.homeNombreProd2 = this.homesService.getHomeNombreProd2();
    this.homeNombreProd3 = this.homesService.getHomeNombreProd3();
    this.homeNombreProd4 = this.homesService.getHomeNombreProd4();
    this.homeProcElabProd1 = this.homesService.getHomeProcElabProd1();
    this.homeProcElabProd2 = this.homesService.getHomeProcElabProd2();
    this.homeProcElabProd3 = this.homesService.getHomeProcElabProd3();
    this.homeProcElabProd4 = this.homesService.getHomeProcElabProd4();
    this.homeCaractProd1 = this.homesService.getHomeCaractProd1();
    this.homeCaractProd2 = this.homesService.getHomeCaractProd2();
    this.homeCaractProd3 = this.homesService.getHomeCaractProd3();
    this.homeCaractProd4 = this.homesService.getHomeCaractProd4();

  }
  asignarValor(value: string, valor: any) {
    const valueM: string = this.home1 + value;      //setHome${NombreDeudor}
    (this.homesService as any)[valueM](valor);
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
    this.homeMesPlanNeg = 0;
  }
  limpiarCampos() {
    this.form.reset();
  }

}
