import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClientInterface } from '../interfaces/clienInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URI = 'http://localhost:3000/client'

  constructor(private HttpClient:HttpClient) { }


  getClients(){
    return this.HttpClient.get<ClientInterface[]>(this.URI);
  }


  deleteClient(id: string){
    return this.HttpClient.delete<ClientInterface>(`${this.URI}/${id}`);
  }

}
