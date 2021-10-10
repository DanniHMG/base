import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ListaclientesComponent } from './clientes/listaclientes/listaclientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListaclientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


