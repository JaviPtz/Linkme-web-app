import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WorkInterface } from '../interfaces/workInterface';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  URI = 'http://localhost:3000/work'

  constructor(private HttpClient:HttpClient) { }

  createPhoto(titulo: string, descripcion: string, image: File){
    const fd = new FormData();
    fd.append('titulo', titulo);
    fd.append('descripcion', descripcion);
    fd.append('image', image);

    return this.HttpClient.post(this.URI, fd);

  }

  getPhotos(){
    return this.HttpClient.get<WorkInterface[]>(this.URI);
  }

  getPhoto(id: string){
    return this.HttpClient.get<WorkInterface>(`${this.URI}/${id}`);
  }

  deletePhoto(id: string){
    return this.HttpClient.delete<WorkInterface>(`${this.URI}/${id}`);
  }

  updatePhoto(id: string, titulo: string, descripcion:string){
    return this.HttpClient.put(`${this.URI}/${id}`,{titulo, descripcion});
  }
}
