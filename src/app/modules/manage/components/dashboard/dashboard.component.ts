import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../../../services/work.service';
import { Router } from '@angular/router';
import { WorkInterface } from '../../../../interfaces/workInterface';
import {ToastrService} from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
/* carga de scripts */
import { CargarScriptsService } from '../../../../cargar-scripts.service';

CargarScriptsService
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
  public workForm!: FormGroup;

  myPhotosWorks!: [] | any;
  id!: string;
  work!: WorkInterface;

  constructor( private workService: WorkService,
    private router: Router,
    private toastrService: ToastrService,
    private _cargarScripts:CargarScriptsService,
    private formBuilder: FormBuilder,
    ) { 

      this._cargarScripts.Carga(["estilos/stilos"]);
    }

  ngOnInit(): void {
    this.workForm = this.formBuilder.group({
      title: [
        '',
        [Validators.required],
      ],
      description: [
        '',
        [Validators.required],
      ],
    });
    this.getmisworks();
    
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


  // getters de formGroup

  get title(): AbstractControl | any {
    return this.workForm.get('title');
  }

  get description(): AbstractControl | any {
    return this.workForm.get('description');
  }


}
