import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componentes de aplicación
import { AplicationComponent } from './aplication.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
//routing
import { AplicationpRoutingModule } from './aplication-routing.module';
import { ChatbotComponent } from './shared/chatbot/chatbot.component';
import { StoryComponent } from './components/story/story.component';
import { ClientComponent } from './components/client/client.component';
import { ContacComponent } from './components/contac/contac.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    AplicationComponent,
    NavbarComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    ChatbotComponent,
    StoryComponent,
    ClientComponent,
    ContacComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AplicationpRoutingModule
  ]
})
export class AplicationModule { }
