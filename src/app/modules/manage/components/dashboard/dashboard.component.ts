import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../../../services/work.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkInterface } from '../../../../interfaces/workInterface';

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
  modal!: HTMLElement | any;

  constructor( private workService: WorkService,
    private router: Router,
    private activateRoute:ActivatedRoute) { }

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

  uploadWork(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean{
    this.workService.createPhoto(titulo.value, descripcion.value, this.file)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    return false;
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

  selectedCard(id: string){
    this.router.navigate(['/manage/dash', id]);
  }



  // Métodos de lo modales.
  // openModal(name: string): void {
  //   this.modal = document.getElementById(name);
  //   this.modal.style.display = 'block';
  // }

  // closeModal(): void {
  //   this. modal.style.display = 'none';
  // }


}
