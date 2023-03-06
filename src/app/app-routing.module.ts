import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { Login2Component } from './componentes/login2/login2.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { AuthGuard } from './guardianes/auth.guard';
import { TablaAzureComponent } from './componentes/tabla-azure/tabla-azure.component';

const routes: Routes = [
  {path:'', component: TableroComponent},
  {path: 'log', component: Login2Component},
  {path: 'login', component: LoginComponent},
  { path: 'tablaAzure', component: TablaAzureComponent },
  {path: 'registrarse', component: RegistroComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'cliente/editar/:id', component: EditarClienteComponent},
  {path: '**', component: NoEncontradoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {



 }
