import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes de aplicacion
import { ManageComponent } from './manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { ClientComponent } from './components/client/client.component';
import { RegisterComponent } from './components/register/register.component';
//Guard
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
    {
        path: 'manage', component: ManageComponent,
        /* canActivate: [AuthGuard], */
        children: [
            {path: 'dash', component: DashboardComponent},
            {path: 'dash/:id', component: WorkDetailComponent},
            {path: 'new', component: RegisterComponent},
            {path: 'client', component: ClientComponent},
            {path: 'client/:id', component: ClientComponent},
            {path: '', redirectTo: '/manage/dash', pathMatch:'full'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
