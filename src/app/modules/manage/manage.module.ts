import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageComponent } from './manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageRoutingModule } from './manage-routing.module';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { ClientComponent } from './components/client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    ManageComponent,
    DashboardComponent,
    WorkDetailComponent,
    ClientComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManageModule { }
