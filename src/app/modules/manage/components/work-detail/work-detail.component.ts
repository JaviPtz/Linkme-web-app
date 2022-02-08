import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkService } from '../../../../services/work.service';
import { WorkInterface } from 'src/app/interfaces/workInterface';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css'],
})
export class WorkDetailComponent implements OnInit {

  id!: string;
  work!: WorkInterface;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private workService: WorkService
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
        this.router.navigate(['/manage/dash'])
      },
      err => console.log(err)
    )
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
}
