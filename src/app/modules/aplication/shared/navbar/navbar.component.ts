import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mobile_menu: any;
  mobile_item: any;
   /* lista de idiomas */
  langs: string[] =[];

  constructor(
    private translate: TranslateService) {
    /* idiomas que soporta la web */
    translate.addLangs(['es', 'en']);
    this.langs = translate.getLangs();
  }

  ngOnInit(): void {}

  /* MOSTRAR EL MENU */
  menu() {
    this.mobile_menu = document
      .querySelector('.header .navbar .nav-list ul')
      ?.classList.toggle('active');
  }

  /* OCULTAR MENU */
  removeMemu() {
    this.mobile_item = document
      .querySelector('.header .navbar .nav-list ul li a')
      ?.classList.toggle('active');
    this.mobile_menu = document
      .querySelector('.header .navbar .nav-list ul')
      ?.classList.toggle('active');
  }
  /* Cambiar idioma */
  changeLang(lang: string){
    this.translate.use(lang);
  }
}
