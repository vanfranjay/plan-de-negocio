import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Pregunta2Service } from 'src/app/service/pregunta2/pregunta2.service';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.scss']
})
export class Pregunta2Component {
  public colSize!: number;

  //Plaza Lugar distribución
  pregunta2ProdServDir!: string;
  pregunta2ProdServInd!: string;
  pregunta2VentaProdServ!: string;
  //promoción
  pregunta2PromProdServ!: string;
  pregunta2Promcli!: string;
  //proveedores y consumidores
  pregunta2ProvLugar1!: string;
  pregunta2ProvLugar2!: string;
  pregunta2ProvLugar3!: string;
  pregunta2ProvLugar4!: string;
  pregunta2ProvLugar5!: string;
  pregunta2ProvLugar6!: string;
  pregunta2ProvLugar7!: string;
  pregunta2ProvLugar8!: string;
  pregunta2ProvLugar9!: string;
  pregunta2ProvLugar10!: string;
  pregunta2ProvLugar11!: string;
  pregunta2ProvCapNeg1!: string;
  pregunta2ProvCapNeg2!: string;
  pregunta2ProvCapNeg3!: string;
  pregunta2ProvCapNeg4!: string;
  pregunta2ProvCapNeg5!: string;
  pregunta2ProvCapNeg6!: string;
  pregunta2ProvCapNeg7!: string;
  pregunta2ProvCapNeg8!: string;
  pregunta2ProvCapNeg9!: string;
  pregunta2ProvCapNeg10!: string;
  pregunta2ProvCapNeg11!: string;
  pregunta2ProvFrec1!: string;
  pregunta2ProvFrec2!: string;
  pregunta2ProvFrec3!: string;
  pregunta2ProvFrec4!: string;
  pregunta2ProvFrec5!: string;
  pregunta2ProvFrec6!: string;
  pregunta2ProvFrec7!: string;
  pregunta2ProvFrec8!: string;
  pregunta2ProvFrec9!: string;
  pregunta2ProvFrec10!: string;
  pregunta2ProvFrec11!: string;
  pregunta2ProvPag1!: string;
  pregunta2ProvPag2!: string;
  pregunta2ProvPag3!: string;
  pregunta2ProvPag4!: string;
  pregunta2ProvPag5!: string;
  pregunta2ProvPag6!: string;
  pregunta2ProvPag7!: string;
  pregunta2ProvPag8!: string;
  pregunta2ProvPag9!: string;
  pregunta2ProvPag10!: string;
  pregunta2ProvPag11!: string;
  pregunta2CompCli1!: string;
  pregunta2CompCli2!: string;
  pregunta2CompCli3!: string;
  pregunta2CompCli4!: string;
  pregunta2CompCli5!: string;
  pregunta2CompCli6!: string;
  pregunta2CompCli7!: string;
  pregunta2CompCli8!: string;
  pregunta2CompCli9!: string;
  pregunta2CompCli10!: string;
  pregunta2CompCli11!: string;
  pregunta2CompCapNeg1!: string;
  pregunta2CompCapNeg2!: string;
  pregunta2CompCapNeg3!: string;
  pregunta2CompCapNeg4!: string;
  pregunta2CompCapNeg5!: string;
  pregunta2CompCapNeg6!: string;
  pregunta2CompCapNeg7!: string;
  pregunta2CompCapNeg8!: string;
  pregunta2CompCapNeg9!: string;
  pregunta2CompCapNeg10!: string;
  pregunta2CompCapNeg11!: string;
  pregunta2CompFrec1!: string;
  pregunta2CompFrec2!: string;
  pregunta2CompFrec3!: string;
  pregunta2CompFrec4!: string;
  pregunta2CompFrec5!: string;
  pregunta2CompFrec6!: string;
  pregunta2CompFrec7!: string;
  pregunta2CompFrec8!: string;
  pregunta2CompFrec9!: string;
  pregunta2CompFrec10!: string;
  pregunta2CompFrec11!: string;
  pregunta2CompPago1!: string;
  pregunta2CompPago2!: string;
  pregunta2CompPago3!: string;
  pregunta2CompPago4!: string;
  pregunta2CompPago5!: string;
  pregunta2CompPago6!: string;
  pregunta2CompPago7!: string;
  pregunta2CompPago8!: string;
  pregunta2CompPago9!: string;
  pregunta2CompPago10!: string;
  pregunta2CompPago11!: string;
  //fortalezas y debilidades
  pregunta2Fort1!: number;
  pregunta2Fort2!: number;
  pregunta2Fort3!: number;
  pregunta2Fort4!: number;
  pregunta2Fort5!: number;
  pregunta2Fort6!: number;
  pregunta2Fort7!: number;
  pregunta2Fort8!: number;
  pregunta2Fort9!: number;
  pregunta2Fort10!: number;
  pregunta2Fort11!: number;
  pregunta2Fort12!: number;
  pregunta2Fort13!: number;
  pregunta2Fort14!: number;
  pregunta2Fort15!: number;
  pregunta2Fort16!: number;
  pregunta2FortPond!: string;
  pregunta2Deb1!: number;
  pregunta2Deb2!: number;
  pregunta2Deb3!: number;
  pregunta2Deb4!: number;
  pregunta2Deb5!: number;
  pregunta2Deb6!: number;
  pregunta2Deb7!: number;
  pregunta2Deb8!: number;
  pregunta2Deb9!: number;
  pregunta2Deb10!: number;
  pregunta2Deb11!: number;
  pregunta2Deb12!: number;
  pregunta2Deb13!: number;
  pregunta2Deb14!: number;
  pregunta2Deb15!: number;
  pregunta2Deb16!: number;
  pregunta2DebPond!: string;

  //pregunta2 variables para usar
  pregunta2: string = 'setPregunta2';
  input!: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private pregunta2Service: Pregunta2Service,
  ) {
    this.pregunta2ProdServDir = this.pregunta2Service.getPregunta2ProdServDir();
    this.pregunta2ProdServInd = this.pregunta2Service.getPregunta2ProdServInd();
    this.pregunta2VentaProdServ = this.pregunta2Service.getPregunta2VentaProdServ();
    this.pregunta2PromProdServ = this.pregunta2Service.getPregunta2PromProdServ();
    this.pregunta2Promcli = this.pregunta2Service.getPregunta2Promcli();
    //proveedores
    this.pregunta2ProvLugar1 = this.pregunta2Service.getPregunta2ProvLugar1();
    this.pregunta2ProvLugar2 = this.pregunta2Service.getPregunta2ProvLugar2();
    this.pregunta2ProvLugar3 = this.pregunta2Service.getPregunta2ProvLugar3();
    this.pregunta2ProvLugar4 = this.pregunta2Service.getPregunta2ProvLugar4();
    this.pregunta2ProvLugar5 = this.pregunta2Service.getPregunta2ProvLugar5();
    this.pregunta2ProvLugar6 = this.pregunta2Service.getPregunta2ProvLugar6();
    this.pregunta2ProvLugar7 = this.pregunta2Service.getPregunta2ProvLugar7();
    this.pregunta2ProvLugar8 = this.pregunta2Service.getPregunta2ProvLugar8();
    this.pregunta2ProvLugar9 = this.pregunta2Service.getPregunta2ProvLugar9();
    this.pregunta2ProvLugar10 = this.pregunta2Service.getPregunta2ProvLugar10();
    this.pregunta2ProvLugar11 = this.pregunta2Service.getPregunta2ProvLugar11();
    this.pregunta2ProvCapNeg1 = this.pregunta2Service.getPregunta2ProvCapNeg1();
    this.pregunta2ProvCapNeg2 = this.pregunta2Service.getPregunta2ProvCapNeg2();
    this.pregunta2ProvCapNeg3 = this.pregunta2Service.getPregunta2ProvCapNeg3();
    this.pregunta2ProvCapNeg4 = this.pregunta2Service.getPregunta2ProvCapNeg4();
    this.pregunta2ProvCapNeg5 = this.pregunta2Service.getPregunta2ProvCapNeg5();
    this.pregunta2ProvCapNeg6 = this.pregunta2Service.getPregunta2ProvCapNeg6();
    this.pregunta2ProvCapNeg7 = this.pregunta2Service.getPregunta2ProvCapNeg7();
    this.pregunta2ProvCapNeg8 = this.pregunta2Service.getPregunta2ProvCapNeg8();
    this.pregunta2ProvCapNeg9 = this.pregunta2Service.getPregunta2ProvCapNeg9();
    this.pregunta2ProvCapNeg10 = this.pregunta2Service.getPregunta2ProvCapNeg10();
    this.pregunta2ProvCapNeg11 = this.pregunta2Service.getPregunta2ProvCapNeg11();
    this.pregunta2ProvFrec1 = this.pregunta2Service.getPregunta2ProvFrec1();
    this.pregunta2ProvFrec2 = this.pregunta2Service.getPregunta2ProvFrec2();
    this.pregunta2ProvFrec3 = this.pregunta2Service.getPregunta2ProvFrec3();
    this.pregunta2ProvFrec4 = this.pregunta2Service.getPregunta2ProvFrec4();
    this.pregunta2ProvFrec5 = this.pregunta2Service.getPregunta2ProvFrec5();
    this.pregunta2ProvFrec6 = this.pregunta2Service.getPregunta2ProvFrec6();
    this.pregunta2ProvFrec7 = this.pregunta2Service.getPregunta2ProvFrec7();
    this.pregunta2ProvFrec8 = this.pregunta2Service.getPregunta2ProvFrec8();
    this.pregunta2ProvFrec9 = this.pregunta2Service.getPregunta2ProvFrec9();
    this.pregunta2ProvFrec10 = this.pregunta2Service.getPregunta2ProvFrec10();
    this.pregunta2ProvFrec11 = this.pregunta2Service.getPregunta2ProvFrec11();
    this.pregunta2ProvPag1 = this.pregunta2Service.getPregunta2ProvPag1();
    this.pregunta2ProvPag2 = this.pregunta2Service.getPregunta2ProvPag2();
    this.pregunta2ProvPag3 = this.pregunta2Service.getPregunta2ProvPag3();
    this.pregunta2ProvPag4 = this.pregunta2Service.getPregunta2ProvPag4();
    this.pregunta2ProvPag5 = this.pregunta2Service.getPregunta2ProvPag5();
    this.pregunta2ProvPag6 = this.pregunta2Service.getPregunta2ProvPag6();
    this.pregunta2ProvPag7 = this.pregunta2Service.getPregunta2ProvPag7();
    this.pregunta2ProvPag8 = this.pregunta2Service.getPregunta2ProvPag8();
    this.pregunta2ProvPag9 = this.pregunta2Service.getPregunta2ProvPag9();
    this.pregunta2ProvPag10 = this.pregunta2Service.getPregunta2ProvPag10();
    this.pregunta2ProvPag11 = this.pregunta2Service.getPregunta2ProvPag11();
    //compradores
    this.pregunta2CompCli1 = this.pregunta2Service.getPregunta2CompCli1();
    this.pregunta2CompCli2 = this.pregunta2Service.getPregunta2CompCli2();
    this.pregunta2CompCli3 = this.pregunta2Service.getPregunta2CompCli3();
    this.pregunta2CompCli4 = this.pregunta2Service.getPregunta2CompCli4();
    this.pregunta2CompCli5 = this.pregunta2Service.getPregunta2CompCli5();
    this.pregunta2CompCli6 = this.pregunta2Service.getPregunta2CompCli6();
    this.pregunta2CompCli7 = this.pregunta2Service.getPregunta2CompCli7();
    this.pregunta2CompCli8 = this.pregunta2Service.getPregunta2CompCli8();
    this.pregunta2CompCli9 = this.pregunta2Service.getPregunta2CompCli9();
    this.pregunta2CompCli10 = this.pregunta2Service.getPregunta2CompCli10();
    this.pregunta2CompCli11 = this.pregunta2Service.getPregunta2CompCli11();
    this.pregunta2CompCapNeg1 = this.pregunta2Service.getPregunta2CompCapNeg1();
    this.pregunta2CompCapNeg2 = this.pregunta2Service.getPregunta2CompCapNeg2();
    this.pregunta2CompCapNeg3 = this.pregunta2Service.getPregunta2CompCapNeg3();
    this.pregunta2CompCapNeg4 = this.pregunta2Service.getPregunta2CompCapNeg4();
    this.pregunta2CompCapNeg5 = this.pregunta2Service.getPregunta2CompCapNeg5();
    this.pregunta2CompCapNeg6 = this.pregunta2Service.getPregunta2CompCapNeg6();
    this.pregunta2CompCapNeg7 = this.pregunta2Service.getPregunta2CompCapNeg7();
    this.pregunta2CompCapNeg8 = this.pregunta2Service.getPregunta2CompCapNeg8();
    this.pregunta2CompCapNeg9 = this.pregunta2Service.getPregunta2CompCapNeg9();
    this.pregunta2CompCapNeg10 = this.pregunta2Service.getPregunta2CompCapNeg10();
    this.pregunta2CompCapNeg11 = this.pregunta2Service.getPregunta2CompCapNeg11();
    this.pregunta2CompFrec1 = this.pregunta2Service.getPregunta2CompFrec1();
    this.pregunta2CompFrec2 = this.pregunta2Service.getPregunta2CompFrec2();
    this.pregunta2CompFrec3 = this.pregunta2Service.getPregunta2CompFrec3();
    this.pregunta2CompFrec4 = this.pregunta2Service.getPregunta2CompFrec4();
    this.pregunta2CompFrec5 = this.pregunta2Service.getPregunta2CompFrec5();
    this.pregunta2CompFrec6 = this.pregunta2Service.getPregunta2CompFrec6();
    this.pregunta2CompFrec7 = this.pregunta2Service.getPregunta2CompFrec7();
    this.pregunta2CompFrec8 = this.pregunta2Service.getPregunta2CompFrec8();
    this.pregunta2CompFrec9 = this.pregunta2Service.getPregunta2CompFrec9();
    this.pregunta2CompFrec10 = this.pregunta2Service.getPregunta2CompFrec10();
    this.pregunta2CompFrec11 = this.pregunta2Service.getPregunta2CompFrec11();
    this.pregunta2CompPago1 = this.pregunta2Service.getPregunta2CompPago1();
    this.pregunta2CompPago2 = this.pregunta2Service.getPregunta2CompPago2();
    this.pregunta2CompPago3 = this.pregunta2Service.getPregunta2CompPago3();
    this.pregunta2CompPago4 = this.pregunta2Service.getPregunta2CompPago4();
    this.pregunta2CompPago5 = this.pregunta2Service.getPregunta2CompPago5();
    this.pregunta2CompPago6 = this.pregunta2Service.getPregunta2CompPago6();
    this.pregunta2CompPago7 = this.pregunta2Service.getPregunta2CompPago7();
    this.pregunta2CompPago8 = this.pregunta2Service.getPregunta2CompPago8();
    this.pregunta2CompPago9 = this.pregunta2Service.getPregunta2CompPago9();
    this.pregunta2CompPago10 = this.pregunta2Service.getPregunta2CompPago10();
    this.pregunta2CompPago11 = this.pregunta2Service.getPregunta2CompPago11();
    //fortaleza
    this.pregunta2Fort1 = this.pregunta2Service.getPregunta2Fort1();
    this.pregunta2Fort2 = this.pregunta2Service.getPregunta2Fort2();
    this.pregunta2Fort3 = this.pregunta2Service.getPregunta2Fort3();
    this.pregunta2Fort4 = this.pregunta2Service.getPregunta2Fort4();
    this.pregunta2Fort5 = this.pregunta2Service.getPregunta2Fort5();
    this.pregunta2Fort6 = this.pregunta2Service.getPregunta2Fort6();
    this.pregunta2Fort7 = this.pregunta2Service.getPregunta2Fort7();
    this.pregunta2Fort8 = this.pregunta2Service.getPregunta2Fort8();
    this.pregunta2Fort9 = this.pregunta2Service.getPregunta2Fort9();
    this.pregunta2Fort10 = this.pregunta2Service.getPregunta2Fort10();
    this.pregunta2Fort11 = this.pregunta2Service.getPregunta2Fort11();
    this.pregunta2Fort12 = this.pregunta2Service.getPregunta2Fort12();
    this.pregunta2Fort13 = this.pregunta2Service.getPregunta2Fort13();
    this.pregunta2Fort14 = this.pregunta2Service.getPregunta2Fort14();
    this.pregunta2Fort15 = this.pregunta2Service.getPregunta2Fort15();
    this.pregunta2Fort16 = this.pregunta2Service.getPregunta2Fort16();
    this.pregunta2FortPond = this.pregunta2Service.getPregunta2FortPond();
    //debilidad
    this.pregunta2Deb1 = this.pregunta2Service.getPregunta2Deb1();
    this.pregunta2Deb2 = this.pregunta2Service.getPregunta2Deb2();
    this.pregunta2Deb3 = this.pregunta2Service.getPregunta2Deb3();
    this.pregunta2Deb4 = this.pregunta2Service.getPregunta2Deb4();
    this.pregunta2Deb5 = this.pregunta2Service.getPregunta2Deb5();
    this.pregunta2Deb6 = this.pregunta2Service.getPregunta2Deb6();
    this.pregunta2Deb7 = this.pregunta2Service.getPregunta2Deb7();
    this.pregunta2Deb8 = this.pregunta2Service.getPregunta2Deb8();
    this.pregunta2Deb9 = this.pregunta2Service.getPregunta2Deb9();
    this.pregunta2Deb10 = this.pregunta2Service.getPregunta2Deb10();
    this.pregunta2Deb11 = this.pregunta2Service.getPregunta2Deb11();
    this.pregunta2Deb12 = this.pregunta2Service.getPregunta2Deb12();
    this.pregunta2Deb13 = this.pregunta2Service.getPregunta2Deb13();
    this.pregunta2Deb14 = this.pregunta2Service.getPregunta2Deb14();
    this.pregunta2Deb15 = this.pregunta2Service.getPregunta2Deb15();
    this.pregunta2Deb16 = this.pregunta2Service.getPregunta2Deb16();
    this.pregunta2DebPond = this.pregunta2Service.getPregunta2DebPond();
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(result => {
        if (result.matches) {
          this.colSize = this.calculateColSize(result.breakpoints);
        } else {
          this.colSize = 2; // Pantallas más grandes, 4 columnas
        }
      });
  }

  asignarValor(value: string, valor: any) {
    const valueM: string = this.pregunta2 + value;      //setPregunta2${ProdServDir}
    (this.pregunta2Service as any)[valueM](valor);
  }

  calculateColSize(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 1; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 1; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 2; // Pantallas medianas, 3 columnas
    } else {
      return 2; // Por defecto, 4 columnas
    }
  }
  /////// Número de filas para la tabla
  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // captar cambios
  onVariableChange(event: any) {
    const nuevoValor = event;
    console.log('Nuevo valor:', nuevoValor);
  }
  variableMap: { [key: string]: string } = {};
  sumaImpar: number = 0;
  sumaPar: number = 0;

  onSelectChange(event: Event, selectName: string) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    this.variableMap[selectName] = selectedValue;

    this.calculateSumas();
  }

  calculateSumas() {
    let sumaImpar = 0;
    let sumaPar = 0;

    for (const key in this.variableMap) {
      if (this.variableMap.hasOwnProperty(key)) {
        const value = this.variableMap[key];
        const numValue = parseInt(value, 10);

        if (!isNaN(numValue)) {
          if (key.includes('selectValue') && parseInt(key.slice(-1), 10) % 2 === 0) {
            // Suma de valores con terminación par
            sumaPar += numValue;
          } else if (key.includes('selectValue') && parseInt(key.slice(-1), 10) % 2 !== 0) {
            // Suma de valores con terminación impar
            sumaImpar += numValue;
          }
        }
      }
    }

    this.sumaImpar = sumaImpar;
    this.sumaPar = sumaPar;
    const sumaTotal = this.sumaImpar + this.sumaPar;
    const valorUnitario = 100 / sumaTotal;
    const ponderadoFortaleza = this.sumaImpar * valorUnitario;
    const ponderadoDebilidad = this.sumaPar * valorUnitario;

    const porcentajeFortaleza = Math.round(ponderadoFortaleza) + '%';
    const porcentajeDebilidad = Math.round(ponderadoDebilidad) + '%';

    const ponderadoFortalezaOutput = document.getElementById('ponderadoFortalezaOutput');

    const ponderadoDebilidadOutput = document.getElementById('ponderadoDebilidadOutput');

    if (ponderadoFortalezaOutput && ponderadoDebilidadOutput) {
      if (!isNaN(ponderadoFortaleza) && !isNaN(ponderadoDebilidad)) {
        ponderadoFortalezaOutput.textContent = porcentajeFortaleza;
        this.pregunta2Service.setPregunta2FortPond(ponderadoFortalezaOutput.textContent);
        ponderadoDebilidadOutput.textContent = porcentajeDebilidad;
        this.pregunta2Service.setPregunta2DebPond(ponderadoDebilidadOutput.textContent);
      } else {
        ponderadoFortalezaOutput.textContent = '';
        this.pregunta2Service.setPregunta2FortPond(ponderadoFortalezaOutput.textContent);
        ponderadoDebilidadOutput.textContent = '';
        this.pregunta2Service.setPregunta2DebPond(ponderadoDebilidadOutput.textContent);
      }
    }
  }

}
