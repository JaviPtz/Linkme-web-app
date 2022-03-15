import { Component, OnInit } from '@angular/core';

// libreria AOS 
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'linkme-front';


  ngOnInit(): void {
    // inicializar aos
    AOS.init()
  }
}
