import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { CostosService } from 'src/app/service/costos/costos.service';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.scss']
})
export class CostosComponent {
  costos: string = 'setCostosDir'

  public colSize!: number;
  public colSize2: number = 1;
  costosDirRangoA!: number;
  costosDirRangoB!: number;
  costosDirRangoC!: number;

  costosDirProdServ1!: string;
  costosDirProdTipo1!: string;
  costosDirProdCantidad1!: number;
  costosDirProdUniVenta1!: string;
  costosDirProdFrecuencia1!: string;

  costosDirProdServ2!: string;
  costosDirProdTipo2!: string;
  costosDirProdCantidad2!: number;
  costosDirProdUniVenta2!: string;
  costosDirProdFrecuencia2!: string;

  costosDirProdServ3!: string;
  costosDirProdTipo3!: string;
  costosDirProdCantidad3!: number;
  costosDirProdUniVenta3!: string;
  costosDirProdFrecuencia3!: string;

  costosDirProdServ4!: string;
  costosDirProdTipo4!: string;
  costosDirProdCantidad4!: number;
  costosDirProdUniVenta4!: string;
  costosDirProdFrecuencia4!: string;

  costosDirEne!: string;
  costosDirFeb!: string;
  costosDirMar!: string;
  costosDirAbr!: string;
  costosDirMay!: string;
  costosDirJun!: string;
  costosDirJul!: string;
  costosDirAgo!: string;
  costosDirSep!: string;
  costosDirOct!: string;
  costosDirNov!: string;
  costosDirDic!: string;

  costosDirEneVM!: number;
  costosDirFebVM!: number;
  costosDirMarVM!: number;
  costosDirAbrVM!: number;
  costosDirMayVM!: number;
  costosDirJunVM!: number;
  costosDirJulVM!: number;
  costosDirAgoVM!: number;
  costosDirSepVM!: number;
  costosDirOctVM!: number;
  costosDirNovVM!: number;
  costosDirDicVM!: number;

  costosDirEneCPM!: number;
  costosDirFebCPM!: number;
  costosDirMarCPM!: number;
  costosDirAbrCPM!: number;
  costosDirMayCPM!: number;
  costosDirJunCPM!: number;
  costosDirJulCPM!: number;
  costosDirAgoCPM!: number;
  costosDirSepCPM!: number;
  costosDirOctCPM!: number;
  costosDirNovCPM!: number;
  costosDirDicCPM!: number;

  costosDirAnualVM!: number;
  costosDirAnualCPM!: number;

  //Precio C
  costosDirPrecioC1!: number;
  costosDirPrecioC2!: number;
  costosDirPrecioC3!: number;
  costosDirPrecioC4!: number;

  //Precio V
  costosDirPrecioV1!: number;
  costosDirPrecioV2!: number;
  costosDirPrecioV3!: number;
  costosDirPrecioV4!: number;

  //Total Compra Mensual
  costosDirTotalCM1!: number;
  costosDirTotalCM2!: number;
  costosDirTotalCM3!: number;
  costosDirTotalCM4!: number;
  costosDirTotalCMT!: number;
  //Total venta mensual
  costosDirTotalVM1!: number;
  costosDirTotalVM2!: number;
  costosDirTotalVM3!: number;
  costosDirTotalVM4!: number;
  costosDirTotalVMT!: number;

  //Mub
  costosDirMub1!: number;
  costosDirMub2!: number;
  costosDirMub3!: number;
  costosDirMub4!: number;
  costosDirMubT!: number;

  //primera tabla de costos
  costosDirProdOServ1!: string;
  costosDirProdOServ2!: string;
  costosDirProdOServ3!: string;
  costosDirProdOServ4!: string;

  costosDirUndMedida1!: string;
  costosDirUndMedida2!: string;
  costosDirUndMedida3!: string;
  costosDirUndMedida4!: string;

  costosDirInsumo11!: string;
  costosDirInsumo12!: string;
  costosDirInsumo13!: string;
  costosDirInsumo14!: string;
  costosDirInsumo15!: string;
  costosDirInsumo16!: string;
  costosDirInsumo17!: string;
  costosDirInsumo18!: string;

  costosDirInsumo21!: string;
  costosDirInsumo22!: string;
  costosDirInsumo23!: string;
  costosDirInsumo24!: string;
  costosDirInsumo25!: string;
  costosDirInsumo26!: string;
  costosDirInsumo27!: string;
  costosDirInsumo28!: string;

  costosDirInsumo31!: string;
  costosDirInsumo32!: string;
  costosDirInsumo33!: string;
  costosDirInsumo34!: string;
  costosDirInsumo35!: string;
  costosDirInsumo36!: string;
  costosDirInsumo37!: string;
  costosDirInsumo38!: string;

  costosDirInsumo41!: string;
  costosDirInsumo42!: string;
  costosDirInsumo43!: string;
  costosDirInsumo44!: string;
  costosDirInsumo45!: string;
  costosDirInsumo46!: string;
  costosDirInsumo47!: string;
  costosDirInsumo48!: string;

  costosDirCantidad11!: number;
  costosDirCantidad12!: number;
  costosDirCantidad13!: number;
  costosDirCantidad14!: number;
  costosDirCantidad15!: number;
  costosDirCantidad16!: number;
  costosDirCantidad17!: number;
  costosDirCantidad18!: number;

  costosDirCantidad21!: number;
  costosDirCantidad22!: number;
  costosDirCantidad23!: number;
  costosDirCantidad24!: number;
  costosDirCantidad25!: number;
  costosDirCantidad26!: number;
  costosDirCantidad27!: number;
  costosDirCantidad28!: number;

  costosDirCantidad31!: number;
  costosDirCantidad32!: number;
  costosDirCantidad33!: number;
  costosDirCantidad34!: number;
  costosDirCantidad35!: number;
  costosDirCantidad36!: number;
  costosDirCantidad37!: number;
  costosDirCantidad38!: number;

  costosDirCantidad41!: number;
  costosDirCantidad42!: number;
  costosDirCantidad43!: number;
  costosDirCantidad44!: number;
  costosDirCantidad45!: number;
  costosDirCantidad46!: number;
  costosDirCantidad47!: number;
  costosDirCantidad48!: number;

  costosDirUnidad11!: string;
  costosDirUnidad12!: string;
  costosDirUnidad13!: string;
  costosDirUnidad14!: string;
  costosDirUnidad15!: string;
  costosDirUnidad16!: string;
  costosDirUnidad17!: string;
  costosDirUnidad18!: string;

  costosDirUnidad21!: string;
  costosDirUnidad22!: string;
  costosDirUnidad23!: string;
  costosDirUnidad24!: string;
  costosDirUnidad25!: string;
  costosDirUnidad26!: string;
  costosDirUnidad27!: string;
  costosDirUnidad28!: string;

  costosDirUnidad31!: string;
  costosDirUnidad32!: string;
  costosDirUnidad33!: string;
  costosDirUnidad34!: string;
  costosDirUnidad35!: string;
  costosDirUnidad36!: string;
  costosDirUnidad37!: string;
  costosDirUnidad38!: string;

  costosDirUnidad41!: string;
  costosDirUnidad42!: string;
  costosDirUnidad43!: string;
  costosDirUnidad44!: string;
  costosDirUnidad45!: string;
  costosDirUnidad46!: string;
  costosDirUnidad47!: string;
  costosDirUnidad48!: string;

  costosDirUnPS11!: number;
  costosDirUnPS12!: number;
  costosDirUnPS13!: number;
  costosDirUnPS14!: number;
  costosDirUnPS15!: number;
  costosDirUnPS16!: number;
  costosDirUnPS17!: number;
  costosDirUnPS18!: number;

  costosDirUnPS21!: number;
  costosDirUnPS22!: number;
  costosDirUnPS23!: number;
  costosDirUnPS24!: number;
  costosDirUnPS25!: number;
  costosDirUnPS26!: number;
  costosDirUnPS27!: number;
  costosDirUnPS28!: number;

  costosDirUnPS31!: number;
  costosDirUnPS32!: number;
  costosDirUnPS33!: number;
  costosDirUnPS34!: number;
  costosDirUnPS35!: number;
  costosDirUnPS36!: number;
  costosDirUnPS37!: number;
  costosDirUnPS38!: number;

  costosDirUnPS41!: number;
  costosDirUnPS42!: number;
  costosDirUnPS43!: number;
  costosDirUnPS44!: number;
  costosDirUnPS45!: number;
  costosDirUnPS46!: number;
  costosDirUnPS47!: number;
  costosDirUnPS48!: number;

  costosDirPrecioU12!: number;
  costosDirPrecioU13!: number;
  costosDirPrecioU14!: number;
  costosDirPrecioU15!: number;
  costosDirPrecioU16!: number;
  costosDirPrecioU17!: number;
  costosDirPrecioU18!: number;
  costosDirPrecioU19!: number;

  costosDirPrecioU21!: number;
  costosDirPrecioU22!: number;
  costosDirPrecioU23!: number;
  costosDirPrecioU24!: number;
  costosDirPrecioU25!: number;
  costosDirPrecioU26!: number;
  costosDirPrecioU27!: number;
  costosDirPrecioU28!: number;

  costosDirPrecioU31!: number;
  costosDirPrecioU32!: number;
  costosDirPrecioU33!: number;
  costosDirPrecioU34!: number;
  costosDirPrecioU35!: number;
  costosDirPrecioU36!: number;
  costosDirPrecioU37!: number;
  costosDirPrecioU38!: number;

  costosDirPrecioU41!: number;
  costosDirPrecioU42!: number;
  costosDirPrecioU43!: number;
  costosDirPrecioU44!: number;
  costosDirPrecioU45!: number;
  costosDirPrecioU46!: number;
  costosDirPrecioU47!: number;
  costosDirPrecioU48!: number;

  costosDirTotalABC11!: number;
  costosDirTotalABC12!: number;
  costosDirTotalABC13!: number;
  costosDirTotalABC14!: number;
  costosDirTotalABC15!: number;
  costosDirTotalABC16!: number;
  costosDirTotalABC17!: number;
  costosDirTotalABC18!: number;

  costosDirTotalABC21!: number;
  costosDirTotalABC22!: number;
  costosDirTotalABC23!: number;
  costosDirTotalABC24!: number;
  costosDirTotalABC25!: number;
  costosDirTotalABC26!: number;
  costosDirTotalABC27!: number;
  costosDirTotalABC28!: number;

  costosDirTotalABC31!: number;
  costosDirTotalABC32!: number;
  costosDirTotalABC33!: number;
  costosDirTotalABC34!: number;
  costosDirTotalABC35!: number;
  costosDirTotalABC36!: number;
  costosDirTotalABC37!: number;
  costosDirTotalABC38!: number;

  costosDirTotalABC41!: number;
  costosDirTotalABC42!: number;
  costosDirTotalABC43!: number;
  costosDirTotalABC44!: number;
  costosDirTotalABC45!: number;
  costosDirTotalABC46!: number;
  costosDirTotalABC47!: number;
  costosDirTotalABC48!: number;

  costosDirTotaCD1!: number;
  costosDirTotaCD2!: number;
  costosDirTotaCD3!: number;
  costosDirTotaCD4!: number;

  costosDirTotalPV1!: number;
  costosDirTotalPV2!: number;
  costosDirTotalPV3!: number;
  costosDirTotalPV4!: number;



  constructor(
    private breakpointObserver: BreakpointObserver,
    private costosService: CostosService,
  ) {
    this.costosDirRangoA = this.costosService.getCostosDirRangoA();
    this.costosDirRangoB = this.costosService.getCostosDirRangoB();
    this.costosDirRangoC = this.costosService.getCostosDirRangoC();

    this.costosDirProdServ1 = this.costosService.getCostosDirProdServ1();
    this.costosDirProdTipo1 = this.costosService.getCostosDirProdTipo1();
    this.costosDirProdCantidad1 = this.costosService.getCostosDirProdCantidad1();
    this.costosDirProdUniVenta1 = this.costosService.getCostosDirProdUniVenta1();
    this.costosDirProdFrecuencia1 = this.costosService.getCostosDirProdFrecuencia1();

    this.costosDirProdServ2 = this.costosService.getCostosDirProdServ2();
    this.costosDirProdTipo2 = this.costosService.getCostosDirProdTipo2();
    this.costosDirProdCantidad2 = this.costosService.getCostosDirProdCantidad2();
    this.costosDirProdUniVenta2 = this.costosService.getCostosDirProdUniVenta2();
    this.costosDirProdFrecuencia2 = this.costosService.getCostosDirProdFrecuencia2();

    this.costosDirProdServ3 = this.costosService.getCostosDirProdServ3();
    this.costosDirProdTipo3 = this.costosService.getCostosDirProdTipo3();
    this.costosDirProdCantidad3 = this.costosService.getCostosDirProdCantidad3();
    this.costosDirProdUniVenta3 = this.costosService.getCostosDirProdUniVenta3();
    this.costosDirProdFrecuencia3 = this.costosService.getCostosDirProdFrecuencia3();

    this.costosDirProdServ4 = this.costosService.getCostosDirProdServ4();
    this.costosDirProdTipo4 = this.costosService.getCostosDirProdTipo4();
    this.costosDirProdCantidad4 = this.costosService.getCostosDirProdCantidad4();
    this.costosDirProdUniVenta4 = this.costosService.getCostosDirProdUniVenta4();
    this.costosDirProdFrecuencia4 = this.costosService.getCostosDirProdFrecuencia4();



    this.costosDirEne = this.costosService.getCostosDirEne();
    this.costosDirFeb = this.costosService.getCostosDirFeb();
    this.costosDirMar = this.costosService.getCostosDirMar();
    this.costosDirAbr = this.costosService.getCostosDirAbr();
    this.costosDirMay = this.costosService.getCostosDirMay();
    this.costosDirJun = this.costosService.getCostosDirJun();
    this.costosDirJul = this.costosService.getCostosDirJul();
    this.costosDirAgo = this.costosService.getCostosDirAgo();
    this.costosDirSep = this.costosService.getCostosDirSep();
    this.costosDirOct = this.costosService.getCostosDirOct();
    this.costosDirNov = this.costosService.getCostosDirNov();
    this.costosDirDic = this.costosService.getCostosDirDic();

    this.costosDirEneVM = this.costosService.getCostosDirEneVM();
    this.costosDirFebVM = this.costosService.getCostosDirFebVM();
    this.costosDirMarVM = this.costosService.getCostosDirMarVM();
    this.costosDirAbrVM = this.costosService.getCostosDirAbrVM();
    this.costosDirMayVM = this.costosService.getCostosDirMayVM();
    this.costosDirJunVM = this.costosService.getCostosDirJunVM();
    this.costosDirJulVM = this.costosService.getCostosDirJulVM();
    this.costosDirAgoVM = this.costosService.getCostosDirAgoVM();
    this.costosDirSepVM = this.costosService.getCostosDirSepVM();
    this.costosDirOctVM = this.costosService.getCostosDirOctVM();
    this.costosDirNovVM = this.costosService.getCostosDirNovVM();
    this.costosDirDicVM = this.costosService.getCostosDirDicVM();

    this.costosDirEneCPM = this.costosService.getCostosDirEneCPM();
    this.costosDirFebCPM = this.costosService.getCostosDirFebCPM();
    this.costosDirMarCPM = this.costosService.getCostosDirMarCPM();
    this.costosDirAbrCPM = this.costosService.getCostosDirAbrCPM();
    this.costosDirMayCPM = this.costosService.getCostosDirMayCPM();
    this.costosDirJunCPM = this.costosService.getCostosDirJunCPM();
    this.costosDirJulCPM = this.costosService.getCostosDirJulCPM();
    this.costosDirAgoCPM = this.costosService.getCostosDirAgoCPM();
    this.costosDirSepCPM = this.costosService.getCostosDirSepCPM();
    this.costosDirOctCPM = this.costosService.getCostosDirOctCPM();
    this.costosDirNovCPM = this.costosService.getCostosDirNovCPM();
    this.costosDirDicCPM = this.costosService.getCostosDirDicCPM();

    this.costosDirAnualVM = this.costosService.getCostosDirAnualVM();
    this.costosDirAnualCPM = this.costosService.getCostosDirAnualCPM();

    //Precio C
    this.costosDirPrecioC1 = this.costosService.getCostosDirPrecioC1();
    this.costosDirPrecioC2 = this.costosService.getCostosDirPrecioC2();
    this.costosDirPrecioC3 = this.costosService.getCostosDirPrecioC3();
    this.costosDirPrecioC4 = this.costosService.getCostosDirPrecioC4();

    //Precio V
    this.costosDirPrecioV1 = this.costosService.getCostosDirPrecioV1();
    this.costosDirPrecioV2 = this.costosService.getCostosDirPrecioV2();
    this.costosDirPrecioV3 = this.costosService.getCostosDirPrecioV3();
    this.costosDirPrecioV4 = this.costosService.getCostosDirPrecioV4();

    //Total Compra Mensual
    this.costosDirTotalCM1 = this.costosService.getCostosDirTotalCM1();
    this.costosDirTotalCM2 = this.costosService.getCostosDirTotalCM2();
    this.costosDirTotalCM3 = this.costosService.getCostosDirTotalCM3();
    this.costosDirTotalCM4 = this.costosService.getCostosDirTotalCM4();
    this.costosDirTotalCMT = this.costosService.getCostosDirTotalCMT();
    //Total venta mensual
    this.costosDirTotalVM1 = this.costosService.getCostosDirTotalVM1();
    this.costosDirTotalVM2 = this.costosService.getCostosDirTotalVM2();
    this.costosDirTotalVM3 = this.costosService.getCostosDirTotalVM3();
    this.costosDirTotalVM4 = this.costosService.getCostosDirTotalVM4();
    this.costosDirTotalVMT = this.costosService.getCostosDirTotalVMT();

    //Mub
    this.costosDirMub1 = this.costosService.getCostosDirMub1();
    this.costosDirMub2 = this.costosService.getCostosDirMub2();
    this.costosDirMub3 = this.costosService.getCostosDirMub3();
    this.costosDirMub4 = this.costosService.getCostosDirMub4();
    this.costosDirMubT = this.costosService.getCostosDirMubT();

    //primera tabla de costos
    this.costosDirProdOServ1 = this.costosService.getCostosDirProdOServ1();
    this.costosDirProdOServ2 = this.costosService.getCostosDirProdOServ2();
    this.costosDirProdOServ3 = this.costosService.getCostosDirProdOServ3();
    this.costosDirProdOServ4 = this.costosService.getCostosDirProdOServ4();

    this.costosDirUndMedida1 = this.costosService.getCostosDirUndMedida1();
    this.costosDirUndMedida2 = this.costosService.getCostosDirUndMedida2();
    this.costosDirUndMedida3 = this.costosService.getCostosDirUndMedida3();
    this.costosDirUndMedida4 = this.costosService.getCostosDirUndMedida4();

    this.costosDirInsumo11 = this.costosService.getCostosDirInsumo11();
    this.costosDirInsumo12 = this.costosService.getCostosDirInsumo12();
    this.costosDirInsumo13 = this.costosService.getCostosDirInsumo13();
    this.costosDirInsumo14 = this.costosService.getCostosDirInsumo14();
    this.costosDirInsumo15 = this.costosService.getCostosDirInsumo15();
    this.costosDirInsumo16 = this.costosService.getCostosDirInsumo16();
    this.costosDirInsumo17 = this.costosService.getCostosDirInsumo17();
    this.costosDirInsumo18 = this.costosService.getCostosDirInsumo18();

    this.costosDirInsumo21 = this.costosService.getCostosDirInsumo21();
    this.costosDirInsumo22 = this.costosService.getCostosDirInsumo22();
    this.costosDirInsumo23 = this.costosService.getCostosDirInsumo23();
    this.costosDirInsumo24 = this.costosService.getCostosDirInsumo24();
    this.costosDirInsumo25 = this.costosService.getCostosDirInsumo25();
    this.costosDirInsumo26 = this.costosService.getCostosDirInsumo26();
    this.costosDirInsumo27 = this.costosService.getCostosDirInsumo27();
    this.costosDirInsumo28 = this.costosService.getCostosDirInsumo28();

    this.costosDirInsumo31 = this.costosService.getCostosDirInsumo31();
    this.costosDirInsumo32 = this.costosService.getCostosDirInsumo32();
    this.costosDirInsumo33 = this.costosService.getCostosDirInsumo33();
    this.costosDirInsumo34 = this.costosService.getCostosDirInsumo34();
    this.costosDirInsumo35 = this.costosService.getCostosDirInsumo35();
    this.costosDirInsumo36 = this.costosService.getCostosDirInsumo36();
    this.costosDirInsumo37 = this.costosService.getCostosDirInsumo37();
    this.costosDirInsumo38 = this.costosService.getCostosDirInsumo38();

    this.costosDirInsumo41 = this.costosService.getCostosDirInsumo41();
    this.costosDirInsumo42 = this.costosService.getCostosDirInsumo42();
    this.costosDirInsumo43 = this.costosService.getCostosDirInsumo43();
    this.costosDirInsumo44 = this.costosService.getCostosDirInsumo44();
    this.costosDirInsumo45 = this.costosService.getCostosDirInsumo45();
    this.costosDirInsumo46 = this.costosService.getCostosDirInsumo46();
    this.costosDirInsumo47 = this.costosService.getCostosDirInsumo47();
    this.costosDirInsumo48 = this.costosService.getCostosDirInsumo48();

    this.costosDirCantidad11 = this.costosService.getCostosDirCantidad11();
    this.costosDirCantidad12 = this.costosService.getCostosDirCantidad12();
    this.costosDirCantidad13 = this.costosService.getCostosDirCantidad13();
    this.costosDirCantidad14 = this.costosService.getCostosDirCantidad14();
    this.costosDirCantidad15 = this.costosService.getCostosDirCantidad15();
    this.costosDirCantidad16 = this.costosService.getCostosDirCantidad16();
    this.costosDirCantidad17 = this.costosService.getCostosDirCantidad17();
    this.costosDirCantidad18 = this.costosService.getCostosDirCantidad18();

    this.costosDirCantidad21 = this.costosService.getCostosDirCantidad21();
    this.costosDirCantidad22 = this.costosService.getCostosDirCantidad22();
    this.costosDirCantidad23 = this.costosService.getCostosDirCantidad23();
    this.costosDirCantidad24 = this.costosService.getCostosDirCantidad24();
    this.costosDirCantidad25 = this.costosService.getCostosDirCantidad25();
    this.costosDirCantidad26 = this.costosService.getCostosDirCantidad26();
    this.costosDirCantidad27 = this.costosService.getCostosDirCantidad27();
    this.costosDirCantidad28 = this.costosService.getCostosDirCantidad28();

    this.costosDirCantidad31 = this.costosService.getCostosDirCantidad31();
    this.costosDirCantidad32 = this.costosService.getCostosDirCantidad32();
    this.costosDirCantidad33 = this.costosService.getCostosDirCantidad33();
    this.costosDirCantidad34 = this.costosService.getCostosDirCantidad34();
    this.costosDirCantidad35 = this.costosService.getCostosDirCantidad35();
    this.costosDirCantidad36 = this.costosService.getCostosDirCantidad36();
    this.costosDirCantidad37 = this.costosService.getCostosDirCantidad37();
    this.costosDirCantidad38 = this.costosService.getCostosDirCantidad38();

    this.costosDirCantidad41 = this.costosService.getCostosDirCantidad41();
    this.costosDirCantidad42 = this.costosService.getCostosDirCantidad42();
    this.costosDirCantidad43 = this.costosService.getCostosDirCantidad43();
    this.costosDirCantidad44 = this.costosService.getCostosDirCantidad44();
    this.costosDirCantidad45 = this.costosService.getCostosDirCantidad45();
    this.costosDirCantidad46 = this.costosService.getCostosDirCantidad46();
    this.costosDirCantidad47 = this.costosService.getCostosDirCantidad47();
    this.costosDirCantidad48 = this.costosService.getCostosDirCantidad48();

    this.costosDirUnidad11 = this.costosService.getCostosDirUnidad11();
    this.costosDirUnidad12 = this.costosService.getCostosDirUnidad12();
    this.costosDirUnidad13 = this.costosService.getCostosDirUnidad13();
    this.costosDirUnidad14 = this.costosService.getCostosDirUnidad14();
    this.costosDirUnidad15 = this.costosService.getCostosDirUnidad15();
    this.costosDirUnidad16 = this.costosService.getCostosDirUnidad16();
    this.costosDirUnidad17 = this.costosService.getCostosDirUnidad17();
    this.costosDirUnidad18 = this.costosService.getCostosDirUnidad18();

    this.costosDirUnidad21 = this.costosService.getCostosDirUnidad21();
    this.costosDirUnidad22 = this.costosService.getCostosDirUnidad22();
    this.costosDirUnidad23 = this.costosService.getCostosDirUnidad23();
    this.costosDirUnidad24 = this.costosService.getCostosDirUnidad24();
    this.costosDirUnidad25 = this.costosService.getCostosDirUnidad25();
    this.costosDirUnidad26 = this.costosService.getCostosDirUnidad26();
    this.costosDirUnidad27 = this.costosService.getCostosDirUnidad27();
    this.costosDirUnidad28 = this.costosService.getCostosDirUnidad28();

    this.costosDirUnidad31 = this.costosService.getCostosDirUnidad31();
    this.costosDirUnidad32 = this.costosService.getCostosDirUnidad32();
    this.costosDirUnidad33 = this.costosService.getCostosDirUnidad33();
    this.costosDirUnidad34 = this.costosService.getCostosDirUnidad34();
    this.costosDirUnidad35 = this.costosService.getCostosDirUnidad35();
    this.costosDirUnidad36 = this.costosService.getCostosDirUnidad36();
    this.costosDirUnidad37 = this.costosService.getCostosDirUnidad37();
    this.costosDirUnidad38 = this.costosService.getCostosDirUnidad38();

    this.costosDirUnidad41 = this.costosService.getCostosDirUnidad41();
    this.costosDirUnidad42 = this.costosService.getCostosDirUnidad42();
    this.costosDirUnidad43 = this.costosService.getCostosDirUnidad43();
    this.costosDirUnidad44 = this.costosService.getCostosDirUnidad44();
    this.costosDirUnidad45 = this.costosService.getCostosDirUnidad45();
    this.costosDirUnidad46 = this.costosService.getCostosDirUnidad46();
    this.costosDirUnidad47 = this.costosService.getCostosDirUnidad47();
    this.costosDirUnidad48 = this.costosService.getCostosDirUnidad48();

    this.costosDirUnPS11 = this.costosService.getCostosDirUnPS11();
    this.costosDirUnPS12 = this.costosService.getCostosDirUnPS12();
    this.costosDirUnPS13 = this.costosService.getCostosDirUnPS13();
    this.costosDirUnPS14 = this.costosService.getCostosDirUnPS14();
    this.costosDirUnPS15 = this.costosService.getCostosDirUnPS15();
    this.costosDirUnPS16 = this.costosService.getCostosDirUnPS16();
    this.costosDirUnPS17 = this.costosService.getCostosDirUnPS17();
    this.costosDirUnPS18 = this.costosService.getCostosDirUnPS18();

    this.costosDirUnPS21 = this.costosService.getCostosDirUnPS21();
    this.costosDirUnPS22 = this.costosService.getCostosDirUnPS22();
    this.costosDirUnPS23 = this.costosService.getCostosDirUnPS23();
    this.costosDirUnPS24 = this.costosService.getCostosDirUnPS24();
    this.costosDirUnPS25 = this.costosService.getCostosDirUnPS25();
    this.costosDirUnPS26 = this.costosService.getCostosDirUnPS26();
    this.costosDirUnPS27 = this.costosService.getCostosDirUnPS27();
    this.costosDirUnPS28 = this.costosService.getCostosDirUnPS28();

    this.costosDirUnPS31 = this.costosService.getCostosDirUnPS31();
    this.costosDirUnPS32 = this.costosService.getCostosDirUnPS32();
    this.costosDirUnPS33 = this.costosService.getCostosDirUnPS33();
    this.costosDirUnPS34 = this.costosService.getCostosDirUnPS34();
    this.costosDirUnPS35 = this.costosService.getCostosDirUnPS35();
    this.costosDirUnPS36 = this.costosService.getCostosDirUnPS36();
    this.costosDirUnPS37 = this.costosService.getCostosDirUnPS37();
    this.costosDirUnPS38 = this.costosService.getCostosDirUnPS38();

    this.costosDirUnPS41 = this.costosService.getCostosDirUnPS41();
    this.costosDirUnPS42 = this.costosService.getCostosDirUnPS42();
    this.costosDirUnPS43 = this.costosService.getCostosDirUnPS43();
    this.costosDirUnPS44 = this.costosService.getCostosDirUnPS44();
    this.costosDirUnPS45 = this.costosService.getCostosDirUnPS45();
    this.costosDirUnPS46 = this.costosService.getCostosDirUnPS46();
    this.costosDirUnPS47 = this.costosService.getCostosDirUnPS47();
    this.costosDirUnPS48 = this.costosService.getCostosDirUnPS48();

    this.costosDirPrecioU12 = this.costosService.getCostosDirPrecioU12();
    this.costosDirPrecioU13 = this.costosService.getCostosDirPrecioU13();
    this.costosDirPrecioU14 = this.costosService.getCostosDirPrecioU14();
    this.costosDirPrecioU15 = this.costosService.getCostosDirPrecioU15();
    this.costosDirPrecioU16 = this.costosService.getCostosDirPrecioU16();
    this.costosDirPrecioU17 = this.costosService.getCostosDirPrecioU17();
    this.costosDirPrecioU18 = this.costosService.getCostosDirPrecioU18();
    this.costosDirPrecioU19 = this.costosService.getCostosDirPrecioU19();

    this.costosDirPrecioU21 = this.costosService.getCostosDirPrecioU21();
    this.costosDirPrecioU22 = this.costosService.getCostosDirPrecioU22();
    this.costosDirPrecioU23 = this.costosService.getCostosDirPrecioU23();
    this.costosDirPrecioU24 = this.costosService.getCostosDirPrecioU24();
    this.costosDirPrecioU25 = this.costosService.getCostosDirPrecioU25();
    this.costosDirPrecioU26 = this.costosService.getCostosDirPrecioU26();
    this.costosDirPrecioU27 = this.costosService.getCostosDirPrecioU27();
    this.costosDirPrecioU28 = this.costosService.getCostosDirPrecioU28();

    this.costosDirPrecioU31 = this.costosService.getCostosDirPrecioU31();
    this.costosDirPrecioU32 = this.costosService.getCostosDirPrecioU32();
    this.costosDirPrecioU33 = this.costosService.getCostosDirPrecioU33();
    this.costosDirPrecioU34 = this.costosService.getCostosDirPrecioU34();
    this.costosDirPrecioU35 = this.costosService.getCostosDirPrecioU35();
    this.costosDirPrecioU36 = this.costosService.getCostosDirPrecioU36();
    this.costosDirPrecioU37 = this.costosService.getCostosDirPrecioU37();
    this.costosDirPrecioU38 = this.costosService.getCostosDirPrecioU38();

    this.costosDirPrecioU41 = this.costosService.getCostosDirPrecioU41();
    this.costosDirPrecioU42 = this.costosService.getCostosDirPrecioU42();
    this.costosDirPrecioU43 = this.costosService.getCostosDirPrecioU43();
    this.costosDirPrecioU44 = this.costosService.getCostosDirPrecioU44();
    this.costosDirPrecioU45 = this.costosService.getCostosDirPrecioU45();
    this.costosDirPrecioU46 = this.costosService.getCostosDirPrecioU46();
    this.costosDirPrecioU47 = this.costosService.getCostosDirPrecioU47();
    this.costosDirPrecioU48 = this.costosService.getCostosDirPrecioU48();

    this.costosDirTotalABC11 = this.costosService.getCostosDirTotalABC11();
    this.costosDirTotalABC12 = this.costosService.getCostosDirTotalABC12();
    this.costosDirTotalABC13 = this.costosService.getCostosDirTotalABC13();
    this.costosDirTotalABC14 = this.costosService.getCostosDirTotalABC14();
    this.costosDirTotalABC15 = this.costosService.getCostosDirTotalABC15();
    this.costosDirTotalABC16 = this.costosService.getCostosDirTotalABC16();
    this.costosDirTotalABC17 = this.costosService.getCostosDirTotalABC17();
    this.costosDirTotalABC18 = this.costosService.getCostosDirTotalABC18();

    this.costosDirTotalABC21 = this.costosService.getCostosDirTotalABC21();
    this.costosDirTotalABC22 = this.costosService.getCostosDirTotalABC22();
    this.costosDirTotalABC23 = this.costosService.getCostosDirTotalABC23();
    this.costosDirTotalABC24 = this.costosService.getCostosDirTotalABC24();
    this.costosDirTotalABC25 = this.costosService.getCostosDirTotalABC25();
    this.costosDirTotalABC26 = this.costosService.getCostosDirTotalABC26();
    this.costosDirTotalABC27 = this.costosService.getCostosDirTotalABC27();
    this.costosDirTotalABC28 = this.costosService.getCostosDirTotalABC28();

    this.costosDirTotalABC31 = this.costosService.getCostosDirTotalABC31();
    this.costosDirTotalABC32 = this.costosService.getCostosDirTotalABC32();
    this.costosDirTotalABC33 = this.costosService.getCostosDirTotalABC33();
    this.costosDirTotalABC34 = this.costosService.getCostosDirTotalABC34();
    this.costosDirTotalABC35 = this.costosService.getCostosDirTotalABC35();
    this.costosDirTotalABC36 = this.costosService.getCostosDirTotalABC36();
    this.costosDirTotalABC37 = this.costosService.getCostosDirTotalABC37();
    this.costosDirTotalABC38 = this.costosService.getCostosDirTotalABC38();

    this.costosDirTotalABC41 = this.costosService.getCostosDirTotalABC41();
    this.costosDirTotalABC42 = this.costosService.getCostosDirTotalABC42();
    this.costosDirTotalABC43 = this.costosService.getCostosDirTotalABC43();
    this.costosDirTotalABC44 = this.costosService.getCostosDirTotalABC44();
    this.costosDirTotalABC45 = this.costosService.getCostosDirTotalABC45();
    this.costosDirTotalABC46 = this.costosService.getCostosDirTotalABC46();
    this.costosDirTotalABC47 = this.costosService.getCostosDirTotalABC47();
    this.costosDirTotalABC48 = this.costosService.getCostosDirTotalABC48();

    this.costosDirTotaCD1 = this.costosService.getCostosDirTotaCD1();
    this.costosDirTotaCD2 = this.costosService.getCostosDirTotaCD2();
    this.costosDirTotaCD3 = this.costosService.getCostosDirTotaCD3();
    this.costosDirTotaCD4 = this.costosService.getCostosDirTotaCD4();

    this.costosDirTotalPV1 = this.costosService.getCostosDirTotalPV1();
    this.costosDirTotalPV2 = this.costosService.getCostosDirTotalPV2();
    this.costosDirTotalPV3 = this.costosService.getCostosDirTotalPV3();
    this.costosDirTotalPV4 = this.costosService.getCostosDirTotalPV4();


  }

  asignarValor(value: string, valor: any) {
    const valueM: string = this.costos + value;      //setHome${NombreDeudor}

    (this.costosService as any)[valueM](valor);
  }
  // asignar a producto o servicio
  asignarProdServ1() {
    this.costosDirProdOServ1 = this.costosDirProdServ1;
    this.costosService.setCostosDirProdOServ1(this.costosDirProdOServ1);
  }
  asignarProdServ2() {
    this.costosDirProdOServ2 = this.costosDirProdServ2;
    this.costosService.setCostosDirProdOServ2(this.costosDirProdOServ2);
  }
  asignarProdServ3() {
    this.costosDirProdOServ3 = this.costosDirProdServ3;
    this.costosService.setCostosDirProdOServ3(this.costosDirProdOServ3);
  }
  asignarProdServ4() {
    this.costosDirProdOServ4 = this.costosDirProdServ4;
    this.costosService.setCostosDirProdOServ4(this.costosDirProdOServ4);
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(result => {
        if (result.matches) {
          this.colSize = this.calculateColSize(result.breakpoints);
          //this.colSize2 = this.calculateColSize2(result.breakpoints);
        } else {
          this.colSize = 3; // Pantallas más grandes, 4 columnas
          //this.colSize2 = 1;
        }
      });
  }
  ///Producto servicios tipo cantidad unidad frecuencia

  ///comportamientos de ventas
  selectVentaMensual1() {
    if (this.costosDirEne === 'A') {
      this.costosDirEneVM = this.costosDirRangoA;
    } else if (this.costosDirEne === 'M') {
      this.costosDirEneVM = this.costosDirRangoB;
    } else if (this.costosDirEne === 'B') {
      this.costosDirEneVM = this.costosDirRangoC;
    } else {
      this.costosDirEneVM = 0;
    }
    this.costosService.setCostosDirEne(this.costosDirEne);
    this.costosService.setCostosDirEneVM(this.costosDirEneVM);
    this.activar();
  }
  selectVentaMensual2() {
    if (this.costosDirFeb === 'A') {
      this.costosDirFebVM = this.costosDirRangoA;
    } else if (this.costosDirFeb === 'M') {
      this.costosDirFebVM = this.costosDirRangoB;
    } else if (this.costosDirFeb === 'B') {
      this.costosDirFebVM = this.costosDirRangoC;
    } else {
      this.costosDirFebVM = 0;
    }
    this.costosService.setCostosDirFeb(this.costosDirFeb);
    this.costosService.setCostosDirFebVM(this.costosDirFebVM);
    this.activar();
  }
  selectVentaMensual3() {
    if (this.costosDirMar === 'A') {
      this.costosDirMarVM = this.costosDirRangoA;
    } else if (this.costosDirMar === 'M') {
      this.costosDirMarVM = this.costosDirRangoB;
    } else if (this.costosDirMar === 'B') {
      this.costosDirMarVM = this.costosDirRangoC;
    } else {
      this.costosDirMarVM = 0;
    }
    this.costosService.setCostosDirMar(this.costosDirMar);
    this.costosService.setCostosDirMarVM(this.costosDirMarVM);
    this.activar();
  }
  selectVentaMensual4() {
    if (this.costosDirAbr === 'A') {
      this.costosDirAbrVM = this.costosDirRangoA;
    } else if (this.costosDirAbr === 'M') {
      this.costosDirAbrVM = this.costosDirRangoB;
    } else if (this.costosDirAbr === 'B') {
      this.costosDirAbrVM = this.costosDirRangoC;
    } else {
      this.costosDirAbrVM = 0;
    }
    this.costosService.setCostosDirAbr(this.costosDirAbr);
    this.costosService.setCostosDirAbrVM(this.costosDirAbrVM);
    this.activar();
  }
  selectVentaMensual5() {
    if (this.costosDirMay === 'A') {
      this.costosDirMayVM = this.costosDirRangoA;
    } else if (this.costosDirMay === 'M') {
      this.costosDirMayVM = this.costosDirRangoB;
    } else if (this.costosDirMay === 'B') {
      this.costosDirMayVM = this.costosDirRangoC;
    } else {
      this.costosDirMayVM = 0;
    }
    this.costosService.setCostosDirMay(this.costosDirMay);
    this.costosService.setCostosDirMayVM(this.costosDirMayVM);
    this.activar();
  }
  selectVentaMensual6() {
    if (this.costosDirJun === 'A') {
      this.costosDirJunVM = this.costosDirRangoA;
    } else if (this.costosDirJun === 'M') {
      this.costosDirJunVM = this.costosDirRangoB;
    } else if (this.costosDirJun === 'B') {
      this.costosDirJunVM = this.costosDirRangoC;
    } else {
      this.costosDirJunVM = 0;
    }
    this.costosService.setCostosDirJun(this.costosDirJun);
    this.costosService.setCostosDirJunVM(this.costosDirJunVM);
    this.activar();
  }
  selectVentaMensual7() {
    if (this.costosDirJul === 'A') {
      this.costosDirJulVM = this.costosDirRangoA;
    } else if (this.costosDirJul === 'M') {
      this.costosDirJulVM = this.costosDirRangoB;
    } else if (this.costosDirJul === 'B') {
      this.costosDirJulVM = this.costosDirRangoC;
    } else {
      this.costosDirJulVM = 0;
    }
    this.costosService.setCostosDirJul(this.costosDirJul);
    this.costosService.setCostosDirJulVM(this.costosDirJulVM);
    this.activar();
  }
  selectVentaMensual8() {
    if (this.costosDirAgo === 'A') {
      this.costosDirAgoVM = this.costosDirRangoA;
    } else if (this.costosDirAgo === 'M') {
      this.costosDirAgoVM = this.costosDirRangoB;
    } else if (this.costosDirAgo === 'B') {
      this.costosDirAgoVM = this.costosDirRangoC;
    } else {
      this.costosDirAgoVM = 0;
    }
    this.costosService.setCostosDirAgo(this.costosDirAgo);
    this.costosService.setCostosDirAgoVM(this.costosDirAgoVM);
    this.activar();
  }
  selectVentaMensual9() {
    if (this.costosDirSep === 'A') {
      this.costosDirSepVM = this.costosDirRangoA;
    } else if (this.costosDirSep === 'M') {
      this.costosDirSepVM = this.costosDirRangoB;
    } else if (this.costosDirSep === 'B') {
      this.costosDirSepVM = this.costosDirRangoC;
    } else {
      this.costosDirSepVM = 0;
    }
    this.costosService.setCostosDirSep(this.costosDirSep);
    this.costosService.setCostosDirSepVM(this.costosDirSepVM);
    this.activar();
  }
  selectVentaMensual10() {
    if (this.costosDirOct === 'A') {
      this.costosDirOctVM = this.costosDirRangoA;
    } else if (this.costosDirOct === 'M') {
      this.costosDirOctVM = this.costosDirRangoB;
    } else if (this.costosDirOct === 'B') {
      this.costosDirOctVM = this.costosDirRangoC;
    } else {
      this.costosDirOctVM = 0;
    }
    this.costosService.setCostosDirOct(this.costosDirOct);
    this.costosService.setCostosDirOctVM(this.costosDirOctVM);
    this.activar();
  }
  selectVentaMensual11() {
    if (this.costosDirNov === 'A') {
      this.costosDirNovVM = this.costosDirRangoA;
    } else if (this.costosDirNov === 'M') {
      this.costosDirNovVM = this.costosDirRangoB;
    } else if (this.costosDirNov === 'B') {
      this.costosDirNovVM = this.costosDirRangoC;
    } else {
      this.costosDirNovVM = 0;
    }
    this.costosService.setCostosDirNov(this.costosDirNov);
    this.costosService.setCostosDirNovVM(this.costosDirNovVM);
    this.activar();
  }
  selectVentaMensual12() {
    if (this.costosDirDic === 'A') {
      this.costosDirDicVM = this.costosDirRangoA;
    } else if (this.costosDirDic === 'M') {
      this.costosDirDicVM = this.costosDirRangoB;
    } else if (this.costosDirDic === 'B') {
      this.costosDirDicVM = this.costosDirRangoC;
    } else {
      this.costosDirDicVM = 0;
    }
    this.costosService.setCostosDirDic(this.costosDirDic);
    this.costosService.setCostosDirDicVM(this.costosDirDicVM);
    this.activar();
  }

  calculateColSize(breakpoints: { [key: string]: boolean }): number {
    if (breakpoints[Breakpoints.XSmall]) {
      return 3; // Pantallas extra pequeñas, 1 columna
    } else if (breakpoints[Breakpoints.Small]) {
      return 3; // Pantallas pequeñas, 2 columnas
    } else if (breakpoints[Breakpoints.Medium]) {
      return 3; // Pantallas medianas, 3 columnas
    } else {
      return 3; // Por defecto, 4 columnas
    }
  }
  //  calculateColSize2(breakpoints: { [key: string]: boolean }): number {
  //    if (breakpoints[Breakpoints.XSmall]) {
  //      return 2; // Pantallas extra pequeñas, 1 columna
  //    } else if (breakpoints[Breakpoints.Small]) {
  //      return 2; // Pantallas pequeñas, 2 columnas
  //    } else if (breakpoints[Breakpoints.Medium]) {
  //      return 1; // Pantallas medianas, 3 columnas
  //    } else {
  //      return 1; // Por defecto, 4 columnas
  //    }
  //  }
  //  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  inputValues: (number | null)[] = [];
  total: number = 0;
  input!: number;

  calculateTotal(): void {
    this.total = this.inputValues
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
  }
  asignarCantidad1() { this.costosService.setCostosDirCantidad11(this.costosDirCantidad11); }
  asignarCantidad2() { this.costosService.setCostosDirCantidad12(this.costosDirCantidad12); }
  asignarCantidad3() { this.costosService.setCostosDirCantidad13(this.costosDirCantidad13); }
  asignarCantidad4() { this.costosService.setCostosDirCantidad14(this.costosDirCantidad14); }
  asignarCantidad5() { this.costosService.setCostosDirCantidad15(this.costosDirCantidad15); }
  asignarCantidad6() { this.costosService.setCostosDirCantidad16(this.costosDirCantidad16); }
  asignarCantidad7() { this.costosService.setCostosDirCantidad17(this.costosDirCantidad17); }
  asignarCantidad8() { this.costosService.setCostosDirCantidad18(this.costosDirCantidad18); }

  calculateABC1() {
    this.costosDirTotalABC11 = (this.costosDirCantidad11 / this.costosDirUnPS11) * this.costosDirPrecioU12;
    this.costosService.setCostosDirTotalABC11(this.costosDirTotalABC11);
    this.calculateSumaABC()
  }
  calculateABC2() {
    this.costosDirTotalABC12 = ((this.costosDirCantidad12 / this.costosDirUnPS12) * this.costosDirPrecioU13) ?? 0;
    this.costosService.setCostosDirTotalABC12(this.costosDirTotalABC12);
    this.calculateSumaABC()
  }
  calculateABC3() {
    this.costosDirTotalABC13 = ((this.costosDirCantidad13 / this.costosDirUnPS13) * this.costosDirPrecioU14) ?? 0;
    this.costosService.setCostosDirTotalABC13(this.costosDirTotalABC13);
    this.calculateSumaABC()
  }
  calculateABC4() {
    this.costosDirTotalABC14 = ((this.costosDirCantidad14 / this.costosDirUnPS14) * this.costosDirPrecioU15) ?? 0;
    this.costosService.setCostosDirTotalABC14(this.costosDirTotalABC14);
    this.calculateSumaABC()
  }
  calculateABC5() {
    this.costosDirTotalABC15 = ((this.costosDirCantidad15 / this.costosDirUnPS15) * this.costosDirPrecioU16) ?? 0;
    this.costosService.setCostosDirTotalABC15(this.costosDirTotalABC15);
    this.calculateSumaABC()
  }
  calculateABC6() {
    this.costosDirTotalABC16 = ((this.costosDirCantidad16 / this.costosDirUnPS16) * this.costosDirPrecioU17) ?? 0;
    this.costosService.setCostosDirTotalABC16(this.costosDirTotalABC16);
    this.calculateSumaABC()
  }
  calculateABC7() {
    this.costosDirTotalABC17 = ((this.costosDirCantidad17 / this.costosDirUnPS17) * this.costosDirPrecioU18) ?? 0;
    this.costosService.setCostosDirTotalABC17(this.costosDirTotalABC17);
    this.calculateSumaABC()
  }
  calculateABC8() {
    this.costosDirTotalABC18 = ((this.costosDirCantidad18 / this.costosDirUnPS18) * this.costosDirPrecioU19) ?? 0;
    this.costosService.setCostosDirTotalABC18(this.costosDirTotalABC18);
    this.calculateSumaABC()
  }

  calculateSumaABC() {
    this.costosDirTotaCD1 =
      (isNaN(this.costosDirTotalABC11) ? 0 : this.costosDirTotalABC11) +
      (isNaN(this.costosDirTotalABC12) ? 0 : this.costosDirTotalABC12) +
      (isNaN(this.costosDirTotalABC13) ? 0 : this.costosDirTotalABC13) +
      (isNaN(this.costosDirTotalABC14) ? 0 : this.costosDirTotalABC14) +
      (isNaN(this.costosDirTotalABC15) ? 0 : this.costosDirTotalABC15) +
      (isNaN(this.costosDirTotalABC16) ? 0 : this.costosDirTotalABC16) +
      (isNaN(this.costosDirTotalABC17) ? 0 : this.costosDirTotalABC17) +
      (isNaN(this.costosDirTotalABC18) ? 0 : this.costosDirTotalABC18);
    this.costosService.setCostosDirTotaCD1(this.costosDirTotaCD1);
    this.costosDirPrecioC1 = this.costosDirTotaCD1;
    this.costosService.setCostosDirPrecioC1(this.costosDirPrecioC1);
  }

  // 2da tabla
  calculateABC21() {
    this.costosDirTotalABC21 = (this.costosDirCantidad21 / this.costosDirUnPS21) * this.costosDirPrecioU21;
    this.costosService.setCostosDirTotalABC21(this.costosDirTotalABC21);
    this.calculateSumaABC2()
  }
  calculateABC22() {
    this.costosDirTotalABC22 = ((this.costosDirCantidad22 / this.costosDirUnPS22) * this.costosDirPrecioU22) ?? 0;
    this.costosService.setCostosDirTotalABC22(this.costosDirTotalABC22);
    this.calculateSumaABC2()
  }
  calculateABC23() {
    this.costosDirTotalABC23 = ((this.costosDirCantidad23 / this.costosDirUnPS23) * this.costosDirPrecioU23) ?? 0;
    this.costosService.setCostosDirTotalABC23(this.costosDirTotalABC23);
    this.calculateSumaABC2()
  }
  calculateABC24() {
    this.costosDirTotalABC24 = ((this.costosDirCantidad24 / this.costosDirUnPS24) * this.costosDirPrecioU24) ?? 0;
    this.costosService.setCostosDirTotalABC24(this.costosDirTotalABC24);
    this.calculateSumaABC2()
  }
  calculateABC25() {
    this.costosDirTotalABC25 = ((this.costosDirCantidad25 / this.costosDirUnPS25) * this.costosDirPrecioU25) ?? 0;
    this.costosService.setCostosDirTotalABC25(this.costosDirTotalABC25);
    this.calculateSumaABC2()
  }
  calculateABC26() {
    this.costosDirTotalABC26 = ((this.costosDirCantidad26 / this.costosDirUnPS26) * this.costosDirPrecioU26) ?? 0;
    this.costosService.setCostosDirTotalABC26(this.costosDirTotalABC26);
    this.calculateSumaABC2()
  }
  calculateABC27() {
    this.costosDirTotalABC27 = ((this.costosDirCantidad27 / this.costosDirUnPS27) * this.costosDirPrecioU27) ?? 0;
    this.costosService.setCostosDirTotalABC27(this.costosDirTotalABC27);
    this.calculateSumaABC2()
  }
  calculateABC28() {
    this.costosDirTotalABC28 = ((this.costosDirCantidad28 / this.costosDirUnPS28) * this.costosDirPrecioU28) ?? 0;
    this.costosService.setCostosDirTotalABC28(this.costosDirTotalABC28);
    this.calculateSumaABC2()
  }

  calculateSumaABC2() {
    this.costosDirTotaCD2 =
      (isNaN(this.costosDirTotalABC21) ? 0 : this.costosDirTotalABC21) +
      (isNaN(this.costosDirTotalABC22) ? 0 : this.costosDirTotalABC22) +
      (isNaN(this.costosDirTotalABC23) ? 0 : this.costosDirTotalABC23) +
      (isNaN(this.costosDirTotalABC24) ? 0 : this.costosDirTotalABC24) +
      (isNaN(this.costosDirTotalABC25) ? 0 : this.costosDirTotalABC25) +
      (isNaN(this.costosDirTotalABC26) ? 0 : this.costosDirTotalABC26) +
      (isNaN(this.costosDirTotalABC27) ? 0 : this.costosDirTotalABC27) +
      (isNaN(this.costosDirTotalABC28) ? 0 : this.costosDirTotalABC28);
    this.costosService.setCostosDirTotaCD2(this.costosDirTotaCD2);
    this.costosDirPrecioC2 = this.costosDirTotaCD2;
    this.costosService.setCostosDirPrecioC2(this.costosDirPrecioC2);
  }
  //// 3ra tabla
  calculateABC31() {
    this.costosDirTotalABC31 = (this.costosDirCantidad31 / this.costosDirUnPS31) * this.costosDirPrecioU31;
    this.costosService.setCostosDirTotalABC31(this.costosDirTotalABC31);
    this.calculateSumaABC3()
  }
  calculateABC32() {
    this.costosDirTotalABC32 = ((this.costosDirCantidad32 / this.costosDirUnPS32) * this.costosDirPrecioU32) ?? 0;
    this.costosService.setCostosDirTotalABC32(this.costosDirTotalABC32);
    this.calculateSumaABC3()
  }
  calculateABC33() {
    this.costosDirTotalABC33 = ((this.costosDirCantidad33 / this.costosDirUnPS33) * this.costosDirPrecioU33) ?? 0;
    this.costosService.setCostosDirTotalABC33(this.costosDirTotalABC33);
    this.calculateSumaABC3()
  }
  calculateABC34() {
    this.costosDirTotalABC34 = ((this.costosDirCantidad34 / this.costosDirUnPS34) * this.costosDirPrecioU34) ?? 0;
    this.costosService.setCostosDirTotalABC34(this.costosDirTotalABC34);
    this.calculateSumaABC3()
  }
  calculateABC35() {
    this.costosDirTotalABC35 = ((this.costosDirCantidad35 / this.costosDirUnPS35) * this.costosDirPrecioU35) ?? 0;
    this.costosService.setCostosDirTotalABC35(this.costosDirTotalABC35);
    this.calculateSumaABC3()
  }
  calculateABC36() {
    this.costosDirTotalABC36 = ((this.costosDirCantidad36 / this.costosDirUnPS36) * this.costosDirPrecioU36) ?? 0;
    this.costosService.setCostosDirTotalABC36(this.costosDirTotalABC36);
    this.calculateSumaABC3()
  }
  calculateABC37() {
    this.costosDirTotalABC37 = ((this.costosDirCantidad37 / this.costosDirUnPS37) * this.costosDirPrecioU37) ?? 0;
    this.costosService.setCostosDirTotalABC37(this.costosDirTotalABC37);
    this.calculateSumaABC3()
  }
  calculateABC38() {
    this.costosDirTotalABC38 = ((this.costosDirCantidad38 / this.costosDirUnPS38) * this.costosDirPrecioU38) ?? 0;
    this.costosService.setCostosDirTotalABC38(this.costosDirTotalABC38);
    this.calculateSumaABC3()
  }

  calculateSumaABC3() {
    this.costosDirTotaCD3 =
      (isNaN(this.costosDirTotalABC31) ? 0 : this.costosDirTotalABC31) +
      (isNaN(this.costosDirTotalABC32) ? 0 : this.costosDirTotalABC32) +
      (isNaN(this.costosDirTotalABC33) ? 0 : this.costosDirTotalABC33) +
      (isNaN(this.costosDirTotalABC34) ? 0 : this.costosDirTotalABC34) +
      (isNaN(this.costosDirTotalABC35) ? 0 : this.costosDirTotalABC35) +
      (isNaN(this.costosDirTotalABC36) ? 0 : this.costosDirTotalABC36) +
      (isNaN(this.costosDirTotalABC37) ? 0 : this.costosDirTotalABC37) +
      (isNaN(this.costosDirTotalABC38) ? 0 : this.costosDirTotalABC38);
    this.costosService.setCostosDirTotaCD3(this.costosDirTotaCD3);
    this.costosDirPrecioC3 = this.costosDirTotaCD3;
    this.costosService.setCostosDirPrecioC3(this.costosDirPrecioC3);
  }

  //// 4ta tabla
  calculateABC41() {
    this.costosDirTotalABC41 = (this.costosDirCantidad41 / this.costosDirUnPS41) * this.costosDirPrecioU41;
    this.costosService.setCostosDirTotalABC41(this.costosDirTotalABC41);
    this.calculateSumaABC4()
  }
  calculateABC42() {
    this.costosDirTotalABC42 = ((this.costosDirCantidad42 / this.costosDirUnPS42) * this.costosDirPrecioU42) ?? 0;
    this.costosService.setCostosDirTotalABC42(this.costosDirTotalABC42);
    this.calculateSumaABC4()
  }
  calculateABC43() {
    this.costosDirTotalABC43 = ((this.costosDirCantidad43 / this.costosDirUnPS43) * this.costosDirPrecioU43) ?? 0;
    this.costosService.setCostosDirTotalABC43(this.costosDirTotalABC43);
    this.calculateSumaABC4()
  }
  calculateABC44() {
    this.costosDirTotalABC44 = ((this.costosDirCantidad44 / this.costosDirUnPS44) * this.costosDirPrecioU44) ?? 0;
    this.costosService.setCostosDirTotalABC44(this.costosDirTotalABC44);
    this.calculateSumaABC4()
  }
  calculateABC45() {
    this.costosDirTotalABC45 = ((this.costosDirCantidad45 / this.costosDirUnPS45) * this.costosDirPrecioU45) ?? 0;
    this.costosService.setCostosDirTotalABC45(this.costosDirTotalABC45);
    this.calculateSumaABC4()
  }
  calculateABC46() {
    this.costosDirTotalABC46 = ((this.costosDirCantidad46 / this.costosDirUnPS46) * this.costosDirPrecioU46) ?? 0;
    this.costosService.setCostosDirTotalABC46(this.costosDirTotalABC46);
    this.calculateSumaABC4()
  }
  calculateABC47() {
    this.costosDirTotalABC47 = ((this.costosDirCantidad47 / this.costosDirUnPS47) * this.costosDirPrecioU47) ?? 0;
    this.costosService.setCostosDirTotalABC47(this.costosDirTotalABC47);
    this.calculateSumaABC4()
  }
  calculateABC48() {
    this.costosDirTotalABC48 = ((this.costosDirCantidad48 / this.costosDirUnPS48) * this.costosDirPrecioU48) ?? 0;
    this.costosService.setCostosDirTotalABC48(this.costosDirTotalABC48);
    this.calculateSumaABC4()
  }

  calculateSumaABC4() {
    this.costosDirTotaCD4 =
      (isNaN(this.costosDirTotalABC41) ? 0 : this.costosDirTotalABC41) +
      (isNaN(this.costosDirTotalABC42) ? 0 : this.costosDirTotalABC42) +
      (isNaN(this.costosDirTotalABC43) ? 0 : this.costosDirTotalABC43) +
      (isNaN(this.costosDirTotalABC44) ? 0 : this.costosDirTotalABC44) +
      (isNaN(this.costosDirTotalABC45) ? 0 : this.costosDirTotalABC45) +
      (isNaN(this.costosDirTotalABC46) ? 0 : this.costosDirTotalABC46) +
      (isNaN(this.costosDirTotalABC47) ? 0 : this.costosDirTotalABC47) +
      (isNaN(this.costosDirTotalABC48) ? 0 : this.costosDirTotalABC48);
    this.costosService.setCostosDirTotaCD4(this.costosDirTotaCD4);
    this.costosDirPrecioC4 = this.costosDirTotaCD4;
    this.costosService.setCostosDirPrecioC4(this.costosDirPrecioC4);
  }
  ///

  calculateTotalCompraMensual(value: string, index: number) {
    switch (index) {
      case 1:
        if (value == 'Diario') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalCM1 = ((isNaN(this.costosDirPrecioC1) ? 0 : this.costosDirPrecioC1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1)) * (30 / 360);
        } else {
          this.costosDirTotalCM1 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia1(value);
        this.costosService.setCostosDirTotalCM1(this.costosDirTotalCM1);
        this.calculateTotalTotalCompraMensual();
        this.activar();
        break;
      case 2:
        if (value == 'Diario') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalCM2 = ((isNaN(this.costosDirPrecioC2) ? 0 : this.costosDirPrecioC2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2)) * (30 / 360);
        } else {
          this.costosDirTotalCM2 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia2(value);
        this.costosService.setCostosDirTotalCM2(this.costosDirTotalCM2);
        this.calculateTotalTotalCompraMensual();
        this.activar();
        break;
      case 3:
        if (value == 'Diario') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalCM3 = ((isNaN(this.costosDirPrecioC3) ? 0 : this.costosDirPrecioC3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3)) * (30 / 360);
        } else {
          this.costosDirTotalCM3 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia3(value);
        this.costosService.setCostosDirTotalCM3(this.costosDirTotalCM3);
        this.calculateTotalTotalCompraMensual();
        this.activar();
        break;
      case 4:
        if (value == 'Diario') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalCM4 = ((isNaN(this.costosDirPrecioC4) ? 0 : this.costosDirPrecioC4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4)) * (30 / 360);
        } else {
          this.costosDirTotalCM4 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia4(value);
        this.costosService.setCostosDirTotalCM4(this.costosDirTotalCM4);
        this.calculateTotalTotalCompraMensual();
        this.activar();
        break;

      default:
        break;
    }
  }
  calculateTotalVentaMensual(value: string, index: number) {
    switch (index) {
      case 1:
        if (value == 'Diario') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalVM1 = (isNaN(this.costosDirPrecioV1) ? 0 : this.costosDirPrecioV1) * (isNaN(this.costosDirProdCantidad1) ? 0 : this.costosDirProdCantidad1) * (30 / 360);
        } else {
          this.costosDirTotalVM1 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia1(value);
        this.costosService.setCostosDirTotalVM1(this.costosDirTotalVM1);
        this.calculateMUB1();
        this.calculateTotalTotalVentaMensual();
        this.activar();
        break;
      case 2:
        if (value == 'Diario') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalVM2 = (isNaN(this.costosDirPrecioV2) ? 0 : this.costosDirPrecioV2) * (isNaN(this.costosDirProdCantidad2) ? 0 : this.costosDirProdCantidad2) * (30 / 360);
        } else {
          this.costosDirTotalVM2 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia2(value);
        this.costosService.setCostosDirTotalVM2(this.costosDirTotalVM2);
        this.calculateMUB2()
        this.calculateTotalTotalVentaMensual();
        this.activar();
        break;
      case 3:
        if (value == 'Diario') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalVM3 = (isNaN(this.costosDirPrecioV3) ? 0 : this.costosDirPrecioV3) * (isNaN(this.costosDirProdCantidad3) ? 0 : this.costosDirProdCantidad3) * (30 / 360);
        } else {
          this.costosDirTotalVM3 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia3(value);
        this.costosService.setCostosDirTotalVM3(this.costosDirTotalVM3);
        this.calculateMUB3()
        this.calculateTotalTotalVentaMensual();
        this.activar();
        break;
      case 4:
        if (value == 'Diario') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * 25;
        } else if (value == 'Semanal') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * 4;
        } else if (value == 'Quincenal') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * 2;
        } else if (value == 'Mensual') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * 1;
        } else if (value == 'Bimestral') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * 0.5;
        } else if (value == 'Trimestral') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * (30 / 90);
        } else if (value == 'Semestral') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * (30 / 180);
        } else if (value == 'Anual') {
          this.costosDirTotalVM4 = (isNaN(this.costosDirPrecioV4) ? 0 : this.costosDirPrecioV4) * (isNaN(this.costosDirProdCantidad4) ? 0 : this.costosDirProdCantidad4) * (30 / 360);
        } else {
          this.costosDirTotalVM4 = 0;
        }
        this.costosService.setCostosDirProdFrecuencia4(value);
        this.costosService.setCostosDirTotalVM4(this.costosDirTotalVM4);
        this.calculateMUB4()
        this.calculateTotalTotalVentaMensual();
        this.activar();
        break;

      default:
        break;
    }
  }
  calculateMUB1() {
    this.costosDirMub1 = ((isNaN(this.costosDirTotalVM1) ? 0 : this.costosDirTotalVM1) - (isNaN(this.costosDirTotalCM1) ? 0 : this.costosDirTotalCM1)) / (isNaN(this.costosDirTotalVM1) ? 0 : this.costosDirTotalVM1)
    this.costosDirMub1 = (isNaN(this.costosDirMub1) ? 0 : this.costosDirMub1)
    this.costosService.setCostosDirMub1(this.costosDirMub1);
    this.calcularTotalMUB();
  }
  calculateMUB2() {
    this.costosDirMub2 = ((isNaN(this.costosDirTotalVM2) ? 0 : this.costosDirTotalVM2) - (isNaN(this.costosDirTotalCM2) ? 0 : this.costosDirTotalCM2)) / (isNaN(this.costosDirTotalVM2) ? 0 : this.costosDirTotalVM2)
    this.costosDirMub2 = (isNaN(this.costosDirMub2) ? 0 : this.costosDirMub2)
    this.costosService.setCostosDirMub2(this.costosDirMub2);
    this.calcularTotalMUB();
  }
  calculateMUB3() {
    this.costosDirMub3 = ((isNaN(this.costosDirTotalVM3) ? 0 : this.costosDirTotalVM3) - (isNaN(this.costosDirTotalCM3) ? 0 : this.costosDirTotalCM3)) / (isNaN(this.costosDirTotalVM3) ? 0 : this.costosDirTotalVM3)
    this.costosDirMub3 = (isNaN(this.costosDirMub3) ? 0 : this.costosDirMub3)
    this.costosService.setCostosDirMub3(this.costosDirMub3);
    this.calcularTotalMUB();
  }
  calculateMUB4() {
    this.costosDirMub4 = ((isNaN(this.costosDirTotalVM4) ? 0 : this.costosDirTotalVM4) - (isNaN(this.costosDirTotalCM4) ? 0 : this.costosDirTotalCM4)) / (isNaN(this.costosDirTotalVM4) ? 0 : this.costosDirTotalVM4)
    this.costosDirMub4 = (isNaN(this.costosDirMub4) ? 0 : this.costosDirMub4)
    this.costosService.setCostosDirMub4(this.costosDirMub4);
    this.calcularTotalMUB();
  }
  asignarPrecioV(value: number, index: number) {
    switch (index) {
      case 1:
        this.costosDirPrecioV1 = value;
        this.costosService.setCostosDirPrecioV1(this.costosDirPrecioV1);
        break;
      case 2:
        this.costosDirPrecioV2 = value;
        this.costosService.setCostosDirPrecioV2(this.costosDirPrecioV2);
        break;
      case 3:
        this.costosDirPrecioV3 = value;
        this.costosService.setCostosDirPrecioV3(this.costosDirPrecioV3);
        break;
      case 4:
        this.costosDirPrecioV4 = value;
        this.costosService.setCostosDirPrecioV4(this.costosDirPrecioV4);
        break;

      default:
        break;
    }
  }

  calculateTotalTotalCompraMensual() {
    this.costosDirTotalCMT =
      (isNaN(this.costosDirTotalCM1) ? 0 : this.costosDirTotalCM1) +
      (isNaN(this.costosDirTotalCM2) ? 0 : this.costosDirTotalCM2) +
      (isNaN(this.costosDirTotalCM3) ? 0 : this.costosDirTotalCM3) +
      (isNaN(this.costosDirTotalCM4) ? 0 : this.costosDirTotalCM4);

    this.costosService.setCostosDirTotalCMT(this.costosDirTotalCMT);
  }
  calculateTotalTotalVentaMensual() {
    this.costosDirTotalVMT =
      (isNaN(this.costosDirTotalVM1) ? 0 : this.costosDirTotalVM1) +
      (isNaN(this.costosDirTotalVM2) ? 0 : this.costosDirTotalVM2) +
      (isNaN(this.costosDirTotalVM3) ? 0 : this.costosDirTotalVM3) +
      (isNaN(this.costosDirTotalVM4) ? 0 : this.costosDirTotalVM4);

    this.costosService.setCostosDirTotalVMT(this.costosDirTotalVMT);
  }
  calcularTotalMUB(): number {
    this.costosDirMubT = ((this.costosDirTotalVMT - this.costosDirTotalCMT) / this.costosDirTotalVMT);
    const resultado = (isNaN(this.costosDirMubT) ? 0 : this.costosDirMubT);
    this.costosService.setCostosDirMubT(resultado);
    return resultado;
  }
  //// Costos de producción mensual
  calculateCostosProdMensual1() {
    this.costosDirEneCPM = this.costosDirEneVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirEneCPM(this.costosDirEneCPM);
  }
  calculateCostosProdMensual2() {
    this.costosDirFebCPM = this.costosDirFebVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirFebCPM(this.costosDirFebCPM);
  }
  calculateCostosProdMensual3() {
    this.costosDirMarCPM = this.costosDirMarVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirMarCPM(this.costosDirMarCPM);
  }
  calculateCostosProdMensual4() {
    this.costosDirAbrCPM = this.costosDirAbrVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirAbrCPM(this.costosDirAbrCPM);
  }
  calculateCostosProdMensual5() {
    this.costosDirMayCPM = this.costosDirMayVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirMayCPM(this.costosDirMayCPM);
  }
  calculateCostosProdMensual6() {
    this.costosDirJunCPM = this.costosDirJunVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirJunCPM(this.costosDirJunCPM);
  }
  calculateCostosProdMensual7() {
    this.costosDirJulCPM = this.costosDirJulVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirJulCPM(this.costosDirJulCPM);
  }
  calculateCostosProdMensual8() {
    this.costosDirAgoCPM = this.costosDirAgoVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirAgoCPM(this.costosDirAgoCPM);
  }
  calculateCostosProdMensual9() {
    this.costosDirSepCPM = this.costosDirSepVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirSepCPM(this.costosDirSepCPM);
  }
  calculateCostosProdMensual10() {
    this.costosDirOctCPM = this.costosDirOctVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirOctCPM(this.costosDirOctCPM);
  }
  calculateCostosProdMensual11() {
    this.costosDirNovCPM = this.costosDirNovVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirNovCPM(this.costosDirNovCPM);
  }
  calculateCostosProdMensual12() {
    this.costosDirDicCPM = this.costosDirDicVM * (1 - this.calcularTotalMUB());
    this.costosService.setCostosDirDicCPM(this.costosDirDicCPM);
  }
  /// venta mes anual
  calcularVentaMesAnual() {
    this.costosDirAnualVM =
      (isNaN(this.costosDirEneVM) ? 0 : this.costosDirEneVM) +
      (isNaN(this.costosDirFebVM) ? 0 : this.costosDirFebVM) +
      (isNaN(this.costosDirMarVM) ? 0 : this.costosDirMarVM) +
      (isNaN(this.costosDirAbrVM) ? 0 : this.costosDirAbrVM) +
      (isNaN(this.costosDirMayVM) ? 0 : this.costosDirMayVM) +
      (isNaN(this.costosDirJunVM) ? 0 : this.costosDirJunVM) +
      (isNaN(this.costosDirJulVM) ? 0 : this.costosDirJulVM) +
      (isNaN(this.costosDirAgoVM) ? 0 : this.costosDirAgoVM) +
      (isNaN(this.costosDirSepVM) ? 0 : this.costosDirSepVM) +
      (isNaN(this.costosDirOctVM) ? 0 : this.costosDirOctVM) +
      (isNaN(this.costosDirNovVM) ? 0 : this.costosDirNovVM) +
      (isNaN(this.costosDirDicVM) ? 0 : this.costosDirDicVM);
    this.costosService.setCostosDirAnualVM(this.costosDirAnualVM);
  }
  /// costos de producción mensuales anual
  calcularCostosProdMesAnual() {
    this.costosDirAnualCPM =
      (isNaN(this.costosDirEneCPM) ? 0 : this.costosDirEneCPM) +
      (isNaN(this.costosDirFebCPM) ? 0 : this.costosDirFebCPM) +
      (isNaN(this.costosDirMarCPM) ? 0 : this.costosDirMarCPM) +
      (isNaN(this.costosDirAbrCPM) ? 0 : this.costosDirAbrCPM) +
      (isNaN(this.costosDirMayCPM) ? 0 : this.costosDirMayCPM) +
      (isNaN(this.costosDirJunCPM) ? 0 : this.costosDirJunCPM) +
      (isNaN(this.costosDirJulCPM) ? 0 : this.costosDirJulCPM) +
      (isNaN(this.costosDirAgoCPM) ? 0 : this.costosDirAgoCPM) +
      (isNaN(this.costosDirSepCPM) ? 0 : this.costosDirSepCPM) +
      (isNaN(this.costosDirOctCPM) ? 0 : this.costosDirOctCPM) +
      (isNaN(this.costosDirNovCPM) ? 0 : this.costosDirNovCPM) +
      (isNaN(this.costosDirDicCPM) ? 0 : this.costosDirDicCPM);
    this.costosService.setCostosDirAnualCPM(this.costosDirAnualCPM);
  }
  calculateTotal1(index: number): void {
    this.input = this.inputValues[index] ?? 0;
    this.total = this.inputValues
      .map(value => parseInt(value?.toString() || '0') || 0)
      .reduce((sum, value) => sum + value, 0);
    switch (index) {
      case 0:
        this.costosDirCantidad11 = this.input;
        this.costosService.setCostosDirCantidad11(this.input);
        break;

      default:
        break;
    }
  }
  activar() {
    this.calculateCostosProdMensual1()
    this.calculateCostosProdMensual2()
    this.calculateCostosProdMensual3()
    this.calculateCostosProdMensual4()
    this.calculateCostosProdMensual5()
    this.calculateCostosProdMensual6()
    this.calculateCostosProdMensual7()
    this.calculateCostosProdMensual8()
    this.calculateCostosProdMensual9()
    this.calculateCostosProdMensual10()
    this.calculateCostosProdMensual11()
    this.calculateCostosProdMensual12()
    this.calcularVentaMesAnual()
    this.calcularCostosProdMesAnual()
    this.calculateTotalTotalVentaMensual()
    this.calculateTotalTotalCompraMensual()
    // this.calculateMUB1()
    // this.calculateMUB2()
    // this.calculateMUB3()
    // this.calculateMUB4()
    this.calcularTotalMUB()
  }
  formatearNumero(numero: number): string {
    if (numero === 0) {
      return '';
    } else {
      const redondeo = Math.round(numero); // Redondea a 0 decimales
      const valorAbsoluto = Math.abs(redondeo); // Valor absoluto

      if (valorAbsoluto === 0) {
        return '';
      } else {
        const resultado = redondeo < 0 ? `(${valorAbsoluto})` : `${valorAbsoluto}`;
        const partes = resultado.split('.');
        partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const resultadoFormateado = partes[0];

        return resultadoFormateado === 'NaN' ? '' : resultadoFormateado;
      }
    }
  }
}
