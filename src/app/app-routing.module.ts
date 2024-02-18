import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OficinaComponent } from './components/oficina/oficina.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';

const routes: Routes = [
  {  path: "", component: HomeComponent},
  {  path: "actividad", component: ActividadComponent},
  {  path: "cliente", component: ClienteComponent},
  {  path: "contacto", component: ContactoComponent},
  {  path: "dashboard", component: DashboardComponent},
  {  path: "empleado", component: EmpleadoComponent},
  {  path: "login", component: LoginComponent},
  {  path: "oficina", component: OficinaComponent},
  {  path: "producto", component: ProductoComponent},
  {  path: "proveedor", component: ProveedorComponent},
  { path: '**', redirectTo: '/404' }, // Wildcard route
  { path: '404', component: NotFoundComponent }, // 404 route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
