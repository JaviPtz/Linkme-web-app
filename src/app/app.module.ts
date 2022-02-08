import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//Modulos de aplication
import { AplicationModule } from './modules/aplication/aplication.module';
import { WebModule } from './modules/web/web.module';
//componete de aplicación Notfound
import { NotFoundComponent } from './modules/aplication/shared/not-found/not-found.component';

import {HttpClientModule} from '@angular/common/http';
import { ManageModule } from './modules/manage/manage.module';
import { ManageRoutingModule } from './modules/manage/manage-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ], 
  imports: [
    BrowserModule,
    AplicationModule,
    WebModule,
    ManageModule,
    AppRoutingModule,
    ManageRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
