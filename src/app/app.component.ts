import { Component } from '@angular/core';
import { Curso, DetalleMatricula } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
}
console.log("Bienvenidos a Typescript");

//#region variables

// let nombre: string = "Arturito";
// let ahorros: number  | string = 500;
// let esAlto: boolean = true;
// esAlto = false;
// ahorros = 1000;
// ahorros = "sin ahorros";
// console.log(nombre, ahorros)
//#endregion

//#region ejemplo
// let pasatiempos: (string | number)[] = ["caminar", "violin"];
// pasatiempos.push("ajedres");
// pasatiempos.push(5);
// console.log(pasatiempos);

// const edad: number[] = [5, 6, 5]
// edad.push(10);
// edad.pop();
// edad.push(9)
// console.log(edad);

// interface Estudiante {
//   nombre: string,
//   apPaterno: string,
//   apMaterno: string,
//   codigo: string,
//   pension: number,
//   estaMatriculado: boolean,
//   pasatiempos: string[],
//   escuela?: string
// }
// let alumno: Estudiante = {
//   nombre: "Danny",
//   apPaterno: "Morveli",
//   apMaterno: "Gamarra",
//   codigo: "016200800d",
//   pension: 700,
//   estaMatriculado: true,
//   pasatiempos: ["futbol","basket"]
// };
// alumno.escuela = "Ingenieria de sistemas";

// console.log(alumno);
// console.table(alumno);
//#endregion

//#region desestructuracion de parametros
// interface DetalleMatricula{
//   nombreCurso: string
//   creditos: number
// }

// const mat_mate: DetalleMatricula = {
//   nombreCurso: "Matematica 1",
//   creditos: 3
// }

// const mat_ads: DetalleMatricula = {
//   nombreCurso: "Analisis y Diseño de Sistemas",
//   creditos: 4
// }

// function totalCreditos(detalles: DetalleMatricula[]): number[] {
//   let totalCreditos = 0;
//   let totalCursos = 0;
//   // detalles.forEach((detalleMatricula) => {
//   //   totalCreditos += detalleMatricula.creditos;
//   // });

//   detalles.forEach(({creditos}) => {
//     totalCreditos += creditos;
//     totalCursos ++;
//   });

//   return [totalCreditos, totalCursos];
// }

// const detMat: DetalleMatricula[] = [mat_mate, mat_ads];

// const [creditosMatriculados, cursosMatriculados] = totalCreditos(detMat);

// console.log("Total de creditos matriculados: ", creditosMatriculados);
// console.log("Total cursos matriculados: ", cursosMatriculados);
//#endregion


//#region import export
// const curso: Curso = {
//   docente: "Juan Perez",
//   nombre: "Matematica 1",
//   creditos: 3
// }

// const mat_mate: DetalleMatricula = {
//   nombreCurso: "Matematica 1",
//   creditos: 3
// }

// const mat_ads: DetalleMatricula = {
//   nombreCurso: "Analisis y Diseño de Sistemas",
//   creditos: 4
// }

// function totalCreditos(detalles: DetalleMatricula[]): number[] {
//   let totalCreditos = 0;
//   let totalCursos = 0;
//   // detalles.forEach((detalleMatricula) => {
//   //   totalCreditos += detalleMatricula.creditos;
//   // });

//   detalles.forEach(({creditos}) => {
//     totalCreditos += creditos;
//     totalCursos ++;
//   });

//   return [totalCreditos, totalCursos];
// }

// const detMat: DetalleMatricula[] = [mat_mate, mat_ads];

// const [creditosMatriculados, cursosMatriculados] = totalCreditos(detMat);

// console.log("Total de creditos matriculados: ", creditosMatriculados);
// console.log("Total cursos matriculados: ", cursosMatriculados);
//#endregion

class Alumno {
  // private nombre: string;
  // private dni: string;
  static carreraProfesional: string;

  // constructor(nombre: string, dni: string){
  //   this.nombre = nombre;
  //   this.dni = dni;
  // }
  constructor(
    private nombre: string,
    private dni: string
  ){}

  public mostrarAlumno(){
    console.log("Carrera Pofesional: ",Alumno.carreraProfesional);
    console.log("nombre: ",this.nombre);
    console.log("DNI: ",this.dni);
    // console.log(alumno);
    // console.table(alumno);
    }
}

Alumno.carreraProfesional = "IS";
const e01cp01: Alumno = new Alumno("Juan Perez", "8888888");

// function mostrarAlumno(alumno: Alumno){
//   const {nombre, dni} = alumno;
//   console.log("Carrera Pofesional: ",Alumno.carreraProfesional);
//   console.log("nombre: ",nombre);
//   console.log("DNI: ",dni);
//   // console.log(alumno);
//   // console.table(alumno);
// }

// mostrarAlumno(e01cp01);
console.log("--------------------------------")
console.log(e01cp01);
e01cp01.mostrarAlumno();