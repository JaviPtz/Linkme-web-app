import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
  private validateEmail =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.pattern(this.validateEmail)],
      ],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  register(): void {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value);
    if(this.registerForm.value == null){
      this.toastrService.info('Error', 'complete los campos',{
        timeOut: 1500,
        progressBar: true
      });
    }else{
      this.toastrService.success('Registratrando', 'Inicia sesión por favor',{
        timeOut: 2000,
        progressBar: true
      });
    }
    this.registerForm.reset();
  }

  // getters de formGroup

  get email(): AbstractControl | any {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl | any {
    return this.registerForm.get('password');
  }

}
