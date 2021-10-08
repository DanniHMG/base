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
//CAMBIO AQUI
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

//#region clases
// class Alumno {
//   // private nombre: string;
//   // private dni: string;
//   static carreraProfesional: string;

//   // constructor(nombre: string, dni: string){
//   //   this.nombre = nombre;
//   //   this.dni = dni;
//   // }
//   //aa
//   constructor(
//     private nombre: string,
//     private dni?: string
//   ){}

//   public mostrarAlumno(){
//     console.log("Carrera Pofesional: ",Alumno.carreraProfesional);
//     console.log("nombre: ",this.nombre);
//     console.log("DNI: ",this.dni);
//     // console.log(alumno);
//     // console.table(alumno);
//     }
// }

// Alumno.carreraProfesional = "IS";
// const e01cp01: Alumno = new Alumno("Juan Perez");

// // function mostrarAlumno(alumno: Alumno){
// //   const {nombre, dni} = alumno;
// //   console.log("Carrera Pofesional: ",Alumno.carreraProfesional);
// //   console.log("nombre: ",nombre);
// //   console.log("DNI: ",dni);
// //   // console.log(alumno);
// //   // console.table(alumno);
// // }

// // mostrarAlumno(e01cp01);er
// console.log("--------------------------------")
// console.log(e01cp01);
// e01cp01.mostrarAlumno();
// console.log("-----------------------")
//#endregion

//#region uso de static y this
// class Cafetera {
//   static serie: number = 0;

//   constructor(
//     private color: string,
//     private nroSerie?: number
//   ){
//     Cafetera.serie += 1;
//     this.nroSerie = Cafetera.serie;
//   }

//   mostrar(){
//     console.log("---------------");
//     console.log("Serie: ", this.nroSerie);
//     console.log("Color: ", this.color);
//     console.log("---------------");
//   }
// }

// const cafeteras: Cafetera[] = [new Cafetera("rojo"), new Cafetera("azul")]; 
// cafeteras.push(new Cafetera("verde"));
// cafeteras.push(new Cafetera("morado"));

// cafeteras.forEach((cafetera) => cafetera.mostrar());
// console.log("estado de la variable estatica: ", Cafetera.serie);
//#endregion

//#region herencia y polimorfismo
// class Persona {
//   constructor(
//     protected nombre: string,
//     protected dni: string
//   ){};

//   getNombre(): string {
//     return this.nombre;
//   }
//   getDni(): string {
//     return this.dni;
//   }

// }

// class Alumno extends Persona {
//   constructor(
//     nombre: string,
//     dni: string,
//     private codigo: string
//   ){
//     super(nombre, dni);
//   };

//   mostrar(){
//     console.log("---------------------------");
//     console.log("Nombre: ", this.nombre);
//     console.log("DNI: ", this.dni);
//     console.log("COdigo: ", this.codigo);
//     console.log("---------------------------");
//   }
// }

// class Docente extends Persona {
//   constructor(
//     nombre: string,
//     dni: string,
//     private codigoDocente: string
//   ){
//     super(nombre, dni);
//   };

//   mostrar(){
//     console.log("---------------------------");
//     console.log("Nombre: ", this.nombre);
//     console.log("DNI: ", this.dni);
//     console.log("COdigoDocente: ", this.codigoDocente);
//     console.log("---------------------------");
//   }
// }

// const mostrarPersona = (persona: Persona) => {
//     console.log("---------------------------");
//     console.log("Nombre: ", persona.getNombre());
//     console.log("DNI: ", persona.getDni());
//     console.log("---------------------------");
// }

// const alumnos: Alumno[] = [
//   new Alumno("Juan Perez", "000000","2021001a"),
//   new Alumno("Juan Garcia", "222000","1121001a"),
//   new Alumno("Juan Alvarado", "330000","22221001a"),
//   new Alumno("Moises Escalante", "440000","33021001a"),
// ];
// const docentes: Docente[] = [
//   new Docente("Docente Juan Perez", "000000","2021001a"),
//   new Docente("Docente Juan Garcia", "222000","1121001a"),
//   new Docente("Docente Juan Alvarado", "330000","22221001a"),
//   new Docente("Docente Moises Escalante", "440000","33021001a"),
// ];

// alumnos.forEach((Alumno) =>  Alumno.mostrar());

// alumnos.forEach((alumno) => mostrarPersona(alumno));
// docentes.forEach((docente) => mostrarPersona(docente));
//#endregion

//#region generics--
// function queSoy<T>(valor: T) {
//   return valor;
// }

// let soyString = queSoy("Hola desde typeScript");
// let soyNumero = queSoy(5);
// let soyArray = queSoy([1,2,3,4,5]);
//#endregion

//#region decoradores imcompleto
// class Clase{
//   public atributo: string = "12345";

//   mostrar() {
//     console.log("hola desde Clase");
//   }
// }

// console.log(Clase);

// const clase = new Clase();

// console.log(clase);
//#endregion

interface Padre {
  nombre: string,
  hijos?: string[]
}

const padre1 = {
  nombre: "Pedro"
}

const padre2 = {
  nombre: "Alfredo",
  hijos: ["Ana", "Lucia"]
}

function mostrarHijos(padre: Padre): void {
  const cantidadHijos = padre.hijos?.length;

  console.log(cantidadHijos);
}

mostrarHijos(padre1);
mostrarHijos(padre2);