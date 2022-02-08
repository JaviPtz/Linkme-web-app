import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  myPhotosWorks!: [] | any;

  constructor(private workService: WorkService, private router:Router) { }

  ngOnInit(): void {
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
    this.router.navigate(['/app/work', id]);
  }

}
