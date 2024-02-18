import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { OficinaComponent } from './components/oficina/oficina.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ActividadComponent,
    OficinaComponent,
    ContactoComponent,
    ProveedorComponent,
    ProductoComponent,
    ClienteComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
