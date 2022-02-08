import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes de aplicacion
import { ManageComponent } from './manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';

const routes: Routes = [
    {
        path: 'manage', component: ManageComponent,
        children: [
            {path: 'dash', component: DashboardComponent},
            {path: 'dash/:id', component: WorkDetailComponent},
            {path: '', redirectTo: '/manage/dash', pathMatch:'full'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
