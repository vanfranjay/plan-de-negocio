import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomesService {

  constructor() { }
  private home!: string;
  public getHome(): string {
    return this.home;
  }
  public setHome(value: string) {
    this.home = value;
  }
  //variables deudor
  private homeNombreDeudor!: string;
  public getHomeNombreDeudor(){
    return this.homeNombreDeudor;
  }
  public setHomeNombreDeudor(value: string) {
    this.homeNombreDeudor = value;
  }
  private homebreCiDeudor!: number;
  public getHomebreCiDeudor(): number {
    return this.homebreCiDeudor;
  }
  public setHomebreCiDeudor(value: number) {
    this.homebreCiDeudor = value;
  }
  private homeExtensionDeudor!: string;
  public getHomeExtensionDeudor(): string {
    return this.homeExtensionDeudor;
  }
  public setHomeExtensionDeudor(value: string) {
    this.homeExtensionDeudor = value;
  }
  private homeEdadDeudor!: number;
  public getHomeEdadDeudor(): number {
    return this.homeEdadDeudor;
  }
  public setHomeEdadDeudor(value: number) {
    this.homeEdadDeudor = value;
  }
  private homeEstadoCivilDeudor!: string;
  public getHomeEstadoCivilDeudor(): string {
    return this.homeEstadoCivilDeudor;
  }
  public setHomeEstadoCivilDeudor(value: string) {
    this.homeEstadoCivilDeudor = value;
  }
  private homeTelefonoDeudor!: number;
  public getHomeTelefonoDeudor(): number {
    return this.homeTelefonoDeudor;
  }
  public setHomeTelefonoDeudor(value: number) {
    this.homeTelefonoDeudor = value;
  }
  private homeDireccionDeudor!: string;
  public getHomeDireccionDeudor(): string {
    return this.homeDireccionDeudor;
  }
  public setHomeDireccionDeudor(value: string) {
    this.homeDireccionDeudor = value;
  }

  //variables Codeudor
  private homeNombreCodeudor!: string;
  public getHomeNombreCodeudor(): string {
    return this.homeNombreCodeudor;
  }
  public setHomeNombreCodeudor(value: string) {
    this.homeNombreCodeudor = value;
  }
  private homebreCiCodeudor!: number;
  public getHomebreCiCodeudor(): number {
    return this.homebreCiCodeudor;
  }
  public setHomebreCiCodeudor(value: number) {
    this.homebreCiCodeudor = value;
  }
  private homeExtensionCodeudor!: string;
  public getHomeExtensionCodeudor(): string {
    return this.homeExtensionCodeudor;
  }
  public setHomeExtensionCodeudor(value: string) {
    this.homeExtensionCodeudor = value;
  }
  private homeEdadCodeudor!: number;
  public getHomeEdadCodeudor(): number {
    return this.homeEdadCodeudor;
  }
  public setHomeEdadCodeudor(value: number) {
    this.homeEdadCodeudor = value;
  }
  private homeEstadoCivilCodeudor!: string;
  public getHomeEstadoCivilCodeudor(): string {
    return this.homeEstadoCivilCodeudor;
  }
  public setHomeEstadoCivilCodeudor(value: string) {
    this.homeEstadoCivilCodeudor = value;
  }
  private homeTelefonoCodeudor!: number;
  public getHomeTelefonoCodeudor(): number {
    return this.homeTelefonoCodeudor;
  }
  public setHomeTelefonoCodeudor(value: number) {
    this.homeTelefonoCodeudor = value;
  }
  private homeDireccionCodeudor!: string;
  public getHomeDireccionCodeudor(): string {
    return this.homeDireccionCodeudor;
  }
  public setHomeDireccionCodeudor(value: string) {
    this.homeDireccionCodeudor = value;
  }

  //variable persona jurídica
  private homeRazonSocilJuridica!: string;
  public getHomeRazonSocilJuridica(): string {
    return this.homeRazonSocilJuridica;
  }
  public setHomeRazonSocilJuridica(value: string) {
    this.homeRazonSocilJuridica = value;
  }
  private homeNitJuridica!: string;
  public getHomeNitJuridica(): string {
    return this.homeNitJuridica;
  }
  public setHomeNitJuridica(value: string) {
    this.homeNitJuridica = value;
  }
  private homeSiglaJuridica!: string;
  public getHomeSiglaJuridica(): string {
    return this.homeSiglaJuridica;
  }
  public setHomeSiglaJuridica(value: string) {
    this.homeSiglaJuridica = value;
  }
  private homeSociedadJuridica!: string;
  public getHomeSociedadJuridica(): string {
    return this.homeSociedadJuridica;
  }
  public setHomeSociedadJuridica(value: string) {
    this.homeSociedadJuridica = value;
  }
  private homeRepresentanteLegalJuridica!: string;
  public getHomeRepresentanteLegalJuridica(): string {
    return this.homeRepresentanteLegalJuridica;
  }
  public setHomeRepresentanteLegalJuridica(value: string) {
    this.homeRepresentanteLegalJuridica = value;
  }
  private homeDomicilioJuridica!: string;
  public getHomeDomicilioJuridica(): string {
    return this.homeDomicilioJuridica;
  }
  public setHomeDomicilioJuridica(value: string) {
    this.homeDomicilioJuridica = value;
  }

  //variable emprendimiento
  private homeActividadEmpre!: string;
  public getHomeActividadEmpre(): string {
    return this.homeActividadEmpre;
  }
  public setHomeActividadEmpre(value: string) {
    this.homeActividadEmpre = value;
  }
  private homeDeptEmpre!: string;
  public getHomeDeptEmpre(): string {
    return this.homeDeptEmpre;
  }
  public setHomeDeptEmpre(value: string) {
    this.homeDeptEmpre = value;
  }
  private homeMunicipioEmpre!: string;
  public getHomeMunicipioEmpre(): string {
    return this.homeMunicipioEmpre;
  }
  public setHomeMunicipioEmpre(value: string) {
    this.homeMunicipioEmpre = value;
  }
  private homeTelefonoEmpre!: number;
  public getHomeTelefonoEmpre(): number {
    return this.homeTelefonoEmpre;
  }
  public setHomeTelefonoEmpre(value: number) {
    this.homeTelefonoEmpre = value;
  }
  private homeDireccionEmpre!: string;
  public getHomeDireccionEmpre(): string {
    return this.homeDireccionEmpre;
  }
  public setHomeDireccionEmpre(value: string) {
    this.homeDireccionEmpre = value;
  }

  //variables descripción plan de negocio
  private homeDescripPlanNeg!: string;
  public getHomeDescripPlanNeg(): string {
    return this.homeDescripPlanNeg;
  }
  public setHomeDescripPlanNeg(value: string) {
    this.homeDescripPlanNeg = value;
  }
  private homeSiNoPlanNeg!: string;
  public getHomeSiNoPlanNeg(): string {
    return this.homeSiNoPlanNeg;
  }
  public setHomeSiNoPlanNeg(value: string) {
    this.homeSiNoPlanNeg = value;
  }
  private homeMesPlanNeg!: number;
  public getHomeMesPlanNeg(): number {
    return this.homeMesPlanNeg;
  }
  public setHomeMesPlanNeg(value: number) {
    this.homeMesPlanNeg = value;
  }
  private homeInversionPlanNeg!: string;
  public getHomeInversionPlanNeg(): string {
    return this.homeInversionPlanNeg;
  }
  public setHomeInversionPlanNeg(value: string) {
    this.homeInversionPlanNeg = value;
  }
  private homeRentablePlanNeg!: string;
  public getHomeRentablePlanNeg(): string {
    return this.homeRentablePlanNeg;
  }
  public setHomeRentablePlanNeg(value: string) {
    this.homeRentablePlanNeg = value;
  }

  //variable descripción del producto o servicio
  private homeNombreProd1!: string;
  public getHomeNombreProd1(): string {
    return this.homeNombreProd1;
  }
  public setHomeNombreProd1(value: string) {
    this.homeNombreProd1 = value;
  }
  private homeNombreProd2!: string;
  public getHomeNombreProd2(): string {
    return this.homeNombreProd2;
  }
  public setHomeNombreProd2(value: string) {
    this.homeNombreProd2 = value;
  }
  private homeNombreProd3!: string;
  public getHomeNombreProd3(): string {
    return this.homeNombreProd3;
  }
  public setHomeNombreProd3(value: string) {
    this.homeNombreProd3 = value;
  }
  private homeNombreProd4!: string;
  public getHomeNombreProd4(): string {
    return this.homeNombreProd4;
  }
  public setHomeNombreProd4(value: string) {
    this.homeNombreProd4 = value;
  }
  private homeProcElabProd1!: string;
  public getHomeProcElabProd1(): string {
    return this.homeProcElabProd1;
  }
  public setHomeProcElabProd1(value: string) {
    this.homeProcElabProd1 = value;
  }
  private homeProcElabProd2!: string;
  public getHomeProcElabProd2(): string {
    return this.homeProcElabProd2;
  }
  public setHomeProcElabProd2(value: string) {
    this.homeProcElabProd2 = value;
  }
  private homeProcElabProd3!: string;
  public getHomeProcElabProd3(): string {
    return this.homeProcElabProd3;
  }
  public setHomeProcElabProd3(value: string) {
    this.homeProcElabProd3 = value;
  }
  private homeProcElabProd4!: string;
  public getHomeProcElabProd4(): string {
    return this.homeProcElabProd4;
  }
  public setHomeProcElabProd4(value: string) {
    this.homeProcElabProd4 = value;
  }
  private homeCaractProd1!: string;
  public getHomeCaractProd1(): string {
    return this.homeCaractProd1;
  }
  public setHomeCaractProd1(value: string) {
    this.homeCaractProd1 = value;
  }
  private homeCaractProd2!: string;
  public getHomeCaractProd2(): string {
    return this.homeCaractProd2;
  }
  public setHomeCaractProd2(value: string) {
    this.homeCaractProd2 = value;
  }
  private homeCaractProd3!: string;
  public getHomeCaractProd3(): string {
    return this.homeCaractProd3;
  }
  public setHomeCaractProd3(value: string) {
    this.homeCaractProd3 = value;
  }
  private homeCaractProd4!: string;
  public getHomeCaractProd4(): string {
    return this.homeCaractProd4;
  }
  public setHomeCaractProd4(value: string) {
    this.homeCaractProd4 = value;
  }
}
