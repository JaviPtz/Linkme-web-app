import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mobile_menu: any;
  mobile_item: any;

  constructor(private _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(['estilos/navbar']);
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
}
