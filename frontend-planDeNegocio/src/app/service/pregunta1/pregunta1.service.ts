import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Pregunta1Service {

  constructor() { }
  //analisis de mercado
  private pregunta1Clientes!: String;
  public getPregunta1Clientes(): String {
    return this.pregunta1Clientes;
  }
  public setPregunta1Clientes(value: String) {
    this.pregunta1Clientes = value;
  }
  private pregunta1ClientesPotenciales!: String;
  public getPregunta1ClientesPotenciales(): String {
    return this.pregunta1ClientesPotenciales;
  }
  public setPregunta1ClientesPotenciales(value: String) {
    this.pregunta1ClientesPotenciales = value;
  }
  private pregunta1ClientesPotencialesAct!: String;
  public getPregunta1ClientesPotencialesAct(): String {
    return this.pregunta1ClientesPotencialesAct;
  }
  public setPregunta1ClientesPotencialesAct(value: String) {
    this.pregunta1ClientesPotencialesAct = value;
  }

  private pregunta1Minimo1!: number;
  public getPregunta1Minimo1(): number {
    return this.pregunta1Minimo1;
  }
  public setPregunta1Minimo1(value: number) {
    this.pregunta1Minimo1 = value;
  }
  private pregunta1Minimo2!: number;
  public getPregunta1Minimo2(): number {
    return this.pregunta1Minimo2;
  }
  public setPregunta1Minimo2(value: number) {
    this.pregunta1Minimo2 = value;
  }
  private pregunta1Minimo3!: number;
  public getPregunta1Minimo3(): number {
    return this.pregunta1Minimo3;
  }
  public setPregunta1Minimo3(value: number) {
    this.pregunta1Minimo3 = value;
  }
  private pregunta1Maximo1!: number;
  public getPregunta1Maximo1(): number {
    return this.pregunta1Maximo1;
  }
  public setPregunta1Maximo1(value: number) {
    this.pregunta1Maximo1 = value;
  }
  private pregunta1Maximo2!: number;
  public getPregunta1Maximo2(): number {
    return this.pregunta1Maximo2;
  }
  public setPregunta1Maximo2(value: number) {
    this.pregunta1Maximo2 = value;
  }
  private pregunta1Maximo3!: number;
  public getPregunta1Maximo3(): number {
    return this.pregunta1Maximo3;
  }
  public setPregunta1Maximo3(value: number) {
    this.pregunta1Maximo3 = value;
  }
  private pregunta1Promedio1!: number;
  public getPregunta1Promedio1(): number {
    return this.pregunta1Promedio1;
  }
  public setPregunta1Promedio1(value: number) {
    this.pregunta1Promedio1 = value;
  }
  private pregunta1Promedio2!: number;
  public getPregunta1Promedio2(): number {
    return this.pregunta1Promedio2;
  }
  public setPregunta1Promedio2(value: number) {
    this.pregunta1Promedio2 = value;
  }
  private pregunta1Promedio3!: number;
  public getPregunta1Promedio3(): number {
    return this.pregunta1Promedio3;
  }
  public setPregunta1Promedio3(value: number) {
    this.pregunta1Promedio3 = value;
  }

  //Analisis de la competencia
  private pregunta1Competidores!: String;
  public getPregunta1Competidores(): String {
    return this.pregunta1Competidores;
  }
  public setPregunta1Competidores(value: String) {
    this.pregunta1Competidores = value;
  }
  private pregunta1AccionCompetencia!: String;
  public getPregunta1AccionCompetencia(): String {
    return this.pregunta1AccionCompetencia;
  }
  public setPregunta1AccionCompetencia(value: String) {
    this.pregunta1AccionCompetencia = value;
  }

  //estratégia de mercado
  private pregunta1ProdcServicio!: String;
  public getPregunta1ProdcServicio(): String {
    return this.pregunta1ProdcServicio;
  }
  public setPregunta1ProdcServicio(value: String) {
    this.pregunta1ProdcServicio = value;
  }
  private pregunta1ProdcMayoringreso!: String;
  public getPregunta1ProdcMayoringreso(): String {
    return this.pregunta1ProdcMayoringreso;
  }
  public setPregunta1ProdcMayoringreso(value: String) {
    this.pregunta1ProdcMayoringreso = value;
  }
  private pregunta1PrecioServicio!: String;
  public getPregunta1PrecioServicio(): String {
    return this.pregunta1PrecioServicio;
  }
  public setPregunta1PrecioServicio(value: String) {
    this.pregunta1PrecioServicio = value;
  }
  private pregunta1DetPrecioServProd!: String;
  public getPregunta1DetPrecioServProd(): String {
    return this.pregunta1DetPrecioServProd;
  }
  public setPregunta1DetPrecioServProd(value: String) {
    this.pregunta1DetPrecioServProd = value;
  }
}
