import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes de aplicacion
import { AplicationComponent } from './aplication.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { WorkComponent } from './components/work/work.component';
import { ClientComponent } from './components/client/client.component';
import { ContacComponent } from './components/contac/contac.component';

const routes: Routes = [
    {
        path: 'app', component: AplicationComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'work', component: WorkComponent},
            {path: 'about', component: AboutComponent},
            {path: 'our_story', component: StoryComponent},
            {path: 'client', component: ClientComponent},
            {path: 'contact', component: ContacComponent},
            {path: '', redirectTo: '/app/home', pathMatch:'full'},
        ]
    },
    {
        path: '', redirectTo: '/app/home', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationpRoutingModule { }
