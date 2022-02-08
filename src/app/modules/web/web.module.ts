import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componentes de web
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
// rutas de web
import { WebRoutingModule } from './web-routing.module';
//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ AuthService]
})
export class WebModule { }
