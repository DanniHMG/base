import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
    nombre: string = "Juan Perez";
    edad: number = 28;

    recibirDatos(): string {
      return this.nombre + " - " + this.edad;
    }
}