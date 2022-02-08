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

// Librerias de ngx-tranlate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { WorkDetailsComponent } from './components/work-details/work-details.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    WorkDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    AplicationpRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
    
  ]
})
export class AplicationModule { }
