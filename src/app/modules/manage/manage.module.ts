import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageComponent } from './manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageRoutingModule } from './manage-routing.module';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';



@NgModule({
  declarations: [
    ManageComponent,
    DashboardComponent,
    WorkDetailComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
