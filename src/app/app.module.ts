import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './components/correo/correo.component';
import { ListaCorreosComponent } from './components/lista-correos/lista-correos.component';
import { NuevoCorreoComponent } from './components/nuevo-correo/nuevo-correo.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CorreosRecibidosComponent } from './Views/correos-recibidos/correos-recibidos.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent,
    NuevoCorreoComponent,
    AvisosComponent,
    CorreosRecibidosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
