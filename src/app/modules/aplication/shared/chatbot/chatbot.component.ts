import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private cargarScriptsService: CargarScriptsService) { 

    this.cargarScriptsService.Carga(["estilos/dialogflow"]);
  }

  ngOnInit(): void {
  }

}
