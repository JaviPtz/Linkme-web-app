import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

    constructor(private AuthService: AuthService){}

    logout(): void{
        this.AuthService.logout();
        console.log('Esperamos verte de vuelta', 'Suerte.', {
          timeOut: 1300,
          progressBar: true
        });
      }

}
