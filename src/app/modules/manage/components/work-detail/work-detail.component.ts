import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkService } from '../../../../services/work.service';
import { WorkInterface } from 'src/app/interfaces/workInterface';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css'],
})
export class WorkDetailComponent implements OnInit {

  id!: string;
  work!: WorkInterface;
  modal!: HTMLElement | any;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private workService: WorkService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.workDetail();
  }

  workDetail(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.workService.getPhoto(this.id).subscribe(
        (res) => {
          this.work = res;
          console.log(res)
        },
        (err) => console.log(err)
      );
    });
  }

  deletePhoto(id: string){
    this.workService.deletePhoto(id)
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
    this.closeModal()
    this.router.navigate(['/manage/dash'])
  }

  updatePhoto(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean{
    this.workService.updatePhoto(this.id, titulo.value, descripcion.value)
    .subscribe(
      res =>{
        this.router.navigate(['/manage'])
      },
      err => console.log(err)
    );
    return false
  }

  // Métodos de lo modales.
  openModal(name: string): void {
    this.modal = document.getElementById(name);
    this.modal.style.display = 'block';
  }

  closeModal(): void {
    this. modal.style.display = 'none';
  }

}
