import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/interfaces/clienInterface';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  id!: string;
  client!: ClientInterface;
  modal!: HTMLElement | any;
  myClients!: [] | any;

  constructor(
    private clientService: ClientService,
    private toastrService: ToastrService,

  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClients()
    .subscribe(
      res => {
        this.myClients = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  deleteClient(id: string){
    this.clientService.deleteClient(id)
    .subscribe(
      res => {
        console.log(res);
        this.toastrService.success('', 'Se elimino con éxito.', {
          timeOut: 2000,
          progressBar: true
        });
      },
      err =>{
        console.log(err)
        this.toastrService.error('Error con el servidor.', 'error al borrar', {
          timeOut: 2000,
          progressBar: true
        });
      }
    );
    this.closeModal();
    this.getClients();
  }

  // Métodos de lo modales.
  openModal(name: string, id: string): void {
    this.modal = document.getElementById(name);
    this.modal.style.display = 'block';

    if(id){
      this.id = id;
    }
  }

  closeModal(): void {
    this. modal.style.display = 'none';
  }

}
