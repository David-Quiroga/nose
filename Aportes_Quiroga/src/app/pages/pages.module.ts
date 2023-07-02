import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    PagesComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
