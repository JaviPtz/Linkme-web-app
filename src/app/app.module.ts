import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
//Modulos de aplication
import { AplicationModule } from './modules/aplication/aplication.module';
import { WebModule } from './modules/web/web.module';
import { ManageModule } from './modules/manage/manage.module';
import { ManageRoutingModule } from './modules/manage/manage-routing.module';

//guards
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
  ], 
  imports: [
    BrowserModule,
    AplicationModule,
    WebModule,
    ManageModule,
    AppRoutingModule,
    ManageRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
