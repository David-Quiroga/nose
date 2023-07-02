import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { BibliotecarioComponent } from './pages/bibliotecario/bibliotecario.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'bibliotecario', component: BibliotecarioComponent},
  { path: 'usuario', component: UsuarioComponent},
  {path: 'dashboard', component: DashboardComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
