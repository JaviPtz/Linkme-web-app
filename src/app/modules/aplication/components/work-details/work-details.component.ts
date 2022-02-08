import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkService } from '../../../../services/work.service';
import { WorkInterface } from 'src/app/interfaces/workInterface';


@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  id!: string;
  work!: WorkInterface;

  constructor( private router:Router,
    private activateRoute: ActivatedRoute,
    private workService:WorkService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.workService.getPhoto(this.id)
      .subscribe(
        res => {
          this.work = res;
        },
        err => console.log(err)
      )
    }
    )

  }



}
