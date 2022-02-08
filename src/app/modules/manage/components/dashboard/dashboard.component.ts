import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../../../services/work.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkInterface } from '../../../../interfaces/workInterface';
import {ToastrService} from 'ngx-toastr';

interface HtmlInputEvent extends Event{
    target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  file!: File;
  photoSelected!: string | ArrayBuffer | any;

  myPhotosWorks!: [] | any;
  id!: string;
  work!: WorkInterface;

  constructor( private workService: WorkService,
    private router: Router,
    private activateRoute:ActivatedRoute,
    private toastrService: ToastrService,) { }

  ngOnInit(): void {
    this.getmisworks()
  }

  fotoSeleccionada(event: any):void{
    if (event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = a => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  getmisworks(){
    this.workService.getPhotos()
    .subscribe(
      res => {
        this.myPhotosWorks = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  uploadWork(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean{
    this.toastrService.success('Agregando, un momento por favor.', 'Listo.', {
      timeOut: 1000,
      progressBar: true
    });
    this.workService.createPhoto(titulo.value, descripcion.value, this.file)
    .subscribe(
      res => {
        this.getmisworks();
        console.log(res)},
      err => console.log(err)
    )
  
    return false;
  }


  selectedCard(id: string){
    this.router.navigate(['/manage/dash', id]);
  }


}
